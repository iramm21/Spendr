// components/public/about/careers-cta-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function JoinUsCTASection() {
  return (
    <motion.section
      className="bg-primary/10 py-16 rounded-xl text-center max-w-4xl mx-auto px-6 space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Users className="mx-auto text-primary w-8 h-8" />
      <h2 className="text-3xl font-bold">Want to Join the Team?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        We&apos;re always looking for builders, designers, and creators who believe
        in empowering young people financially.
      </p>
      <Link href="/careers">
        <Button size="lg" className="mt-2">
          View Open Roles
        </Button>
      </Link>
    </motion.section>
  );
}
