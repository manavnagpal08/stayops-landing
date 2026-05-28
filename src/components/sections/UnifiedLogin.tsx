"use client";
import React from "react";
import { motion } from "framer-motion";
import { KeyRound, Shield, Zap, CreditCard, Layout } from "lucide-react";

export function UnifiedLogin() {
  return (
    <section className="py-24 relative bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 text-sm font-medium mb-6">
                <KeyRound className="h-4 w-4" />
                <span>Single Sign-On (SSO)</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                One Account Access Across All Platforms
              </h2>
              <p className="text-lg text-muted mb-8">
                StayOps.ai operates as a unified ecosystem. You can purchase only Chat AI, only Voice AI, only Video AI, or any combination. Everything is managed from a single central account.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Centralized user and team management" },
                  { icon: CreditCard, text: "Shared billing across all purchased modules" },
                  { icon: Zap, text: "Unified API keys and analytics" },
                  { icon: Layout, text: "Seamless switching between dashboards" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                      <item.icon className="h-5 w-5 text-gold-400" />
                    </div>
                    <span className="text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative"
            >
              {/* Decorative nodes linking to a central hub */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path d="M200,200 L100,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M200,200 L300,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M200,200 L200,300" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="text-center mb-8 relative z-10">
                <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20 mb-4 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <KeyRound className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white">app.stayops.ai</h3>
                <p className="text-sm text-muted">Your Central Hub</p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between p-4 rounded-xl bg-chat-500/10 border border-chat-500/20 hover:bg-chat-500/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-chat-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                    <span className="text-white font-medium">Chat AI Dashboard</span>
                  </div>
                  <span className="text-xs font-mono text-chat-400 bg-chat-500/10 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-voice-500/10 border border-voice-500/20 hover:bg-voice-500/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-voice-500 shadow-[0_0_10px_rgba(249,115,22,1)]" />
                    <span className="text-white font-medium">Voice AI Dashboard</span>
                  </div>
                  <span className="text-xs font-mono text-voice-400 bg-voice-500/10 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-video-500/10 border border-video-500/20 hover:bg-video-500/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-video-500 shadow-[0_0_10px_rgba(139,92,246,1)]" />
                    <span className="text-white font-medium">Video AI Dashboard</span>
                  </div>
                  <span className="text-xs font-mono text-video-400 bg-video-500/10 px-2 py-1 rounded">Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
