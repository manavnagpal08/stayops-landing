"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Image as ImageIcon, Video, Save, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CMSPage() {
  const [bannerState, setBannerState] = useState({
    type: "video" as "video" | "photo",
    url: "",
    title: "",
    subtitle: ""
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/banner")
      .then(res => res.json())
      .then(data => setBannerState(data));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);
    
    try {
      await fetch("/api/banner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bannerState)
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">CMS / Content Management</h2>
        <p className="text-muted">Manage the global assets and dynamic content of your landing page.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Home Screen Banner</CardTitle>
          <CardDescription>Update the premium banner at the top of the home page. Changes are reflected immediately.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Media Type Toggle */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white">Media Type</label>
            <div className="flex gap-4">
              <button
                onClick={() => setBannerState({ ...bannerState, type: "video" })}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  bannerState.type === "video"
                    ? "bg-gold-500/10 border-gold-500/50 text-gold-400 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
                    : "bg-[#111] border-white/5 text-muted hover:text-white"
                }`}
              >
                <Video className="h-5 w-5" />
                Video Background (MP4)
              </button>
              
              <button
                onClick={() => setBannerState({ ...bannerState, type: "photo" })}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  bannerState.type === "photo"
                    ? "bg-gold-500/10 border-gold-500/50 text-gold-400 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
                    : "bg-[#111] border-white/5 text-muted hover:text-white"
                }`}
              >
                <ImageIcon className="h-5 w-5" />
                Image Background
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Media URL</label>
              <Input 
                value={bannerState.url}
                onChange={(e) => setBannerState({ ...bannerState, url: e.target.value })}
                placeholder={bannerState.type === "video" ? "https://example.com/video.mp4" : "https://example.com/image.jpg"}
                className="bg-[#111] border-white/10 text-white"
              />
              <p className="text-xs text-muted">Use a direct link to an MP4 file or image (e.g. from Coverr, Unsplash, or your own CDN).</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Banner Title</label>
              <Input 
                value={bannerState.title}
                onChange={(e) => setBannerState({ ...bannerState, title: e.target.value })}
                placeholder="Welcome to the Future of Enterprise AI"
                className="bg-[#111] border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Banner Subtitle</label>
              <Input 
                value={bannerState.subtitle}
                onChange={(e) => setBannerState({ ...bannerState, subtitle: e.target.value })}
                placeholder="Discover StayOps.ai next-generation systems."
                className="bg-[#111] border-white/10 text-white"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            {saved ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4" /> Changes pushed to live site!
              </motion.div>
            ) : <div />}
            
            <Button 
              onClick={handleSave} 
              disabled={isSaving}
              className="bg-gold-500 hover:bg-gold-400 text-black font-bold gap-2"
            >
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
