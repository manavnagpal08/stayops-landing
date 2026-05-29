"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Hexagon, 
  LayoutDashboard, 
  MessageSquare, 
  Mic, 
  Video, 
  CreditCard,
  Users,
  Settings,
  Activity,
  Server
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navSections: Array<{
    title: string;
    items: Array<{
      name: string;
      href: string;
      icon: any;
      accent?: string;
    }>;
  }> = [
    {
      title: "Core",
      items: [
        { name: "Overview", href: "/admin", icon: LayoutDashboard },
        { name: "CMS / Content", href: "/admin/cms", icon: LayoutDashboard },
        { name: "Billing & Subscriptions", href: "/admin/billing", icon: CreditCard },
        { name: "Team & Roles", href: "/admin/users", icon: Users },
      ]
    },
    {
      title: "Platforms",
      items: [
        { name: "Chat AI", href: "/admin/chat", icon: MessageSquare, accent: "text-chat-400" },
        { name: "Voice AI", href: "/admin/voice", icon: Mic, accent: "text-voice-400" },
        { name: "Video AI", href: "/admin/video", icon: Video, accent: "text-video-400" },
      ]
    },
    {
      title: "Infrastructure",
      items: [
        { name: "Service Health", href: "/admin/health", icon: Activity },
        { name: "GPU & Compute", href: "/admin/compute", icon: Server },
        { name: "Global Settings", href: "/admin/settings", icon: Settings },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2 group">
            <Hexagon className="h-6 w-6 text-gold-500 group-hover:text-gold-400" />
            <span className="text-xl font-bold tracking-tighter text-white">
              StayOps<span className="text-gold-500">.ai</span>
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
          {navSections.map((section, idx) => (
            <div key={idx}>
              <div className="text-xs font-semibold text-muted tracking-wider uppercase mb-3 px-2">
                {section.title}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive 
                          ? "bg-white/10 text-white border border-white/5" 
                          : "text-muted hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon className={`h-4 w-4 ${item.accent || (isActive ? "text-white" : "text-muted")}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
        <header className="h-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-30">
          <h1 className="text-xl font-semibold text-white">
            Ecosystem Admin
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-sm font-mono text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> All Systems Operational
            </div>
            <div className="h-8 w-8 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 font-bold text-sm">
              AD
            </div>
          </div>
        </header>
        
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
