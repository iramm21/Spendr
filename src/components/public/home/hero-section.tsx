// components/public/home/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.div
      className="relative text-center max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full opacity-30 animate-pulse bg-gradient-radial from-primary to-transparent" />

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-snug">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
          Level Up
        </span>{" "}
        Your Money Game
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
        The only finance app that rewards you for showing up — build streaks,
        earn XP, and unlock your financial future.
      </p>
      <Link href="/sign-in" passHref>
        <Button
          size="lg"
          className="mt-4 w-full sm:w-auto relative overflow-hidden"
        >
          Join Now — Your Future Self Will Thank You
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={false}
            whileHover={{
              scale: [1, 1.05, 1],
              transition: { duration: 0.6 },
            }}
          />
        </Button>
      </Link>
    </motion.div>
  );
}
