// components/public/home/level-system-section.tsx
"use client";

import { Star, Flame, Target } from "lucide-react";

export function LevelSystemSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-6">
      <Star className="mx-auto text-primary w-10 h-10 animate-pulse" />
      <h2 className="text-3xl font-bold">Gamified Level System</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Earn XP for logging, setting goals, and sticking to habits. Level up to
        unlock new features, themes, and rewards.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {[Flame, Target, Star].map((Icon, idx) => (
          <div
            key={idx}
            className="bg-background/70 backdrop-blur-md p-6 rounded-xl shadow-sm border border-border"
          >
            <Icon className="text-primary w-8 h-8 mb-2 mx-auto" />
            <p className="font-semibold">
              {["Log Daily", "Set Goals", "Earn Rewards"][idx]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
