"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function CMSPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Content Management</h2>
        <p className="text-muted">Update landing page content instantly. Changes are saved to Supabase.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hero Section</CardTitle>
          <CardDescription>Manage the main headline and subheadline.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Main Headline</label>
            <Input defaultValue="Build Your AI Workforce with StayOps.ai" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Subheadline</label>
            <Textarea 
              defaultValue="Deploy AI agents for HR, sales, customer support, operations, and workflows — all from one powerful platform." 
            />
          </div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Call to Action Buttons</CardTitle>
          <CardDescription>Manage button text and links.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Primary Button Text</label>
              <Input defaultValue="Start Free Trial" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Primary Button Link</label>
              <Input defaultValue="/signup" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Secondary Button Text</label>
              <Input defaultValue="Schedule Demo" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Secondary Button Link</label>
              <Input defaultValue="#contact" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
