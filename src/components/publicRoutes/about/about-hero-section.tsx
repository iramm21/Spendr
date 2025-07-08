"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section className="text-center py-20 px-4 sm:px-6 relative overflow-hidden">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet the Team Behind <span className="text-primary">Spendr</span>
      </motion.h1>
      <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
        We’re on a mission to make finance feel empowering, exciting, and
        gamified for the next generation.
      </p>
      <Button className="mt-6">Get Started</Button>
    </section>
  );
}
