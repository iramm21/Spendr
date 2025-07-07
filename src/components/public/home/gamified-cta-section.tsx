// components/public/home/gamified-cta-section.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GamifiedCTASection() {
  return (
    <motion.div
      className="mt-32 text-center max-w-2xl mx-auto py-16 px-6 bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to Earn XP While You Save?
      </h2>
      <p className="mb-6 text-white/90">
        Streaks, goals, and daily wins — all in one app designed for your
        financial evolution.
      </p>
      <Link href="/sign-up">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-primary font-bold"
        >
          Start Your Streak
        </Button>
      </Link>
    </motion.div>
  );
}
