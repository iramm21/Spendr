// components/public/home/features-section.tsx
"use client";

import { Flame, Target, BarChart2, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: <Flame className="text-primary w-6 h-6" />,
      title: "🔥 Daily Streaks",
      desc: "Build habits that stick — log daily to keep your streak alive.",
    },
    {
      icon: <Target className="text-primary w-6 h-6" />,
      title: "🎯 Goal Setting",
      desc: "Break down big goals into achievable wins with visual progress.",
    },
    {
      icon: <BarChart2 className="text-primary w-6 h-6" />,
      title: "📊 Smart Reports",
      desc: "Unlock insights and learn where your money really goes.",
    },
    {
      icon: <CheckCircle className="text-primary w-6 h-6" />,
      title: "✔️ Simple & Secure",
      desc: "Designed for Gen Z — minimal setup, max security, no bloat.",
    },
  ];

  return (
    <motion.div
      className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {features.map((f, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
        >
          <Card className="cursor-pointer backdrop-blur-sm bg-background/60 border border-border transition-shadow duration-300">
            <CardHeader className="flex items-center space-x-3">
              {f.icon}
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{f.desc}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
