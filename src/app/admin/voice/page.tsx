"use client";
import React, { useState } from "react";
import { Mic, Save, Phone, Play, Volume2, AudioLines } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function VoiceAdminPage() {
  const [saving, setSaving] = useState(false);
  const [playing, setPlaying] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => setPlaying(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex justify-between items-end border-b border-voice-500/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-voice-500/20 flex items-center justify-center border border-voice-500/30">
            <Mic className="w-6 h-6 text-voice-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Voice AI Configuration</h2>
            <p className="text-muted text-sm">Manage voice profiles, telephony integration, and latency settings.</p>
          </div>
        </div>
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-voice-500 hover:bg-voice-600 text-white gap-2 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
        >
          <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Settings"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AudioLines className="w-5 h-5 text-voice-400" /> Voice Synthesis Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-medium text-white">Select Base Voice</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Rachel (Professional)', 'Drew (Casual)', 'Mimi (Friendly)', 'Fin (Deep)'].map((voice, i) => (
                    <div key={voice} className={`p-3 rounded-lg border ${i === 0 ? 'border-voice-500 bg-voice-500/10' : 'border-white/10 bg-white/5'} cursor-pointer hover:border-voice-500/50 transition-colors flex justify-between items-center`}>
                      <span className="text-sm text-white">{voice}</span>
                      <button onClick={(e) => { e.stopPropagation(); handlePlay(); }} className="text-muted hover:text-voice-400">
                        {playing && i === 0 ? <Volume2 className="w-4 h-4 animate-pulse text-voice-400" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">Speaking Rate</label>
                  <span className="text-xs font-mono text-voice-400">1.0x</span>
                </div>
                <input type="range" min="50" max="150" defaultValue="100" className="w-full accent-voice-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">Pitch Stability</label>
                  <span className="text-xs font-mono text-voice-400">75%</span>
                </div>
                <input type="range" min="0" max="100" defaultValue="75" className="w-full accent-voice-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5 text-voice-400" /> Telephony & Routing
              </CardTitle>
              <CardDescription>Configure inbound numbers and call forwarding.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Inbound Phone Number (Twilio)</label>
                <div className="flex gap-2">
                  <input readOnly defaultValue="+1 (555) 019-2834" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-muted font-mono" />
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">Change</Button>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white">Human Escalation Number</label>
                <input defaultValue="+1 (800) 123-4567" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-voice-500/50" />
                <p className="text-xs text-muted pt-1">The AI will transfer calls to this number if the user asks for a human.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[#111]">
            <CardHeader>
              <CardTitle className="text-white text-lg">Interruption Handling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 rounded-xl">
                <div>
                  <div className="font-medium text-white text-sm">Allow User Interruptions</div>
                  <div className="text-xs text-muted">AI stops talking when user speaks</div>
                </div>
                <div className="w-10 h-6 bg-voice-500 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">Interruption Sensitivity (VAD)</label>
                  <span className="text-xs font-mono text-voice-400">High</span>
                </div>
                <input type="range" min="0" max="100" defaultValue="80" className="w-full accent-voice-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
