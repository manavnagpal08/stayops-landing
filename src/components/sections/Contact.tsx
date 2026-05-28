"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted mb-12">
              Ready to automate your workforce? Our team of AI experts is here to help you design the perfect solution for your business.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email Us</h4>
                  <p className="text-muted">hello@stayops.ai</p>
                  <p className="text-muted">support@stayops.ai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Call Us</h4>
                  <p className="text-muted">+1 (555) 123-4567</p>
                  <p className="text-muted">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Visit Us</h4>
                  <p className="text-muted">100 AI Boulevard, Suite 400</p>
                  <p className="text-muted">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Full Name</label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Company Name</label>
                  <Input placeholder="Acme Inc." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input type="email" placeholder="john@acme.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Business Requirement</label>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-[#111] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50">
                  <option>Customer Support Automation</option>
                  <option>HR & Recruitment</option>
                  <option>AI Voice Calling</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea placeholder="Tell us about your current operations and goals..." className="min-h-[120px]" />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button variant="primary" className="flex-1">Submit Enquiry</Button>
                <Button variant="outline" className="flex-1">Book Demo</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
