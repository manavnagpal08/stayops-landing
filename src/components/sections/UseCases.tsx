"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  Truck, 
  GraduationCap, 
  Factory, 
  Phone, 
  HeartHandshake, 
  UserPlus 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const useCases = [
  {
    title: "HR & Recruitment",
    description: "Automate sourcing, screening, and initial candidate interviews.",
    icon: UserPlus,
  },
  {
    title: "Customer Support",
    description: "Resolve tier-1 and tier-2 tickets instantly without human intervention.",
    icon: HeartHandshake,
  },
  {
    title: "Sales Automation",
    description: "Qualify leads and book meetings directly into your calendar.",
    icon: Phone,
  },
  {
    title: "Real Estate",
    description: "Answer property queries and schedule viewings 24/7.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    description: "Manage patient appointments and basic triage inquiries.",
    icon: Stethoscope,
  },
  {
    title: "Logistics",
    description: "Automate tracking updates and vendor communications.",
    icon: Truck,
  },
  {
    title: "Education",
    description: "Student enrollment assistance and course query resolution.",
    icon: GraduationCap,
  },
  {
    title: "Manufacturing",
    description: "Supply chain alerts and predictive maintenance scheduling.",
    icon: Factory,
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Built for Every Industry
            </h2>
            <p className="text-lg text-muted">
              Whether you are in real estate, healthcare, or logistics, our AI workforce adapts to your specific operational needs.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-[#111] hover:bg-[#151515] transition-colors group">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-gold-600 mb-4 group-hover:text-gold-400 transition-colors" />
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
