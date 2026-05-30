"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

type BannerData = {
  type: "video" | "photo";
  url: string;
  title: string;
  subtitle: string;
};

export function DynamicBanner({ initialData }: { initialData?: BannerData }) {
  const [banner, setBanner] = useState<BannerData | null>(initialData || null);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (initialData) return; // Skip fetch if we have initial data (production)

    // Fetch initial banner state
    fetch("/api/banner", { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));

    // Optional: Poll every few seconds to see live changes from Admin CMS
    const interval = setInterval(() => {
      fetch("/api/banner")
        .then((res) => res.json())
        .then((data) => setBanner(data));
    }, 3000);

    return () => clearInterval(interval);
  }, [initialData]);

  if (isLoading || !banner || !banner.url) return null; // Don't show if empty or loading

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="w-full relative overflow-hidden"
      >
        <div 
          className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] group"
          onMouseEnter={() => setIsMuted(false)}
          onMouseLeave={() => setIsMuted(true)}
        >
          {/* Background Media */}
          {banner.type === "video" ? (
            <>
              <video
                src={banner.url}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-6 right-6 z-50 glass p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </>
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.url})` }}
            />
          )}

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4px_4px] opacity-30" />

          {/* Content */}
          {(banner.title || banner.subtitle) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="glass px-8 py-6 rounded-2xl border border-white/10 backdrop-blur-md max-w-3xl"
              >
                {banner.title && (
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl">
                    {banner.title}
                  </h1>
                )}
                {banner.subtitle && (
                  <p className="text-lg md:text-xl text-gold-300 drop-shadow-md">
                    {banner.subtitle}
                  </p>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
