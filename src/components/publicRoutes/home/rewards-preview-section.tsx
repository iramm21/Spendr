"use client";

import { Gift, Trophy, Gem } from "lucide-react";

export function RewardsPreviewSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-6">
      <Trophy className="mx-auto text-primary w-10 h-10 animate-bounce" />
      <h2 className="text-3xl font-bold">Unlock Exclusive Rewards</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Get real perks and digital goodies as you progress. From custom themes
        to gift cards — you earn what you use.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[Gift, Gem, Trophy].map((Icon, idx) => (
          <div
            key={idx}
            className="w-40 h-40 rounded-xl border border-border bg-background/70 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <Icon className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">
              {["Gift Cards", "Premium Skins", "Trophy Items"][idx]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
