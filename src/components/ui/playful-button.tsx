import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const playfulButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-playful text-sm font-medium transition-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-glow",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:scale-105 hover:shadow-glow-secondary",
        accent: "bg-gradient-accent text-accent-foreground hover:scale-105 hover:shadow-glow-accent",
        success: "bg-success text-success-foreground hover:bg-success/90 hover:scale-105",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        rainbow: "bg-gradient-rainbow text-white hover:scale-110 hover:animate-pulse-slow",
        hero: "bg-gradient-hero text-white shadow-medium hover:scale-110 hover:shadow-glow text-lg font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-playful px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface PlayfulButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof playfulButtonVariants> {
  asChild?: boolean;
}

const PlayfulButton = React.forwardRef<HTMLButtonElement, PlayfulButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(playfulButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PlayfulButton.displayName = "PlayfulButton";

export { PlayfulButton, playfulButtonVariants };