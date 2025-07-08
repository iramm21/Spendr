// components/public/home/faq-section.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Spendr free to use?",
    a: "Yes, Spendr offers a generous free tier with all core features. Premium unlocks additional perks like advanced insights and customization.",
  },
  {
    q: "Do I need to link my bank account?",
    a: "No. You can use Spendr manually or optionally connect your bank for automatic tracking.",
  },
  {
    q: "How is my data protected?",
    a: "We use end-to-end encryption and follow GDPR standards. You own your data — always.",
  },
  {
    q: "What devices does Spendr work on?",
    a: "Spendr is built mobile-first, but works great on any browser. A dedicated mobile app is coming soon.",
  },
];

export function FAQSection() {
  return (
    <div className="mt-32 max-w-3xl mx-auto px-4 sm:px-0">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
