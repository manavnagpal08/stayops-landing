"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageSquare, Mic, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";

type PlatformType = "chat" | "voice" | "video";

export function Pricing({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState<PlatformType>("chat");

  if (!data) return null;
  const currentData = data[activeTab];

  return (
    <section id="pricing" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Independent Pricing
          </h2>
          <p className="text-lg text-muted mb-8">
            Each AI platform has its own dedicated pricing model based on compute and usage requirements.
          </p>
          
          {/* Tabs */}
          <div className="inline-flex items-center p-1 bg-[#111] rounded-xl border border-white/10 mb-8">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "chat" 
                  ? "bg-chat-500/20 text-chat-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                  : "text-muted hover:text-white"
              }`}
            >
              <MessageSquare className="h-4 w-4" /> Chat AI
            </button>
            <button
              onClick={() => setActiveTab("voice")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "voice" 
                  ? "bg-voice-500/20 text-voice-400 shadow-[0_0_20px_rgba(249,115,22,0.2)]" 
                  : "text-muted hover:text-white"
              }`}
            >
              <Mic className="h-4 w-4" /> Voice AI
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "video" 
                  ? "bg-video-500/20 text-video-400 shadow-[0_0_20px_rgba(139,92,246,0.2)]" 
                  : "text-muted hover:text-white"
              }`}
            >
              <Video className="h-4 w-4" /> Video AI
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 absolute inset-0"
            >
              {currentData.plans.map((plan: any, index: number) => (
                <div 
                  key={index}
                  className={`relative rounded-3xl p-8 flex flex-col h-full ${
                    plan.highlighted 
                      ? `bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-${currentData.accent}-500/50 shadow-[0_0_40px_rgba(var(--color-${currentData.accent}-500),0.15)] scale-105 z-10` 
                      : "bg-[#111] border border-white/5"
                  }`}
                >
                  {plan.highlighted && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-${currentData.accent}-500 text-white text-sm font-bold px-4 py-1 rounded-full`}>
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-muted h-12">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && <span className="text-muted pb-1">/mo</span>}
                    </div>
                  </div>
                  
                  <Button 
                    variant={plan.highlighted ? "primary" : "outline"} 
                    className={`w-full mb-8 ${plan.highlighted ? `bg-${currentData.accent}-500 hover:bg-${currentData.accent}-400 text-white` : `border-${currentData.accent}-500/50 text-${currentData.accent}-400 hover:bg-${currentData.accent}-500/10`}`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                  
                  <div className="space-y-4 flex-1">
                    <p className="text-sm font-semibold text-white">What&apos;s included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 text-${currentData.accent}-500 shrink-0`} />
                          <span className="text-sm text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
