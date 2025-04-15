"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

type ConfettiButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
  onMouseEnter?: () => void;
};

export const ConfettiButton = ({
  children,
  href,
  className,
  variant = "primary",
  onMouseEnter,
}: ConfettiButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        colors: ["#6366F1", "#10B981", "#FBBF24"],
        disableForReducedMotion: true,
      });
    }

    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleConfetti();
    }
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseEnter={handleConfetti}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={typeof children === "string" ? children : undefined}
      className={cn(
        "rounded-full py-3 px-6 font-bold transition-all",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500",
        variant === "primary"
          ? "bg-indigo text-white shadow-lg hover:shadow-indigo/30"
          : "border-2 border-indigo text-indigo hover:bg-indigo/5",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}; 