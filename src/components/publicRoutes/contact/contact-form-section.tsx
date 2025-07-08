// components/public/contact/contact-form-section.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You would send data to a route/api here
    setSubmitted(true);
  };

  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input required placeholder="Your Name" />
          <Input required type="email" placeholder="Your Email" />
          <Textarea required placeholder="Your Message" rows={5} />

          <Button type="submit" className="w-full sm:w-auto">
            <SendHorizonal className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      ) : (
        <motion.div
          className="text-center mt-10 text-green-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🎉 Thanks for reaching out! We’ll be in touch shortly.
        </motion.div>
      )}
    </section>
  );
}
