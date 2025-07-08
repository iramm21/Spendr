// components/public/home/testimonials-section.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, Award, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    text: "Spendr helped me stay on track daily. The XP and badges make saving fun!",
    icon: <Heart className="text-primary w-8 h-8" />,
  },
  {
    name: "Jason K.",
    text: "The goal setting and reports gave me a clear path to my savings targets.",
    icon: <Award className="text-primary w-8 h-8" />,
  },
  {
    name: "Amira S.",
    text: "I love how secure my data feels, plus the app is super easy to use.",
    icon: <MessageCircle className="text-primary w-8 h-8" />,
  },
];

export function TestimonialsSection() {
  return (
    <div className="mt-32 max-w-4xl mx-auto px-4 sm:px-0 space-y-10">
      <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, text, icon }, i) => (
          <motion.blockquote
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            }}
            className="bg-background/70 backdrop-blur-md rounded-xl p-6 shadow-md transition-transform duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-4 mb-3">
              {icon}
              <cite className="font-semibold">{name}</cite>
            </div>
            <p className="text-muted-foreground">“{text}”</p>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}
