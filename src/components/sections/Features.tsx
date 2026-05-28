"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  MessageSquare, 
  BarChart, 
  Users2, 
  Activity, 
  Database, 
  MessageCircle, 
  Key, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  BellRing
} from "lucide-react";

const features = [
  { title: "AI Workflow Automation", icon: Bot },
  { title: "Voice AI Agents", icon: MessageSquare },
  { title: "Smart Analytics", icon: BarChart },
  { title: "Multi-user Dashboard", icon: Users2 },
  { title: "Real-time Monitoring", icon: Activity },
  { title: "CRM Integrations", icon: Database },
  { title: "WhatsApp Automation", icon: MessageCircle },
  { title: "API Access", icon: Key },
  { title: "Secure Cloud Hosting", icon: Cloud },
  { title: "Custom AI Agents", icon: Cpu },
  { title: "Role-based Access", icon: ShieldCheck },
  { title: "Notifications & Alerts", icon: BellRing },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative bg-[#050505]">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg text-muted">
            Everything you need to build, deploy, and manage a secure AI workforce at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-gold-500/30 hover:bg-white/5 transition-all group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#111] group-hover:bg-gold-500/10 transition-colors border border-white/5 group-hover:border-gold-500/20">
                <feature.icon className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-medium text-sm md:text-base">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
