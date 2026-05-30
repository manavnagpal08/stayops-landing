"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Save, Layout, Zap, Package, Tag, HelpCircle, 
  Settings, Loader2, CheckCircle2, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type TabType = "hero" | "platforms" | "features" | "useCases" | "pricing" | "faq";

export default function CMSAdminPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("hero");

  useEffect(() => {
    fetch("/api/cms")
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      console.error(error);
    }
    setSaving(false);
  };

  const handleNestedChange = (path: (string | number)[], value: any) => {
    setData((prev: any) => {
      const newData = JSON.parse(JSON.stringify(prev));
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold-500 animate-spin" />
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero Section", icon: Layout },
    { id: "platforms", label: "Platforms", icon: Package },
    { id: "features", label: "Features", icon: Zap },
    { id: "useCases", label: "Use Cases", icon: Settings },
    { id: "pricing", label: "Pricing", icon: Tag },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#0a0a0a] border-r border-white/10 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
            StayOps CMS
          </h1>
          <p className="text-xs text-muted mt-1">Localhost Environment</p>
        </div>

        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gold-500/10 text-gold-500 border border-gold-500/20"
                  : "text-muted hover:bg-white/5 hover:text-white border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? "rotate-90" : ""}`} />
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/10 mt-auto">
          <Button 
            onClick={handleSave} 
            disabled={saving}
            className="w-full bg-gold-500 hover:bg-gold-600 text-black flex items-center justify-center gap-2"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saveSuccess ? "Saved!" : "Save Changes"}
          </Button>
          <AnimatePresence>
            {saveSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-green-400 flex items-center gap-1 justify-center mt-3"
              >
                <CheckCircle2 className="w-3 h-3" /> Successfully written to JSON
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold capitalize">{activeTab.replace(/([A-Z])/g, ' $1').trim()}</h2>
            <p className="text-muted mt-2">Manage the content for the {activeTab} section of your landing page.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* HERO EDITOR */}
              {activeTab === "hero" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Announcement Badge</label>
                    <input 
                      type="text" 
                      value={data.hero.badge} 
                      onChange={e => handleNestedChange(["hero", "badge"], e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Main Headline</label>
                    <textarea 
                      value={data.hero.title} 
                      onChange={e => handleNestedChange(["hero", "title"], e.target.value)}
                      rows={2}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Subtitle / Description</label>
                    <textarea 
                      value={data.hero.subtitle} 
                      onChange={e => handleNestedChange(["hero", "subtitle"], e.target.value)}
                      rows={3}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                    />
                  </div>
                </div>
              )}

              {/* PLATFORMS EDITOR */}
              {activeTab === "platforms" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Label</label>
                      <input 
                        type="text" 
                        value={data.platforms.label} 
                        onChange={e => handleNestedChange(["platforms", "label"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Title</label>
                      <input 
                        type="text" 
                        value={data.platforms.title} 
                        onChange={e => handleNestedChange(["platforms", "title"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Subtitle</label>
                    <input 
                      type="text" 
                      value={data.platforms.subtitle} 
                      onChange={e => handleNestedChange(["platforms", "subtitle"], e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-white/10 pb-2">Platform Items</h3>
                    {data.platforms.items.map((item: any, i: number) => (
                      <div key={item.id} className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a] space-y-4">
                        <div className="font-medium text-gold-400 capitalize">{item.id} Platform</div>
                        <input 
                          value={item.name} 
                          onChange={e => handleNestedChange(["platforms", "items", i, "name"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                        />
                        <div className="text-sm text-muted">Features (Comma separated)</div>
                        <textarea 
                          value={item.features.join(", ")} 
                          onChange={e => handleNestedChange(["platforms", "items", i, "features"], e.target.value.split(",").map((s:string)=>s.trim()))}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FEATURES EDITOR */}
              {activeTab === "features" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Title</label>
                      <input 
                        type="text" 
                        value={data.features.title} 
                        onChange={e => handleNestedChange(["features", "title"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Subtitle</label>
                      <input 
                        type="text" 
                        value={data.features.subtitle} 
                        onChange={e => handleNestedChange(["features", "subtitle"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.features.items.map((item: any, i: number) => (
                      <div key={i} className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a]">
                        <input 
                          value={item.title} 
                          onChange={e => handleNestedChange(["features", "items", i, "title"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* USE CASES EDITOR */}
              {activeTab === "useCases" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Title</label>
                      <input 
                        type="text" 
                        value={data.useCases.title} 
                        onChange={e => handleNestedChange(["useCases", "title"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Subtitle</label>
                      <input 
                        type="text" 
                        value={data.useCases.subtitle} 
                        onChange={e => handleNestedChange(["useCases", "subtitle"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.useCases.items.map((item: any, i: number) => (
                      <div key={i} className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a] space-y-3">
                        <input 
                          value={item.title} 
                          onChange={e => handleNestedChange(["useCases", "items", i, "title"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500/50 font-bold"
                        />
                        <textarea 
                          value={item.description} 
                          onChange={e => handleNestedChange(["useCases", "items", i, "description"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500/50 text-sm"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ EDITOR */}
              {activeTab === "faq" && (
                <div className="space-y-8">
                   <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Title</label>
                      <input 
                        type="text" 
                        value={data.faq.title} 
                        onChange={e => handleNestedChange(["faq", "title"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-2">Subtitle</label>
                      <input 
                        type="text" 
                        value={data.faq.subtitle} 
                        onChange={e => handleNestedChange(["faq", "subtitle"], e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {data.faq.items.map((item: any, i: number) => (
                      <div key={i} className="p-4 border border-white/10 rounded-xl bg-[#0a0a0a] space-y-3">
                        <input 
                          value={item.question} 
                          onChange={e => handleNestedChange(["faq", "items", i, "question"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500/50 font-medium"
                        />
                        <textarea 
                          value={item.answer} 
                          onChange={e => handleNestedChange(["faq", "items", i, "answer"], e.target.value)}
                          className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500/50 text-sm text-muted"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PRICING EDITOR */}
              {activeTab === "pricing" && (
                <div className="text-muted italic border border-white/10 p-8 rounded-2xl bg-[#0a0a0a] text-center">
                  Pricing configuration is complex (split into chat, voice, video). 
                  To manage pricing, please edit <code className="text-gold-400 bg-gold-400/10 px-2 py-1 rounded">src/lib/cms-data.json</code> directly. 
                  (Advanced pricing GUI could be implemented in future updates).
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
