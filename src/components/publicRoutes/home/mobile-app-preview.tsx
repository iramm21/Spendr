"use client";

import Image from "next/image";

export function MobileAppPreview() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Designed for Mobile</h2>
        <p className="text-muted-foreground">
          Spendr works beautifully on your phone. Track your goals, earn XP, and
          check insights from anywhere.
        </p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Progress tracking on the go</li>
          <li>Quick expense input</li>
          <li>Push notifications for streaks</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/mobile-preview.jpg"
          alt="Spendr mobile preview"
          width={300}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
