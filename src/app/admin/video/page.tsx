"use client";
import React, { useState } from "react";
import { Video, Save, PlaySquare, Film, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Image from "next/image";

export default function VideoAdminPage() {
  const [saving, setSaving] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex justify-between items-end border-b border-video-500/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-video-500/20 flex items-center justify-center border border-video-500/30">
            <Video className="w-6 h-6 text-video-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Video AI Configuration</h2>
            <p className="text-muted text-sm">Select 3D avatars, manage render pipelines, and customize presentation templates.</p>
          </div>
        </div>
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-video-500 hover:bg-video-600 text-white gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <PlaySquare className="w-5 h-5 text-video-400" /> Default Avatar Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Emma", style: "Business", active: true },
                  { name: "Marcus", style: "Casual", active: false },
                  { name: "Sophia", style: "News Anchor", active: false },
                  { name: "Alex", style: "Medical", active: false },
                ].map((avatar) => (
                  <div key={avatar.name} className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${avatar.active ? 'border-video-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'border-transparent hover:border-white/20'}`}>
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center backdrop-blur-sm">
                          <Video className="w-5 h-5 text-white/50" />
                        </div>
                        <div className="font-medium text-white">{avatar.name}</div>
                        <div className="text-xs text-white/70">{avatar.style}</div>
                      </div>
                      {avatar.active && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-video-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Film className="w-5 h-5 text-video-400" /> Render Settings
              </CardTitle>
              <CardDescription>Global quality settings for API generation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Output Resolution</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-video-500/50 appearance-none">
                  <option>1080p (FHD) - Recommended</option>
                  <option>720p (HD) - Faster generation</option>
                  <option>4K (UHD) - Highest cost</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Default Background</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-video-500/50 appearance-none">
                  <option>Transparent (Green Screen/Chroma)</option>
                  <option>Solid Color (Hex)</option>
                  <option>Modern Office</option>
                  <option>News Studio</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Layers className="w-5 h-5 text-video-400" /> Subtitles & Overlays
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 rounded-xl">
                <div>
                  <div className="font-medium text-white text-sm">Auto-generate Subtitles</div>
                  <div className="text-xs text-muted">Burn subtitles directly into video</div>
                </div>
                <div className="w-10 h-6 bg-video-500 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white">Subtitle Style</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-video-500/10 border border-video-500 text-video-400 text-sm font-medium">Dynamic Word</button>
                  <button className="flex-1 py-2 rounded-lg bg-[#0a0a0a] border border-white/10 text-muted hover:text-white text-sm font-medium">Static Line</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
