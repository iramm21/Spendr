// components/public/home/deep-dive-section.tsx
"use client";

import { motion } from "framer-motion";
import { Flame, Target, BarChart2, CheckCircle } from "lucide-react";

const deepDiveData = [
  {
    title: "Why Daily Streaks Work",
    desc: "Consistency is key. Our streaks feature nudges you daily, building positive financial habits that last. Celebrate milestones with fun badges and XP rewards.",
    points: [
      "Visual progress tracking",
      "Motivational reminders",
      "Social sharing options",
    ],
    Icon: Flame,
    direction: "left",
  },
  {
    title: "Set Smart Goals & Win",
    desc: "Define clear financial goals and watch your progress update in real-time. Visual trackers keep your motivation high and your eyes on the prize.",
    points: [
      "Customizable goal types",
      "Progress charts and insights",
      "Reward badges on achievement",
    ],
    Icon: Target,
    direction: "right",
  },
  {
    title: "Understand Your Spending",
    desc: "Our smart reports show where your money goes, helping you identify saving opportunities and optimize your budget.",
    points: [
      "Category breakdowns",
      "Monthly and yearly trends",
      "Personalized saving tips",
    ],
    Icon: BarChart2,
    direction: "left",
  },
  {
    title: "Your Data, Your Rules",
    desc: "We take your privacy seriously. Data is encrypted, never sold, and always accessible by you.",
    points: [
      "End-to-end encryption",
      "GDPR & CCPA compliant",
      "Easy export & data control",
    ],
    Icon: CheckCircle,
    direction: "right",
  },
];

export function DeepDiveSection() {
  return (
    <div className="mt-28 max-w-5xl mx-auto space-y-20">
      {deepDiveData.map(({ title, desc, points, Icon, direction }, i) => (
        <motion.section
          key={i}
          className="flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          {direction === "left" && (
            <Icon className="md:w-1/2 text-primary w-40 h-40 mx-auto" />
          )}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-muted-foreground">{desc}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          {direction === "right" && (
            <Icon className="md:w-1/2 text-primary w-40 h-40 mx-auto" />
          )}
        </motion.section>
      ))}
    </div>
  );
}
