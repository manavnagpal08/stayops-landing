"use client";
import React from "react";
import { Server, Cpu, HardDrive, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ComputeAdminPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">GPU & Compute Cluster</h2>
          <p className="text-muted">Monitor and allocate hardware resources for inference and rendering.</p>
        </div>
        <Button className="bg-white/10 hover:bg-white/20 text-white gap-2 border border-white/10">
          <RefreshCw className="w-4 h-4" /> Refresh Status
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Nodes", value: "342", icon: Server, color: "text-blue-400" },
          { label: "Avg GPU Load", value: "78%", icon: Cpu, color: "text-red-400" },
          { label: "Memory Usage", value: "4.2 TB", icon: HardDrive, color: "text-purple-400" },
          { label: "Queue Depth", value: "14", icon: RefreshCw, color: "text-yellow-400" },
        ].map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-[#111]">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-medium text-muted">{stat.label}</div>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-white/10 bg-[#111]">
          <CardHeader>
            <CardTitle className="text-lg text-white">Cluster Allocation (US-East)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">A100 Instances (Video Render)</span>
                <span className="text-video-400 font-mono">84% Load</span>
              </div>
              <div className="h-3 w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} className="h-full bg-video-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">H100 Instances (Voice/LLM)</span>
                <span className="text-voice-400 font-mono">62% Load</span>
              </div>
              <div className="h-3 w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: "62%" }} className="h-full bg-voice-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">T4 Instances (Vector Search)</span>
                <span className="text-chat-400 font-mono">35% Load</span>
              </div>
              <div className="h-3 w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: "35%" }} className="h-full bg-chat-500 rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-[#111]">
          <CardHeader>
            <CardTitle className="text-lg text-white">Active Deployments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Llama-3-70B-Instruct", type: "LLM Server", status: "Healthy", nodes: 42 },
                { name: "StableVideo-Diff", type: "Render Node", status: "High Load", nodes: 18 },
                { name: "Whisper-v3-Turbo", type: "Speech-to-Text", status: "Healthy", nodes: 24 },
              ].map((dep) => (
                <div key={dep.name} className="flex justify-between items-center p-4 bg-[#0a0a0a] border border-white/5 rounded-xl">
                  <div>
                    <div className="font-medium text-white">{dep.name}</div>
                    <div className="text-xs text-muted">{dep.type} • {dep.nodes} nodes</div>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full border ${
                    dep.status === 'Healthy' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    {dep.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
