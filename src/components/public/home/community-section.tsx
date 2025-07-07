// components/public/home/community-support-section.tsx
"use client";

import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CommunitySupportSection() {
  return (
    <div className="mt-32 bg-primary/10 rounded-xl p-10 max-w-4xl mx-auto text-center space-y-6 relative overflow-hidden">
      <Users className="mx-auto text-primary w-10 h-10" />
      <h2 className="text-3xl font-bold">Join a Supportive Community</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Our community forums and expert support are here to help you every step
        of the way. Share tips, celebrate wins, and grow your financial skills.
      </p>
      <p className="text-sm text-primary font-semibold">
        Join 10,000+ users growing daily!
      </p>
      <Link href="/community">
        <Button variant="outline" className="mt-4">
          Explore Community
        </Button>
      </Link>
    </div>
  );
}
