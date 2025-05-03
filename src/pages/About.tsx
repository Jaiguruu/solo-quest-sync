
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card3D } from "@/components/ui/card-3d";

const About = () => {
  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <GlowingText as="h1" className="text-3xl md:text-5xl font-bold mb-6">
              About SoloSync
            </GlowingText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A gamified productivity system designed to transform your daily routines into an epic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <GlowingText as="h2" className="text-2xl md:text-3xl mb-6">
                Our Mission
              </GlowingText>
              <p className="text-gray-300 mb-4">
                SoloSync was created with a simple mission: to make productivity engaging, rewarding, and immersive. We believe that completing daily tasks shouldn't feel like a chore—it should feel like leveling up in your favorite RPG.
              </p>
              <p className="text-gray-300 mb-4">
                Inspired by the "Solo Leveling" concept, our platform transforms mundane routines into a magical, dopamine-driven experience that keeps you coming back for more.
              </p>
              <p className="text-gray-300">
                Whether you're struggling with consistency or simply want to add some excitement to your daily routines, SoloSync provides the perfect blend of accountability, gamification, and visual rewards.
              </p>
            </div>
            
            <Card3D className="p-8 h-full bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">🎮</div>
                <GlowingText as="h3" className="text-xl mb-4">From E-rank to S-rank Hunter</GlowingText>
                <p className="text-gray-300">
                  Just like in "Solo Leveling," your journey with SoloSync begins as an E-rank hunter. With each task completed, you gain experience points, develop skills, and level up—eventually reaching the coveted S-rank status.
                </p>
              </div>
            </Card3D>
            
            <Card3D className="p-8 h-full bg-solosync-darkPurple/80 backdrop-blur-sm border border-solosync-purple/30 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">🤖</div>
                <GlowingText as="h3" className="text-xl mb-4">Your AI Companion</GlowingText>
                <p className="text-gray-300">
                  Every hunter needs guidance. Your AI companion provides motivation, encouragement, and occasionally, playful roasts to keep you accountable and entertained throughout your journey.
                </p>
              </div>
            </Card3D>
            
            <div>
              <GlowingText as="h2" className="text-2xl md:text-3xl mb-6">
                The Team Behind SoloSync
              </GlowingText>
              <p className="text-gray-300 mb-4">
                SoloSync was developed by a team of productivity enthusiasts, gamers, and software engineers who wanted to create a tool that makes personal growth fun and addictive.
              </p>
              <p className="text-gray-300 mb-4">
                We combined our passion for gamification, psychology, and cutting-edge technology to build a platform that not only helps you stay on track but makes you excited to tackle your daily tasks.
              </p>
              <p className="text-gray-300">
                Our team continues to improve SoloSync with new features, animations, and rewards to keep your journey exciting and meaningful.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
