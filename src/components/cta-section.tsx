
import { AnimatedButton } from "./ui/animated-button";
import { GlowingText } from "./ui/glowing-text";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glowing orb background effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-solosync-purple opacity-10 blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <GlowingText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </GlowingText>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join SoloSync today and transform your productivity into an epic adventure of personal growth and achievement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/signup">
              <AnimatedButton size="lg" className="w-full sm:w-auto text-lg">
                START YOUR QUEST
              </AnimatedButton>
            </Link>
            <Link to="/demo">
              <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto text-lg">
                TRY A DEMO
              </AnimatedButton>
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-solosync-darkPurple/50 backdrop-blur-sm rounded-xl border border-solosync-purple/30">
            <div className="flex items-center justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-solosync-neon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-300 italic">
              "Since using SoloSync, I've completed 87% more tasks and finally built consistent habits. The gamification makes productivity addictive!"
            </p>
            <p className="text-solosync-neon mt-4 font-medium">― Alex K., S-Rank Hunter</p>
          </div>
        </div>
      </div>
    </section>
  );
};
