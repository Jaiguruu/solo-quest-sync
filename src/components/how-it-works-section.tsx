
import { GlowingText } from "./ui/glowing-text";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up with your email or Google account to start your journey."
    },
    {
      number: "02",
      title: "Add Your Daily Tasks",
      description: "Input your routines, goals, and habits you want to track and improve."
    },
    {
      number: "03",
      title: "Complete Tasks Daily",
      description: "Check off completed tasks to earn XP and receive feedback from your AI companion."
    },
    {
      number: "04",
      title: "Level Up & Track Progress",
      description: "Watch yourself rank up from E to S-class hunter as you maintain consistency."
    }
  ];

  return (
    <section className="py-20 bg-solosync-darkPurple/30 relative overflow-hidden">
      {/* Design elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowingText as="h2" className="text-3xl md:text-4xl font-bold mb-6">
            How SoloSync Works
          </GlowingText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to begin your journey from ordinary to extraordinary
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex mb-20 last:mb-0">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute h-full top-16 left-11 w-1 bg-gradient-to-b from-solosync-purple to-transparent"></div>
              )}
              
              {/* Step number */}
              <div className="mr-8 flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-solosync-darkPurple border-2 border-solosync-purple animate-pulse-neon">
                  <span className="text-2xl font-orbitron text-solosync-neon font-bold">{step.number}</span>
                </div>
              </div>
              
              {/* Step content */}
              <div className="pt-5">
                <h3 className="text-2xl font-orbitron text-solosync-neon mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
