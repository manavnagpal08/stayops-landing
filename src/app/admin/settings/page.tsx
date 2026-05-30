"use client";
import React, { useState } from "react";
import { Settings, Save, Key, Globe, Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function SettingsAdminPage() {
  const [saving, setSaving] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Global Settings</h2>
          <p className="text-muted">Configure workspace preferences, API keys, and webhooks.</p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-white text-black hover:bg-white/90 gap-2"
        >
          <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="text-white text-lg">Workspace Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Workspace Name</label>
                  <input defaultValue="StayOps Production" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Support Email</label>
                  <input defaultValue="support@stayops.ai" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Brand Primary Color</label>
                <div className="flex gap-2">
                  <input type="color" defaultValue="#Eab308" className="h-10 w-10 rounded cursor-pointer bg-[#0a0a0a] border border-white/10" />
                  <input defaultValue="#Eab308" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-gold-500/50" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Key className="w-5 h-5 text-gold-400" /> API Keys
              </CardTitle>
              <CardDescription>Use these keys to authenticate server-to-server requests.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-[#0a0a0a] border border-white/10 rounded-xl space-y-3">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-white text-sm">Production Secret Key</div>
                  <Button variant="outline" className="h-8 text-xs bg-white/5 hover:bg-white/10 text-white border-white/10">Rotate</Button>
                </div>
                <div className="flex gap-2">
                  <input readOnly type="password" defaultValue="sk_prod_59x8a7f9s8d7f9s8d7f9a8" className="w-full bg-[#111] border border-white/5 rounded-lg px-4 py-2 text-muted font-mono text-sm" />
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">Copy</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full border-dashed border-white/20 text-muted hover:text-white hover:bg-white/5">
                + Create New API Key
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="text-white text-lg">Appearance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Theme Preference</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-gold-500 bg-gold-500/10 text-white">
                    <Moon className="w-5 h-5" />
                    <span className="text-xs">Dark</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-transparent bg-white/5 text-muted hover:bg-white/10">
                    <Sun className="w-5 h-5" />
                    <span className="text-xs">Light</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-transparent bg-white/5 text-muted hover:bg-white/10">
                    <Monitor className="w-5 h-5" />
                    <span className="text-xs">System</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Globe className="w-5 h-5 text-blue-400" /> Webhooks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Endpoint URL</label>
                <input placeholder="https://api.yourdomain.com/webhook" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Events to Send</label>
                <div className="space-y-2 p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-sm text-muted">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-gold-500" /> chat.message.received
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-gold-500" /> voice.call.completed
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-gold-500" /> video.render.finished
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
