
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/utils/supabase";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Success",
        description: "Welcome back, hunter!",
        variant: "default",
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast({
        title: "Error",
        description: "Failed to login with Google",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="min-h-screen pt-24 flex items-center justify-center px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-solosync-purple opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-solosync-neon opacity-20 blur-3xl rounded-full"></div>
        
        <div className="w-full max-w-md z-10">
          <div className="bg-solosync-darkPurple/80 backdrop-blur-sm p-8 rounded-lg border border-solosync-purple/30">
            <div className="text-center mb-8">
              <GlowingText as="h1" className="text-2xl mb-2">Sign In to SoloSync</GlowingText>
              <p className="text-gray-300">Continue your journey to productivity mastery</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <AnimatedButton 
                  className="w-full flex items-center justify-center gap-3"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Sign in with Google
                </AnimatedButton>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-solosync-darkPurple text-gray-400">or continue with</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleEmailLogin}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="password">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-solosync-neon hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 bg-solosync-black border border-solosync-purple/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-solosync-neon"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div>
                  <AnimatedButton type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                  </AnimatedButton>
                </div>
              </form>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">Don't have an account?</span>{" "}
              <Link to="/signup" className="text-solosync-neon hover:underline">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
