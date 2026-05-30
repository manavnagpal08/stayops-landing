"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, MessageSquare, BarChart, Users2, Activity, Database, MessageCircle, 
  Key, Cloud, Cpu, ShieldCheck, BellRing
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Bot, MessageSquare, BarChart, Users2, Activity, Database, MessageCircle, 
  Key, Cloud, Cpu, ShieldCheck, BellRing
};

export function Features({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="features" className="py-24 relative bg-[#050505]">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-muted">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((feature: any, index: number) => {
            const IconComponent = iconMap[feature.icon] || Bot;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-gold-500/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#111] group-hover:bg-gold-500/10 transition-colors border border-white/5 group-hover:border-gold-500/20 group-hover:scale-110 duration-300">
                <IconComponent className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-medium text-sm md:text-base group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
