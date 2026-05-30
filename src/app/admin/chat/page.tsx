"use client";
import React, { useState } from "react";
import { MessageSquare, Save, Sliders, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function ChatAdminPage() {
  const [saving, setSaving] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex justify-between items-end border-b border-chat-500/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-chat-500/20 flex items-center justify-center border border-chat-500/30">
            <MessageSquare className="w-6 h-6 text-chat-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Chat AI Configuration</h2>
            <p className="text-muted text-sm">Tune your AI agents, update base prompts, and configure behavior.</p>
          </div>
        </div>
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-chat-500 hover:bg-chat-600 text-white gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Bot className="w-5 h-5 text-chat-400" /> Agent Identity
              </CardTitle>
              <CardDescription>The core instructions that govern how your chatbot responds.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Agent Name</label>
                <input defaultValue="StayOps Support Assistant" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-chat-500/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">System Prompt</label>
                <textarea 
                  rows={8}
                  defaultValue="You are a helpful customer support agent for StayOps.ai. Your primary goal is to resolve customer queries quickly and effectively. Be polite, concise, and always offer to escalate to a human if you don't know the answer." 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-chat-500/50 font-mono text-sm leading-relaxed" 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 text-chat-400" /> Welcome Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Initial Greeting</label>
                <input defaultValue="Hi there! 👋 How can I help you today?" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-chat-500/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Suggested Prompts (Comma separated)</label>
                <input defaultValue="What is StayOps?, Pricing details, Talk to a human" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-chat-500/50" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sliders className="w-5 h-5 text-chat-400" /> Model Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">AI Model</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-chat-500/50 appearance-none">
                  <option>GPT-4 Turbo</option>
                  <option>GPT-4o</option>
                  <option>Claude 3.5 Sonnet</option>
                </select>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">Temperature (Creativity)</label>
                  <span className="text-xs font-mono text-chat-400">0.7</span>
                </div>
                <input type="range" min="0" max="100" defaultValue="70" className="w-full accent-chat-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-muted">
                  <span>Precise</span>
                  <span>Creative</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">Max Tokens</label>
                  <span className="text-xs font-mono text-chat-400">1024</span>
                </div>
                <input type="range" min="256" max="4096" defaultValue="1024" className="w-full accent-chat-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111] overflow-hidden">
            <div className="p-4 bg-chat-500/10 border-b border-chat-500/20 text-sm font-medium text-chat-400">
              Live Preview
            </div>
            <div className="p-4 space-y-4 h-64 bg-[#0a0a0a]">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-chat-500/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-chat-400" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-sm text-white border border-white/5">
                  Hi there! 👋 How can I help you today?
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  U
                </div>
                <div className="bg-chat-500 text-white rounded-2xl rounded-tr-sm p-3 text-sm shadow-lg">
                  What is StayOps?
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
