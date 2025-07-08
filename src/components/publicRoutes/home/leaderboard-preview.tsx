"use client";

import { Users, Crown, TrendingUp } from "lucide-react";

export function LeaderboardPreview() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-6">
      <Crown className="mx-auto text-primary w-10 h-10 animate-pulse" />
      <h2 className="text-3xl font-bold">Climb the Leaderboard</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Stay motivated by seeing how you rank against friends and other Spendr
        users. Healthy competition builds habits!
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[Users, TrendingUp, Crown].map((Icon, idx) => (
          <div
            key={idx}
            className="w-40 h-40 rounded-xl border border-border bg-background/70 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <Icon className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">
              {["Active Users", "Daily Gains", "Top Ranks"][idx]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
