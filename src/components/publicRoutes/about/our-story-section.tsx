"use client";

import { motion } from "framer-motion";

const storySteps = [
  {
    year: "2023",
    title: "The Idea Sparks",
    text: "Frustrated by boring finance apps, we imagined a tool that makes saving feel like winning.",
  },
  {
    year: "2024",
    title: "We Built Spendr",
    text: "We brought together designers, developers, and finance nerds to build the first version.",
  },
  {
    year: "2025",
    title: "Launch and Growth",
    text: "Spendr launches and quickly gains a passionate community of savvy savers.",
  },
];

export function OurStorySection() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
      <ol className="space-y-12 relative border-l border-primary/30 pl-6">
        {storySteps.map((step, idx) => (
          <motion.li
            key={idx}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary border-4 border-background" />
            <h3 className="text-lg font-semibold text-primary">
              {step.year} — {step.title}
            </h3>
            <p className="text-muted-foreground mt-1">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
