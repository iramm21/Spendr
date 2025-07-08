// components/public/about/milestones-section.tsx
"use client";

import { CalendarCheck, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    icon: <Rocket className="text-primary w-6 h-6" />,
    title: "Launch",
    desc: "Spendr went live to the public in 2024 with a vision to gamify personal finance.",
  },
  {
    icon: <Trophy className="text-primary w-6 h-6" />,
    title: "10K+ Users",
    desc: "In just a few months, we reached over 10,000 active users tracking habits and goals.",
  },
  {
    icon: <CalendarCheck className="text-primary w-6 h-6" />,
    title: "Partnerships",
    desc: "Formed strategic partnerships with student orgs and finance coaches.",
  },
];

export function MilestonesSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 space-y-10">
      <h2 className="text-3xl font-bold text-center">Our Journey So Far</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {milestones.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-background border border-border rounded-xl p-6 shadow-sm"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="mb-3">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground mt-1">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
