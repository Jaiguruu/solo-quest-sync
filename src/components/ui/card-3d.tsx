
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number;
  glareEnabled?: boolean;
  children: React.ReactNode;
}

export const Card3D = ({
  className,
  children,
  maxTilt = 15,
  glareEnabled = true,
  ...props
}: Card3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (in %)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setRotation({ 
      x: -y * maxTilt, // Reversed for natural feel
      y: x * maxTilt 
    });
    
    setGlarePosition({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      className={cn(
        "relative transition-transform duration-300 ease-out bg-solosync-darkPurple rounded-lg overflow-hidden",
        { "shadow-xl": isHovered },
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease-out",
      }}
      {...props}
    >
      {children}
      
      {/* Interactive glare effect */}
      {glareEnabled && (
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 z-10",
            { "opacity-70": isHovered }
          )}
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
      )}
    </div>
  );
};
