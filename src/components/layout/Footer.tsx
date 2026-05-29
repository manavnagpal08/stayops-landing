import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="StayOps.ai Logo" 
                width={300} 
                height={80} 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted mb-6">
              Automate your business operations with 24/7 AI workforce solutions. 
              Built for modern enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-gold-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-gold-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-gold-500 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#features" className="hover:text-gold-400 transition-colors">Features</Link></li>
              <li><Link href="#use-cases" className="hover:text-gold-400 transition-colors">Use Cases</Link></li>
              <li><Link href="#pricing" className="hover:text-gold-400 transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Dashboards */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dashboards</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/login" className="hover:text-gold-400 transition-colors">HR Dashboard</Link></li>
              <li><Link href="/login" className="hover:text-gold-400 transition-colors">Sales CRM</Link></li>
              <li><Link href="/login" className="hover:text-gold-400 transition-colors">Support Portal</Link></li>
              <li><Link href="/login" className="hover:text-gold-400 transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="mailto:hello@stayops.ai" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gold-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} StayOps.ai. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted">
            <span>Built with precision</span>
            <span>•</span>
            <span className="text-gold-500">Enterprise Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
