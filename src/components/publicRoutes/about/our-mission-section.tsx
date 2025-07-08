"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function OurMissionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="mx-auto text-primary w-10 h-10" />
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Spendr exists to help Gen Z take control of their financial future
            by turning everyday habits into meaningful progress. We believe
            finance should be fun, social, and rewarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
