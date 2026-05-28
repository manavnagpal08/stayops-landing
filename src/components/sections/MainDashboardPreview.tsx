"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export function MainDashboardPreview() {
  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Central Control Center
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Manage your entire StayOps.ai ecosystem from a single pane of glass. Monitor usage, adjust billing, and quickly jump into any active platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl border border-white/10 p-2 shadow-2xl relative bg-[#0a0a0a] max-w-5xl mx-auto"
        >
          {/* Mock Main Dashboard Window */}
          <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0a0a0a]">
              <div className="flex items-center gap-8">
                <div className="text-lg font-bold text-white">app.stayops.ai</div>
                <div className="hidden sm:flex gap-4">
                  <div className="text-sm text-gold-400 border-b-2 border-gold-400 pb-5 pt-5">My Modules</div>
                  <div className="text-sm text-muted hover:text-white transition-colors pb-5 pt-5 cursor-pointer">Billing</div>
                  <div className="text-sm text-muted hover:text-white transition-colors pb-5 pt-5 cursor-pointer">Team</div>
                  <div className="text-sm text-muted hover:text-white transition-colors pb-5 pt-5 cursor-pointer">API Keys</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10" />
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-8 bg-[#0a0a0a] overflow-y-auto">
              <h3 className="text-2xl font-semibold text-white mb-8">Welcome back, Admin</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Active Module */}
                <div className="glass rounded-xl p-6 border border-chat-500/30 bg-chat-500/5 relative group cursor-pointer hover:bg-chat-500/10 transition-colors">
                  <div className="absolute top-4 right-4 bg-chat-500/20 text-chat-400 text-xs px-2 py-1 rounded-md font-mono">
                    Active
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-chat-500/20 flex items-center justify-center mb-4">
                    <span className="text-chat-400 font-bold">CH</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Chat AI</h4>
                  <p className="text-sm text-muted mb-6">Manage your GPT chatbots and conversational flows.</p>
                  <div className="flex items-center text-chat-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Open Dashboard <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>

                {/* Active Module */}
                <div className="glass rounded-xl p-6 border border-voice-500/30 bg-voice-500/5 relative group cursor-pointer hover:bg-voice-500/10 transition-colors">
                  <div className="absolute top-4 right-4 bg-voice-500/20 text-voice-400 text-xs px-2 py-1 rounded-md font-mono">
                    Active
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-voice-500/20 flex items-center justify-center mb-4">
                    <span className="text-voice-400 font-bold">VO</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Voice AI</h4>
                  <p className="text-sm text-muted mb-6">Monitor live calls and manage voice receptionists.</p>
                  <div className="flex items-center text-voice-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Open Dashboard <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>

                {/* Locked Module */}
                <div className="glass rounded-xl p-6 border border-white/5 bg-[#111] relative group cursor-pointer">
                  <div className="absolute top-4 right-4 bg-white/5 text-muted text-xs px-2 py-1 rounded-md flex items-center gap-1 font-mono">
                    <Lock className="h-3 w-3" /> Locked
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 opacity-50">
                    <span className="text-muted font-bold">VI</span>
                  </div>
                  <h4 className="text-lg font-bold text-white/50 mb-2">Video AI</h4>
                  <p className="text-sm text-muted/50 mb-6">Create lifelike AI avatars and video presentations.</p>
                  <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Upgrade to Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
