"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Activity, Server, MessageSquare, Mic, Video, Cpu, HardDrive } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminOverview() {
  return (
    <div className="space-y-8 max-w-7xl">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Overview</h2>
        <p className="text-muted">Monitor usage and infrastructure health across all StayOps.ai platforms.</p>
      </div>

      {/* Cross-platform Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-chat-500/20 bg-chat-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted flex justify-between items-center">
              Chat AI Usage
              <MessageSquare className="h-4 w-4 text-chat-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">14.2M</div>
            <p className="text-xs text-chat-400 flex items-center gap-1">
              Messages Processed (30d)
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-voice-500/20 bg-voice-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted flex justify-between items-center">
              Voice AI Usage
              <Mic className="h-4 w-4 text-voice-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">842k</div>
            <p className="text-xs text-voice-400 flex items-center gap-1">
              Call Minutes (30d)
            </p>
          </CardContent>
        </Card>

        <Card className="border-video-500/20 bg-video-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted flex justify-between items-center">
              Video AI Usage
              <Video className="h-4 w-4 text-video-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">2,450</div>
            <p className="text-xs text-video-400 flex items-center gap-1">
              Hours Rendered (30d)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Infrastructure & GPU Monitoring */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Infrastructure & Compute</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5 text-gold-500" /> GPU Cluster Status</CardTitle>
              <CardDescription>Real-time compute allocation for Video & Voice inference.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">A100 Instances (Video Render)</span>
                  <span className="text-video-400 font-mono">84% Load</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} className="h-full bg-video-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">H100 Instances (Voice/LLM)</span>
                  <span className="text-voice-400 font-mono">62% Load</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "62%" }} className="h-full bg-voice-500 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><HardDrive className="h-5 w-5 text-gold-500" /> Storage & Databases</CardTitle>
              <CardDescription>Vector DBs and object storage capacity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Vector Store (RAG Embeddings)</span>
                  <span className="text-chat-400 font-mono">2.4 TB / 5 TB</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "48%" }} className="h-full bg-chat-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Object Storage (Video/Audio Logs)</span>
                  <span className="text-gold-400 font-mono">45 TB / 100 TB</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="h-full bg-gold-500 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
