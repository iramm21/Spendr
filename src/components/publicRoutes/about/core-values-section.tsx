"use client";

import { CircleCheck, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Transparency",
    desc: "We believe in honesty, openness, and clarity with users.",
  },
  {
    icon: <CircleCheck className="w-6 h-6 text-primary" />,
    title: "Empowerment",
    desc: "We equip users to make smart financial choices every day.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Innovation",
    desc: "We constantly iterate to build the future of finance.",
  },
];

export function CoreValuesSection() {
  return (
    <section className="max-w-5xl mx-auto mt-32 px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {values.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="border border-border rounded-lg p-6 bg-background/70 backdrop-blur-md"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
