"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Mic, 
  HeadphonesIcon, 
  BarChart3, 
  Briefcase, 
  Workflow, 
  Settings, 
  PhoneCall 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Link from "next/link";

const agents = [
  {
    title: "HR Automation",
    description: "Automate onboarding, leave management, and employee queries.",
    icon: Users,
    href: "/login",
  },
  {
    title: "AI Voice Agents",
    description: "Inbound and outbound voice agents that sound completely human.",
    icon: Mic,
    href: "/login",
  },
  {
    title: "Customer Support",
    description: "24/7 intelligent ticketing and live chat resolution.",
    icon: HeadphonesIcon,
    href: "/login",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights and ROI tracking across all agents.",
    icon: BarChart3,
    href: "/login",
  },
  {
    title: "Recruitment",
    description: "Screen resumes and conduct initial candidate interviews.",
    icon: Briefcase,
    href: "/login",
  },
  {
    title: "Workflow Automation",
    description: "Connect your tools and let AI execute repetitive tasks.",
    icon: Workflow,
    href: "/login",
  },
  {
    title: "AI Calling System",
    description: "Mass outreach and lead qualification via voice.",
    icon: PhoneCall,
    href: "/login",
  },
  {
    title: "Admin Panel",
    description: "Manage billing, users, and configure AI behaviors.",
    icon: Settings,
    href: "/admin",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function DashboardPortal() {
  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Command Center
          </h2>
          <p className="text-lg text-muted">
            Access specific AI agent dashboards or manage your entire automated workforce from a single unified portal.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {agents.map((agent, index) => (
            <motion.div key={index} variants={item}>
              <Link href={agent.href} className="block h-full">
                <Card className="h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 text-gold-500 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                      <agent.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg mb-2">{agent.title}</CardTitle>
                    <CardDescription>{agent.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
