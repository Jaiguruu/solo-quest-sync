
import { Card3D } from "./ui/card-3d";
import { GlowingText } from "./ui/glowing-text";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Task Tracking System",
      description: "Organize your daily quests with our intuitive task management system. Set deadlines, priorities, and categories for maximum efficiency.",
      icon: "📋"
    },
    {
      title: "Leveling Progression",
      description: "Gain XP for each completed task and watch yourself level up from E-rank to S-rank hunter with visual progress tracking.",
      icon: "⚔️"
    },
    {
      title: "AI Companion",
      description: "Receive encouragement, motivation, and occasionally, playful roasts from our AI assistant to keep you on track.",
      icon: "🤖"
    },
    {
      title: "Immersive UI",
      description: "Experience a beautiful, responsive interface with 3D elements and animations that make productivity feel like an adventure.",
      icon: "✨"
    },
    {
      title: "Stats Dashboard",
      description: "View detailed analytics of your productivity patterns, streaks, and achievements over time.",
      icon: "📊"
    },
    {
      title: "Custom Reminders",
      description: "Set personalized notifications that align with your schedule and help maintain your daily routines.",
      icon: "⏰"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-solosync-purple opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-solosync-neon opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowingText as="h2" className="text-3xl md:text-4xl font-bold mb-6">
            Unlock Your Potential
          </GlowingText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SoloSync transforms your daily tasks into an epic journey of self-improvement with these powerful features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card3D 
              key={index} 
              className="p-6 h-full border border-solosync-purple/20"
              maxTilt={10}
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-orbitron text-solosync-neon mb-3">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
