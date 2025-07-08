// components/public/home/timeline-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Target, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: <Flame className="w-8 h-8 text-white" />,
    title: "Build Daily Habits",
    desc: "Log your expenses daily to keep your streak alive and earn XP.",
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Set & Crush Goals",
    desc: "Create goals that motivate you and track your progress visually.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-white" />,
    title: "Get Insights",
    desc: "Receive personalized reports to optimize your spending.",
  },
];

export function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const stepElements = Array.from(
      containerRef.current.querySelectorAll(".timeline-step")
    );

    function onScroll() {
      const scrollTop = window.scrollY + window.innerHeight / 2;

      let currentIndex = 0;
      stepElements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const elTop = window.scrollY + rect.top;
        if (scrollTop >= elTop) currentIndex = i;
      });

      setActiveStep(currentIndex);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-32 max-w-3xl mx-auto px-6 relative"
      aria-label="How It Works Timeline"
    >
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      {/* Vertical XP bar behind steps */}
      <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-primary/10 transform -translate-x-1/2 rounded overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded"
          style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      <ol className="relative z-10 space-y-20">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <li
              key={idx}
              className="timeline-step flex items-start cursor-pointer"
              onClick={() => {
                const el =
                  containerRef.current?.querySelectorAll(".timeline-step")[idx];
                el?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <motion.div
                className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                  isActive
                    ? "border-primary bg-gradient-to-tr from-primary to-primary/70 shadow-lg shadow-primary/50 animate-pulse"
                    : "border-primary/40 bg-primary/10"
                }`}
                layoutId="timeline-icon"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
                }}
              >
                {step.icon}
              </motion.div>

              <motion.div
                className="ml-6 max-w-[70%]"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3
                  className={`text-xl font-semibold cursor-pointer ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-1 text-muted-foreground ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  {step.desc}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
