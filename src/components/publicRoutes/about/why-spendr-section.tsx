"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
  "XP Rewards & Streaks",
  "Beautiful UX for Gen Z",
  "Data Privacy First",
  "Visual Goal Tracking",
];

export function WhySpendrSection() {
  return (
    <section className="mt-32 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Spendr?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-border rounded-lg text-left bg-background/70 backdrop-blur">
          <h3 className="text-xl font-semibold mb-4">Traditional Budgeting</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Boring charts</li>
            <li>No motivation</li>
            <li>Generic advice</li>
            <li>Feels like a chore</li>
          </ul>
        </div>
        <div className="p-6 border border-border rounded-lg text-left bg-primary/10">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Spendr Experience
          </h3>
          <ul className="space-y-3">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
