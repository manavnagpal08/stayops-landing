"use client";
import React from "react";
import { Activity, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function HealthAdminPage() {
  const days = Array.from({ length: 90 }, (_, i) => {
    // Make 2 random days have issues
    const status = (i === 14 || i === 42) ? 'warning' : 'healthy';
    return { id: i, status };
  });

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Service Health</h2>
        <p className="text-muted">Real-time uptime and incident history for all API endpoints.</p>
      </div>

      <Card className="border-green-500/20 bg-green-500/5">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">All Systems Operational</div>
                <div className="text-green-400 text-sm">Updated 2 mins ago</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-mono font-bold text-white">99.99%</div>
              <div className="text-sm text-muted">90-day Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6">
        {[
          { name: "Chat Inference API", latency: "42ms" },
          { name: "Voice Realtime WebSocket", latency: "18ms" },
          { name: "Video Render Queue", latency: "N/A" },
          { name: "Vector Database (RAG)", latency: "8ms" },
        ].map((service) => (
          <Card key={service.name} className="border-white/10 bg-[#111]">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-white">{service.name}</CardTitle>
                <div className="text-sm font-mono text-muted flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {service.latency}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1 overflow-hidden h-10 w-full mb-2">
                {days.map((day) => (
                  <div 
                    key={day.id} 
                    className={`flex-1 rounded-sm ${day.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'}`}
                    title={day.status === 'healthy' ? 'No incidents' : 'Partial Outage'}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted">
                <span>90 days ago</span>
                <span className="text-green-400">100% uptime</span>
                <span>Today</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-white/10 bg-[#111]">
        <CardHeader>
          <CardTitle className="text-lg text-white">Past Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-2 border-yellow-500 pl-4 relative">
              <div className="absolute w-3 h-3 rounded-full bg-yellow-500 -left-[7px] top-1"></div>
              <div className="text-white font-medium mb-1">Elevated latency on Chat API (US-East)</div>
              <div className="text-xs text-yellow-400 mb-2">Resolved • May 14, 2026</div>
              <div className="text-sm text-muted">
                We observed elevated latency (up to 2500ms) for approx 15 minutes due to a downstream LLM provider spike. Traffic was rerouted and latency returned to normal.
              </div>
            </div>
            <div className="border-l-2 border-green-500 pl-4 relative opacity-50">
              <div className="absolute w-3 h-3 rounded-full bg-green-500 -left-[7px] top-1"></div>
              <div className="text-white font-medium mb-1">Scheduled Database Maintenance</div>
              <div className="text-xs text-green-400 mb-2">Completed • April 02, 2026</div>
              <div className="text-sm text-muted">
                Routine upgrade of Vector Database instances. No downtime was observed by end users.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
