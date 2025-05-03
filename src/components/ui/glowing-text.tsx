
import { cn } from "@/lib/utils";

interface GlowingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  glowColor?: string;
  children: React.ReactNode;
}

export const GlowingText = ({
  as: Component = "h2",
  glowColor = "rgba(187, 134, 252, 0.7)",
  className,
  children,
  ...props
}: GlowingTextProps) => {
  const textShadow = `0 0 5px ${glowColor}, 0 0 15px ${glowColor}, 0 0 30px ${glowColor}`;
  
  return (
    <Component
      className={cn("neon-text", className)}
      style={{ textShadow }}
      {...props}
    >
      {children}
    </Component>
  );
};
