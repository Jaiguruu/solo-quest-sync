
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "./ui/animated-button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
        {
          "py-2 bg-solosync-black/80 backdrop-blur shadow-lg": isScrolled,
          "py-5": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-orbitron font-bold">
            SOLO<span className="text-solosync-neon">SYNC</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/features" label="Features" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
          
          <div className="flex space-x-3">
            <Link to="/login">
              <AnimatedButton variant="ghost" size="sm">
                Login
              </AnimatedButton>
            </Link>
            <Link to="/signup">
              <AnimatedButton size="sm">
                Sign Up
              </AnimatedButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-solosync-darkPurple shadow-lg p-5 border-t border-solosync-purple/20">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/features" label="Features" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
            
            <div className="flex flex-col space-y-3 pt-3 border-t border-solosync-purple/20">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <AnimatedButton variant="ghost" className="w-full justify-center">
                  Login
                </AnimatedButton>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <AnimatedButton className="w-full justify-center">
                  Sign Up
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="relative font-medium text-white hover:text-solosync-neon transition duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-solosync-neon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="py-2 text-center text-white hover:text-solosync-neon transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
