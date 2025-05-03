
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 text-solosync-purple text-9xl font-orbitron font-bold">404</div>
          <GlowingText as="h1" className="text-3xl mb-6">Quest Not Found</GlowingText>
          <p className="text-xl text-gray-300 mb-10">
            The path you seek does not exist in this realm. Perhaps you should return to familiar territory.
          </p>
          <Link to="/">
            <AnimatedButton size="lg">
              Return to Home Base
            </AnimatedButton>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
