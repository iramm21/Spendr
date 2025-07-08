// components/public/contact/contact-details-section.tsx
"use client";

import { Mail, MapPin, Instagram, Twitter } from "lucide-react";

export function ContactDetailsSection() {
  return (
    <section className="max-w-2xl mx-auto py-10 px-4 space-y-6 text-muted-foreground text-sm">
      <div className="flex items-center gap-3">
        <Mail className="w-4 h-4 text-primary" />
        <span>support@spendr.app</span>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="w-4 h-4 text-primary" />
        <span>Melbourne, Australia</span>
      </div>

      <div className="flex items-center gap-3">
        <Instagram className="w-4 h-4 text-primary" />
        <a
          href="https://instagram.com/spendr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @spendr
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Twitter className="w-4 h-4 text-primary" />
        <a
          href="https://twitter.com/spendr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @spendr
        </a>
      </div>
    </section>
  );
}
