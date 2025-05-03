
import { GlowingText } from './ui/glowing-text';
import { AnimatedButton } from './ui/animated-button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-solosync-purple opacity-30 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <div className="w-full max-w-4xl space-y-8">
          <div className="space-y-4">
            <GlowingText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold">
              SOLO<span className="text-solosync-purple">SYNC</span>
            </GlowingText>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A gamified productivity system inspired by Solo Leveling.
              Complete tasks, gain experience, and level up in real life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <AnimatedButton size="lg" className="w-full sm:w-auto">
                START YOUR JOURNEY
              </AnimatedButton>
            </Link>
            <Link to="/about">
              <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto">
                LEARN MORE
              </AnimatedButton>
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-solosync-darkPurple/70 backdrop-blur p-6 rounded-lg border border-solosync-purple/30">
              <h3 className="text-solosync-neon font-orbitron text-lg font-bold mb-2">Task Tracking</h3>
              <p className="text-gray-300">Monitor your daily quests and progress with an immersive interface</p>
            </div>
            <div className="bg-solosync-darkPurple/70 backdrop-blur p-6 rounded-lg border border-solosync-purple/30">
              <h3 className="text-solosync-neon font-orbitron text-lg font-bold mb-2">Level System</h3>
              <p className="text-gray-300">Gain XP and rank up from E to S-class hunter with each completed task</p>
            </div>
            <div className="bg-solosync-darkPurple/70 backdrop-blur p-6 rounded-lg border border-solosync-purple/30">
              <h3 className="text-solosync-neon font-orbitron text-lg font-bold mb-2">AI Companion</h3>
              <p className="text-gray-300">Receive motivation, encouragement and playful roasts from your AI partner</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="#BB86FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="#BB86FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};
