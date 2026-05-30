"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Mic, Video, Bot, Users2, Activity, Database, MessageCircle, Key, Cloud, Cpu, ShieldCheck, BellRing, BarChart } from "lucide-react";
import Link from "next/link";
import { Particles } from "@/components/ui/Particles";

const iconMap: any = {
  MessageSquare,
  Mic,
  Video,
  Bot,
  Users2,
  Activity,
  Database,
  MessageCircle,
  Key,
  Cloud,
  Cpu,
  ShieldCheck,
  BellRing,
  BarChart
};

export function Hero({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <Particles />
      
      {/* Banner Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-sm font-medium text-slate-200">{data.badge}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            {data.titleLine1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-300">{data.titleLine2}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto"
          >
            {data.subtitle}
          </motion.p>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.platforms.map((platform: any, index: number) => {
              const IconComponent = iconMap[platform.icon] || MessageSquare;
              return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: index * 0.2 }}
                  className="h-full"
                >
                  <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative rounded-2xl p-[1px] h-full overflow-hidden ${platform.glowColor} cursor-pointer`}
                    >
                      {/* Animated Gradient Border Layer */}
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500 rounded-2xl" />
                      <div className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite] transition-opacity duration-700" 
                           style={{ background: `conic-gradient(from 0deg, transparent 0 280deg, var(--color-${platform.name.split(' ')[0].toLowerCase()}-500) 360deg)` }} 
                      />
                      
                      {/* Inner Card Content */}
                      <div className="relative glass bg-[#050505]/90 backdrop-blur-2xl rounded-2xl p-8 h-full flex flex-col items-center text-center z-10 transition-all duration-500">
                    
                        {/* Background Gradient Hover Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${platform.color} transition-opacity duration-500`} />
                        
                        <div className="relative z-10">
                          <div className="h-16 w-16 mx-auto rounded-2xl bg-[#111] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
                            <IconComponent className={`h-8 w-8 text-transparent bg-clip-text bg-gradient-to-br ${platform.color}`} style={{ color: "currentColor" }} />
                            {/* Colored Icon absolute positioned */}
                            <div className={`absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br ${platform.color}`}>
                              <IconComponent className="h-8 w-8 stroke-[url(#gradient)]" />
                            </div>
                            <svg width="0" height="0">
                              <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className={`text-${platform.color.split(' ')[0].replace('from-', '')}`} stopColor="currentColor" />
                                <stop offset="100%" className={`text-${platform.color.split(' ')[1].replace('to-', '')}`} stopColor="currentColor" />
                              </linearGradient>
                            </svg>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                          <p className="text-muted mb-8">{platform.description}</p>
                          
                          <div className="mt-auto flex items-center justify-center gap-2 text-sm font-medium text-white group-hover:text-gold-400 transition-colors">
                            Explore Platform <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
