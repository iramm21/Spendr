"use client";

import { Lock, ShieldCheck, Database } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-6">
      <ShieldCheck className="mx-auto text-primary w-10 h-10" />
      <h2 className="text-3xl font-bold">Built on Trust</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        We use the highest industry standards to protect your data and keep your
        information safe.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {[Lock, ShieldCheck, Database].map((Icon, idx) => (
          <div
            key={idx}
            className="bg-background/70 backdrop-blur-md p-6 rounded-xl border border-border"
          >
            <Icon className="w-8 h-8 text-primary mb-2 mx-auto" />
            <p className="font-semibold">
              {
                [
                  "End-to-End Encryption",
                  "Verified Compliance",
                  "Private Storage",
                ][idx]
              }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
