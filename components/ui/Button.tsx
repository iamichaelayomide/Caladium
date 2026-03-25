"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "bg-white text-[#0b0911] hover:bg-[#f5eaf5]",
  outline: "border border-border bg-white/5 text-ink hover:border-accent hover:text-white hover:bg-white/10",
  ghost: "bg-transparent text-muted hover:text-white",
  dark: "border border-white/20 bg-white/10 text-white hover:bg-white/20"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base"
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
