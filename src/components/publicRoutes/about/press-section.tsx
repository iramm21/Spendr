// components/public/about/press-section.tsx
"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const mentions = [
  {
    quote:
      "Spendr is like Duolingo for your wallet — fun, addictive, and surprisingly effective.",
    source: "TechToday",
  },
  {
    quote:
      "A fresh take on budgeting that resonates with Gen Z. We’re watching Spendr closely.",
    source: "Startup Watch",
  },
];

export function PressSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 space-y-12">
      <h2 className="text-3xl font-bold text-center">In The Press</h2>
      <div className="space-y-10">
        {mentions.map(({ quote, source }, i) => (
          <motion.blockquote
            key={i}
            className="bg-muted/40 border-l-4 border-primary p-6 rounded-xl relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <Quote className="absolute -top-3 -left-3 w-6 h-6 text-primary" />
            <p className="text-muted-foreground italic">&quot;{quote}&quot;</p>
            <footer className="mt-3 text-sm font-semibold text-primary">
              — {source}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
