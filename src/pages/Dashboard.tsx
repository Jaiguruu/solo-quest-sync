
import { useEffect, useState } from "react";
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card3D } from "@/components/ui/card-3d";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/utils/supabase";

interface UserStats {
  level: number;
  rank: string;
  xp: number;
  tasksCompleted: number;
}

interface Task {
  id: string;
  user_id: string;
  description: string;
  completed: boolean;
  created_at: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [stats, setStats] = useState<UserStats>({
    level: 1,
    rank: "E",
    xp: 0,
    tasksCompleted: 0
  });

  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (!data?.session) {
        navigate('/login');
        return;
      }
      
      setUser(data.session.user);
      fetchUserData(data.session.user.id);
      fetchTasks(data.session.user.id);
    };
    
    checkUser();
  }, [navigate]);
  
  // Fetch user data from Supabase
  const fetchUserData = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', userId)
        .single();
        
      if (error) {
        // If no stats exist yet, create default stats
        if (error.code === 'PGRST116') {
          const newStats = {
            user_id: userId,
            level: 1,
            rank: "E",
            xp: 0,
            tasks_completed: 0
          };
          
          const { data: createdData, error: createError } = await supabase
            .from('user_stats')
            .insert([newStats])
            .select();
            
          if (!createError) {
            setStats({
              level: 1,
              rank: "E",
              xp: 0,
              tasksCompleted: 0
            });
          }
        } else {
          console.error('Error fetching user stats:', error);
        }
      } else if (data) {
        setStats({
          level: data.level,
          rank: data.rank,
          xp: data.xp,
          tasksCompleted: data.tasks_completed
        });
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error in fetchUserData:', error);
      setLoading(false);
    }
  };
  
  // Fetch tasks from Supabase
  const fetchTasks = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error('Error fetching tasks:', error);
        return;
      }
      
      setTasks(data || []);
    } catch (error) {
      console.error('Error in fetchTasks:', error);
    }
  };
  
  // Add new task
  const addTask = async () => {
    if (!newTask.trim() || !user) return;
    
    try {
      const newTaskObj = {
        user_id: user.id,
        description: newTask,
        completed: false,
        created_at: new Date().toISOString()
      };
      
      const { error } = await supabase
        .from('tasks')
        .insert([newTaskObj])
        .select();
        
      if (error) {
        toast({
          title: "Error",
          description: "Failed to add task",
          variant: "destructive",
        });
        return;
      }
      
      // Refetch tasks to update list
      fetchTasks(user.id);
      setNewTask("");
      
      toast({
        title: "Success",
        description: "Task added successfully",
        variant: "default",
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  
  // Complete task
  const completeTask = async (taskId: string) => {
    try {
      // Update task in database
      const { error } = await supabase
        .from('tasks')
        .update({ completed: true })
        .eq('id', taskId);
        
      if (error) {
        toast({
          title: "Error",
          description: "Failed to complete task",
          variant: "destructive",
        });
        return;
      }
      
      // Update user stats
      const newXp = stats.xp + 25;
      let newLevel = stats.level;
      let newRank = stats.rank;
      
      // Level up if XP reaches 100
      if (newXp >= 100) {
        newLevel = stats.level + 1;
        
        // Update rank based on new level
        if (newLevel >= 20) newRank = "S";
        else if (newLevel >= 15) newRank = "A";
        else if (newLevel >= 10) newRank = "B";
        else if (newLevel >= 5) newRank = "C";
        else if (newLevel >= 3) newRank = "D";
        
        toast({
          title: "Level Up!",
          description: `You've reached level ${newLevel}! New rank: ${newRank}`,
          variant: "default",
        });
      }
      
      // Update stats in database
      const { error: statsError } = await supabase
        .from('user_stats')
        .update({
          level: newLevel,
          rank: newRank,
          xp: newXp % 100,
          tasks_completed: stats.tasksCompleted + 1
        })
        .eq('user_id', user.id);
        
      if (statsError) {
        console.error('Error updating stats:', statsError);
      }
      
      // Update local state
      setStats({
        level: newLevel,
        rank: newRank,
        xp: newXp % 100,
        tasksCompleted: stats.tasksCompleted + 1
      });
      
      // Refetch tasks
      fetchTasks(user.id);
      
      toast({
        title: "Task Completed!",
        description: "You earned 25 XP",
        variant: "default",
      });
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };
  
  // Sign out
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
      
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out",
        variant: "default",
      });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-solosync-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-solosync-purple mx-auto mb-4"></div>
          <GlowingText>Loading your quest data...</GlowingText>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <GlowingText as="h1" className="text-3xl md:text-4xl font-bold mb-2">
                Welcome, Hunter
              </GlowingText>
              <p className="text-gray-300">Your daily quests await. Ready to level up?</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <AnimatedButton variant="outline" onClick={signOut}>
                Sign Out
              </AnimatedButton>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Stats Panel */}
            <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30">
              <div className="text-center">
                <div className="text-4xl font-orbitron text-solosync-neon mb-2">{stats.rank}-Rank</div>
                <div className="text-2xl text-gray-300 mb-6">Level {stats.level}</div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">XP Progress</span>
                    <span className="text-solosync-neon">{stats.xp}/100</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-solosync-neon h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${stats.xp}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400">Tasks Completed</div>
                    <div className="text-2xl text-solosync-purple">{stats.tasksCompleted}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Next Rank</div>
                    <div className="text-2xl text-solosync-purple">
                      {stats.rank === "E" ? "D" : 
                       stats.rank === "D" ? "C" : 
                       stats.rank === "C" ? "B" : 
                       stats.rank === "B" ? "A" : 
                       stats.rank === "A" ? "S" : "S+"}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
            
            {/* Task Management */}
            <div className="lg:col-span-3 space-y-6">
              {/* Add Task */}
              <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30">
                <GlowingText as="h2" className="text-xl mb-4">
                  Add New Quest
                </GlowingText>
                
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter a new task..." 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="bg-solosync-black border-solosync-purple/50 text-white"
                  />
                  <AnimatedButton onClick={addTask}>Add</AnimatedButton>
                </div>
              </Card3D>
              
              {/* Task List */}
              <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30">
                <GlowingText as="h2" className="text-xl mb-4">
                  Your Active Quests
                </GlowingText>
                
                {tasks.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">No active quests</div>
                    <div className="text-sm text-gray-500">Add some tasks to start your journey</div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {tasks.filter(task => !task.completed).map((task) => (
                      <div 
                        key={task.id} 
                        className="flex items-center justify-between bg-solosync-black/70 p-4 rounded-lg border border-solosync-purple/20"
                      >
                        <div>
                          <div className="text-gray-200">{task.description}</div>
                          <div className="text-xs text-gray-400">
                            Added {new Date(task.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <AnimatedButton size="sm" onClick={() => completeTask(task.id)}>
                          Complete
                        </AnimatedButton>
                      </div>
                    ))}
                  </div>
                )}
                
                {tasks.filter(task => task.completed).length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-300 mb-3">Completed Quests</h3>
                    <div className="space-y-2">
                      {tasks.filter(task => task.completed).slice(0, 3).map((task) => (
                        <div 
                          key={task.id} 
                          className="flex items-center justify-between bg-solosync-black/50 p-3 rounded-lg border border-solosync-purple/10"
                        >
                          <div className="flex items-center">
                            <span className="text-solosync-neon mr-2">✓</span>
                            <div className="text-gray-400">{task.description}</div>
                          </div>
                          <div className="text-xs text-gray-500">
                            Completed
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {tasks.filter(task => task.completed).length > 3 && (
                      <div className="text-center mt-3">
                        <span className="text-sm text-solosync-purple">
                          +{tasks.filter(task => task.completed).length - 3} more completed quests
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </Card3D>
            </div>
          </div>
          
          <div className="mt-12 max-w-5xl mx-auto">
            <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30">
              <div className="flex items-center">
                <div className="text-4xl mr-6">🤖</div>
                <div>
                  <GlowingText as="h2" className="text-xl mb-2">
                    AI Companion
                  </GlowingText>
                  <p className="text-gray-300">
                    {stats.tasksCompleted > 0
                      ? `Great work on completing ${stats.tasksCompleted} quests! You're on your way to becoming an elite hunter. Keep it up!`
                      : `Welcome, hunter! Complete your first quest to start gaining experience and level up from E-rank.`
                    }
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
