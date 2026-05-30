"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Download, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function BillingAdminPage() {
  const [upgrading, setUpgrading] = useState(false);

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Billing & Subscriptions</h2>
        <p className="text-muted">Manage your plans, usage limits, and payment methods.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <Card className="lg:col-span-2 border-gold-500/30 bg-gold-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Zap className="w-32 h-32 text-gold-500" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-white mb-1">Enterprise Plan</CardTitle>
                <CardDescription>Billed annually. Next charge on Oct 14, 2026.</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">$2,400</div>
                <div className="text-xs text-muted">/ month</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Chat Messages</span>
                  <span className="text-chat-400 font-mono">1.2M / Unlimited</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="h-full bg-chat-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Voice Minutes</span>
                  <span className="text-voice-400 font-mono">42k / 100k</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "42%" }} className="h-full bg-voice-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <Button 
                onClick={() => {
                  setUpgrading(true);
                  setTimeout(() => setUpgrading(false), 2000);
                }}
                className="bg-gold-500 hover:bg-gold-600 text-black"
              >
                {upgrading ? "Processing..." : "Change Plan"}
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Cancel Subscription
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="border-white/10 bg-[#111]">
          <CardHeader>
            <CardTitle className="text-lg text-white">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center gap-4">
              <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">•••• •••• •••• 4242</div>
                <div className="text-xs text-muted">Expires 12/28</div>
              </div>
            </div>
            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
              Update Method
            </Button>
            <div className="flex items-center gap-2 text-xs text-muted justify-center mt-4">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Secured by Stripe
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice History */}
      <Card className="border-white/10 bg-[#111]">
        <CardHeader>
          <CardTitle className="text-lg text-white">Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "INV-2026-004", date: "Sep 14, 2026", amount: "$2,400.00", status: "Paid" },
              { id: "INV-2026-003", date: "Aug 14, 2026", amount: "$2,400.00", status: "Paid" },
              { id: "INV-2026-002", date: "Jul 14, 2026", amount: "$2,400.00", status: "Paid" },
            ].map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm font-medium text-white">{invoice.amount}</div>
                    <div className="text-xs text-muted">{invoice.date}</div>
                  </div>
                  <div className="hidden sm:block text-xs font-mono text-muted">{invoice.id}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                    {invoice.status}
                  </div>
                  <button className="text-muted hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
