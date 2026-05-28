"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is StayOps.ai?",
    answer: "StayOps.ai is an enterprise platform that allows you to deploy and manage a 24/7 AI workforce. Our AI agents can handle tasks ranging from customer support and HR automation to outbound sales calling.",
  },
  {
    question: "How do AI agents work?",
    answer: "Our AI agents use state-of-the-art Large Language Models combined with workflow automation. They are trained on your specific business knowledge base and connected to your existing tools to perform tasks autonomously.",
  },
  {
    question: "Can I integrate with my CRM?",
    answer: "Yes, StayOps.ai offers native integrations with Salesforce, HubSpot, Zoho, and other major CRMs. We also provide full API access for custom integrations.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Starter and Growth plans so you can test our AI agents in your environment before committing.",
  },
  {
    question: "Is data secure?",
    answer: "Security is our top priority. We use SOC2 compliant infrastructure, end-to-end encryption, and role-based access control. Your proprietary data is never used to train public models.",
  },
  {
    question: "Can businesses customize workflows?",
    answer: "Absolutely. Our platform features a drag-and-drop workflow builder that lets you customize exactly how the AI agents handle different scenarios and edge cases.",
  },
  {
    question: "Do you provide onboarding support?",
    answer: "Yes, our Growth plan includes dedicated onboarding support, and our Enterprise plan includes a dedicated account manager and solutions architect.",
  },
  {
    question: "Does it support voice AI calling?",
    answer: "Yes, our Growth and Enterprise plans include sophisticated voice AI capabilities that can handle both inbound customer service calls and outbound sales qualification.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gold-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
