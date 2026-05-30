const fs = require('fs');
const path = require('path');

const pages = [
  'billing', 'users', 'chat', 'voice', 'video', 'health', 'compute', 'settings'
];

const template = (name) => `"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ${name.charAt(0).toUpperCase() + name.slice(1)}AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-12 rounded-3xl border border-white/10"
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
          <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 capitalize">${name} Configuration</h2>
        <p className="text-muted max-w-md mx-auto mb-8">
          The ${name} module is currently under development. This section will allow you to manage all ${name}-related settings and integrations.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Module in Development
        </div>
      </motion.div>
    </div>
  );
}
`;

pages.forEach(p => {
  const dir = path.join(__dirname, 'src', 'app', 'admin', p);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p));
});
