"use client";

import { useState } from "react";
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setEmail("");
    // Reset the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Hydrogen Innovations</h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter to receive the latest news, research findings, and updates on our hydrogen projects across Africa.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-emerald-400"
            />
            <Button 
              type="submit" 
              className="bg-white text-emerald-600 hover:bg-emerald-100"
            >
              Subscribe
            </Button>
          </form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mt-4 text-emerald-100"
            >
              <Check className="w-5 h-5 mr-2" />
              <span>Thank you for subscribing!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
