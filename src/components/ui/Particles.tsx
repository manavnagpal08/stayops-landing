"use client";
import { motion } from "framer-motion";

export function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Space Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      {/* Slow Moving Ambient Orbs */}
      <motion.div
        animate={{ y: [0, -50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"
      />
    </div>
  );
}
