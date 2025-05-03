
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GlowingText } from "@/components/ui/glowing-text";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card3D } from "@/components/ui/card-3d";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Demo = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete project documentation", completed: false },
    { id: 2, name: "Design new feature wireframes", completed: false },
    { id: 3, name: "Review pull requests", completed: true },
  ]);
  
  const [stats, setStats] = useState({
    level: 3,
    rank: "D",
    xp: 75,
    tasksCompleted: 12
  });

  // Add a new task
  const addTask = () => {
    if (!taskName.trim()) return;
    
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    
    setTasks([newTask, ...tasks]);
    setTaskName("");
  };
  
  // Toggle task completion
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        // Only count XP if transitioning from incomplete to complete
        if (!task.completed) {
          const newXp = stats.xp + 25;
          let newLevel = stats.level;
          let newRank = stats.rank;
          
          // Level up if XP reaches 100
          if (newXp >= 100) {
            newLevel += 1;
            
            // Update rank based on new level
            if (newLevel >= 20) newRank = "S";
            else if (newLevel >= 15) newRank = "A";
            else if (newLevel >= 10) newRank = "B";
            else if (newLevel >= 5) newRank = "C";
            else if (newLevel >= 3) newRank = "D";
            
            // Update stats
            setStats({
              level: newLevel,
              rank: newRank,
              xp: newXp % 100,
              tasksCompleted: stats.tasksCompleted + 1
            });
          } else {
            // Just update XP and completed count
            setStats({
              ...stats,
              xp: newXp,
              tasksCompleted: stats.tasksCompleted + 1
            });
          }
        }
        
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <GlowingText as="h1" className="text-4xl mb-4">
              Experience the SoloSync Demo
            </GlowingText>
            <p className="text-gray-300 text-lg mb-8">
              Try out our productivity gamification system. Complete tasks, earn XP, and level up your rank!
            </p>
            
            <div className="flex justify-center">
              <Link to="/signup">
                <AnimatedButton className="mr-4">
                  Sign Up for Free
                </AnimatedButton>
              </Link>
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
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
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
                
                <div className="space-y-3">
                  {tasks.filter(task => !task.completed).map((task) => (
                    <div 
                      key={task.id} 
                      className="flex items-center justify-between bg-solosync-black/70 p-4 rounded-lg border border-solosync-purple/20"
                    >
                      <div className="text-gray-200">{task.name}</div>
                      <AnimatedButton size="sm" onClick={() => toggleComplete(task.id)}>
                        Complete
                      </AnimatedButton>
                    </div>
                  ))}
                  
                  {tasks.filter(task => !task.completed).length === 0 && (
                    <div className="text-center py-4">
                      <div className="text-gray-400">No active quests</div>
                      <div className="text-sm text-gray-500">Add some tasks to start your journey</div>
                    </div>
                  )}
                </div>
                
                {tasks.filter(task => task.completed).length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-300 mb-3">Completed Quests</h3>
                    <div className="space-y-2">
                      {tasks.filter(task => task.completed).map((task) => (
                        <div 
                          key={task.id} 
                          className="flex items-center justify-between bg-solosync-black/50 p-3 rounded-lg border border-solosync-purple/10"
                        >
                          <div className="flex items-center">
                            <span className="text-solosync-neon mr-2">✓</span>
                            <div className="text-gray-400">{task.name}</div>
                          </div>
                          <AnimatedButton 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => toggleComplete(task.id)}
                          >
                            Undo
                          </AnimatedButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card3D>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <GlowingText className="text-2xl mb-6">Ready to start your journey?</GlowingText>
            <Link to="/signup">
              <AnimatedButton>Create Your Account</AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Demo;
