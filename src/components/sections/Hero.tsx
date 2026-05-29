"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Mic, Video } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    name: "Chat AI",
    icon: MessageSquare,
    color: "from-chat-500 to-chat-400",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    url: "https://chat.stayops.ai",
    description: "GPT/LLM conversations & support.",
  },
  {
    name: "Voice AI",
    icon: Mic,
    color: "from-voice-500 to-voice-400",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    url: "https://voice.stayops.ai",
    description: "Real-time AI phone calls & reception.",
  },
  {
    name: "Video AI",
    icon: Video,
    color: "from-video-500 to-video-400",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    url: "https://video.stayops.ai",
    description: "Lip-sync avatars & AI presenters.",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold-500/30 text-gold-400 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>The Unified Enterprise AI Ecosystem</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight"
          >
            One Platform. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              Three Powerful AI Systems.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-16 max-w-2xl mx-auto"
          >
            Deploy Chat AI, Voice AI, and Video AI agents from the StayOps.ai ecosystem to completely automate your business operations.
          </motion.p>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
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
                      className={`group glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden ${platform.glowColor} cursor-pointer`}
                    >
                    
                    {/* Background Gradient Hover Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${platform.color} transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="h-16 w-16 mx-auto rounded-2xl bg-[#111] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        <platform.icon className={`h-8 w-8 text-transparent bg-clip-text bg-gradient-to-br ${platform.color}`} style={{ color: "currentColor" }} />
                        {/* We need to apply the color to the icon properly, so we use absolute positioning for a colored icon */}
                        <div className={`absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br ${platform.color}`}>
                          <platform.icon className="h-8 w-8 stroke-[url(#gradient)]" />
                        </div>
                        {/* SVG Gradient Definitions */}
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
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
