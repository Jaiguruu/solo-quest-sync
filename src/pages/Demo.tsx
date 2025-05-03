
import { useState } from "react";
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card3D } from "@/components/ui/card-3d";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [rank, setRank] = useState("E");
  
  const completeSampleTask = () => {
    // Calculate new XP and potentially level up
    const newXp = xp + 25;
    let newLevel = level;
    let newRank = rank;
    
    if (newXp >= 100) {
      newLevel = level + 1;
      
      // Update rank based on new level
      if (newLevel >= 20) newRank = "S";
      else if (newLevel >= 15) newRank = "A";
      else if (newLevel >= 10) newRank = "B";
      else if (newLevel >= 5) newRank = "C";
      else if (newLevel >= 3) newRank = "D";
      
      toast({
        title: "Level Up!",
        description: `You've reached level ${newLevel}!`,
        variant: "default",
      });
    }
    
    setXp(newXp % 100); // Reset XP if leveled up
    setLevel(newLevel);
    setRank(newRank);
    
    toast({
      title: "Task Completed",
      description: "You gained 25 XP!",
      variant: "default",
    });
  };
  
  const sampleTasks = [
    "Complete 20 minutes of exercise",
    "Read 10 pages of a book",
    "Write in journal",
    "Meditate for 5 minutes",
    "Drink 2 glasses of water"
  ];

  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <GlowingText as="h1" className="text-3xl md:text-5xl font-bold mb-6">
              Try SoloSync Demo
            </GlowingText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience how SoloSync transforms your daily tasks into an epic journey of self-improvement
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* User Stats Card */}
            <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2 font-orbitron text-solosync-neon">{rank}-Rank Hunter</div>
                <div className="text-2xl text-gray-300">Level {level}</div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">XP Progress</span>
                  <span className="text-solosync-neon">{xp}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-solosync-neon h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${xp}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-gray-300">Tasks Completed Today</div>
                <div className="text-3xl font-orbitron text-solosync-purple">{Math.floor(level * 1.5)}</div>
              </div>
            </Card3D>
            
            {/* Tasks List */}
            <Card3D className="p-6 bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30 col-span-1 lg:col-span-2">
              <GlowingText as="h2" className="text-2xl mb-4">
                Today's Quests
              </GlowingText>
              
              <div className="space-y-4">
                {sampleTasks.map((task, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-solosync-black/70 p-4 rounded-lg border border-solosync-purple/20"
                  >
                    <div>
                      <div className="text-gray-200">{task}</div>
                      <div className="text-xs text-gray-400">Reward: 25 XP</div>
                    </div>
                    <AnimatedButton size="sm" onClick={completeSampleTask}>
                      Complete
                    </AnimatedButton>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">This is just a demo. Create an account to track your real tasks and progress!</p>
                <AnimatedButton className="w-full sm:w-auto" href="/signup">
                  Sign Up Now
                </AnimatedButton>
              </div>
            </Card3D>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto bg-solosync-darkPurple/50 rounded-lg p-6 border border-solosync-purple/30">
            <GlowingText as="h2" className="text-2xl mb-4 text-center">
              Demo Features
            </GlowingText>
            
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-solosync-neon mr-2">✓</span>
                <span>Task completion with XP rewards</span>
              </li>
              <li className="flex items-start">
                <span className="text-solosync-neon mr-2">✓</span>
                <span>Level progression system (E-rank to S-rank)</span>
              </li>
              <li className="flex items-start">
                <span className="text-solosync-neon mr-2">✓</span>
                <span>Visual feedback and notifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">○</span>
                <span className="text-gray-500">AI companion with personalized feedback (Premium)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">○</span>
                <span className="text-gray-500">Custom task categories and routines (Premium)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">○</span>
                <span className="text-gray-500">Progress analytics and insights (Premium)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Demo;
