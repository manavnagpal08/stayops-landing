"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Video, CheckCircle2, ArrowRight, LayoutGrid, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  chat: MessageSquare,
  voice: Mic,
  video: Video,
};

export function PlatformShowcase({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="platforms" className="py-32 relative bg-[#020202] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chat-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-voice-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-video-500/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-md"
          >
            <LayoutGrid className="h-4 w-4" />
            <span>{data.label}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted/80 leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="space-y-32">
          {data.items.map((platform: any, index: number) => {
            const IconComponent = iconMap[platform.id] || MessageSquare;
            return (
            <motion.div 
              key={platform.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8 w-full">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-white/5 opacity-50`} />
                    <IconComponent className={`h-8 w-8 ${platform.accent} relative z-10`} />
                  </div>
                  <div className="text-sm font-mono text-white/50 tracking-widest uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    {platform.urlDisplay}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{platform.name}</h3>
                  <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-transparent to-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--color-${platform.id}-500), transparent)` }} />
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  {platform.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-muted/90 text-lg">
                      <CheckCircle2 className={`h-5 w-5 ${platform.accent} shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                  <Button size="lg" className={`gap-2 bg-white/5 border border-white/10 hover:border-${platform.id}-500/50 hover:bg-${platform.id}-500/10 text-white shadow-lg transition-all duration-300 rounded-xl px-8`}>
                    {platform.cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Visual Mockup */}
              <motion.div 
                className="flex-1 w-full perspective-1000"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: index * 0.5 }}
              >
                <motion.div 
                  className={`glass rounded-3xl border border-white/10 p-2 ${platform.glowAccent} aspect-video relative overflow-hidden bg-[#050505]/80 backdrop-blur-3xl transform transition-transform duration-700`}
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                  
                  {/* Dashboard UI Frame */}
                  <div className="absolute inset-4 bg-[#0a0a0a] rounded-2xl border border-white/5 flex flex-col shadow-2xl overflow-hidden backdrop-blur-xl">
                    {/* Header */}
                    <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-black/40">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                      </div>
                      <div className={`h-2 w-24 rounded-full ${platform.bgAccent} opacity-40 shadow-[0_0_10px_currentColor]`} />
                    </div>
                    {/* Content Area */}
                    <div className="flex-1 p-6 grid grid-cols-12 gap-6 bg-gradient-to-br from-black/60 to-transparent">
                      {/* Sidebar */}
                      <div className="col-span-3 space-y-4 border-r border-white/5 pr-6 hidden sm:block">
                        <div className="h-8 w-3/4 rounded-lg bg-white/5 mb-8" />
                        <div className="h-5 w-full rounded-md bg-white/5" />
                        <div className="h-5 w-5/6 rounded-md bg-white/5" />
                        <div className="h-5 w-full rounded-md bg-white/5" />
                        <div className="h-5 w-4/6 rounded-md bg-white/5" />
                      </div>
                      {/* Main */}
                      <div className="col-span-12 sm:col-span-9 space-y-6">
                        <div className="flex justify-between items-center">
                          <div className="h-6 w-1/3 rounded-lg bg-white/10" />
                          <div className={`h-8 w-24 rounded-full ${platform.bgAccent} opacity-20`} />
                        </div>
                        <div className={`h-32 w-full rounded-xl ${platform.bgAccent} opacity-[0.03] border border-${platform.id}-500/20 relative overflow-hidden flex items-center justify-center`}>
                           <Zap className={`h-12 w-12 ${platform.accent} opacity-20`} />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="h-24 rounded-xl bg-white/[0.02] border border-white/5" />
                          <div className="h-24 rounded-xl bg-white/[0.02] border border-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
