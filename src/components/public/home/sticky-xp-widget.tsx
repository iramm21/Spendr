// components/public/home/sticky-xp-widget.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function StickyXPWidget() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-background border border-border shadow-xl hover:shadow-2xl transition-all cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex items-center space-x-3">
        <Sparkles className="text-yellow-500 w-6 h-6 animate-bounce" />
        <div>
          <p className="text-sm font-semibold leading-none">+25 XP Today</p>
          <span className="text-xs text-muted-foreground">
            Keep the streak!
          </span>
        </div>
      </div>
    </motion.div>
  );
}
