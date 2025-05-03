
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Signup = () => {
  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="min-h-screen pt-24 flex items-center justify-center px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-solosync-purple opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-solosync-neon opacity-20 blur-3xl rounded-full"></div>
        
        <div className="w-full max-w-md z-10">
          <div className="bg-solosync-darkPurple/80 backdrop-blur-sm p-8 rounded-lg border border-solosync-purple/30">
            <div className="text-center mb-8">
              <GlowingText as="h1" className="text-2xl mb-2">Begin Your Journey</GlowingText>
              <p className="text-gray-300">Create an account to start leveling up</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <AnimatedButton className="w-full flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Sign up with Google
                </AnimatedButton>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-solosync-darkPurple text-gray-400">or register with email</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="first-name">
                      First name
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="w-full px-3 py-2 bg-solosync-black border border-solosync-purple/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-solosync-neon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="last-name">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="w-full px-3 py-2 bg-solosync-black border border-solosync-purple/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-solosync-neon"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 bg-solosync-black border border-solosync-purple/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-solosync-neon"
                    placeholder="hunter@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full px-3 py-2 bg-solosync-black border border-solosync-purple/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-solosync-neon"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-solosync-purple focus:ring-solosync-neon border-gray-600 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                    I agree to the <Link to="/terms" className="text-solosync-neon hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-solosync-neon hover:underline">Privacy Policy</Link>
                  </label>
                </div>
                
                <div>
                  <AnimatedButton type="submit" className="w-full">
                    Create Account
                  </AnimatedButton>
                </div>
              </form>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">Already have an account?</span>{" "}
              <Link to="/login" className="text-solosync-neon hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
