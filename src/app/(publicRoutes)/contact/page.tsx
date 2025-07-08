"use client";

import { ContactDetailsSection } from "@/components/publicRoutes/contact/contact-details-section";
import { ContactFormSection } from "@/components/publicRoutes/contact/contact-form-section";

export default function AboutPage() {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-screen mx-auto relative overflow-x-hidden">
      <ContactFormSection />
      <ContactDetailsSection />
    </section>
  );
}
