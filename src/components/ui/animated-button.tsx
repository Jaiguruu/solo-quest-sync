
import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg group transition-all duration-300",
          {
            "bg-solosync-purple hover:bg-opacity-80 animate-pulse-neon": variant === "default",
            "bg-transparent border-2 border-solosync-neon hover:bg-solosync-purple/10": variant === "outline",
            "bg-transparent hover:bg-solosync-purple/10": variant === "ghost",
            "text-sm px-4 py-2": size === "sm",
            "px-6 py-3": size === "default",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute bottom-0 left-0 w-full h-1 -mb-1 transition-all duration-500 ease-in-out bg-solosync-neon group-hover:h-full"></span>
        </div>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
