"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 300);
      cursorY.set(e.clientY - 300);
      if (!isVisible) setIsVisible(true);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] z-[1] opacity-40 mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        background: "radial-gradient(circle, rgba(234,179,8,0.08) 0%, rgba(234,179,8,0.03) 30%, rgba(0,0,0,0) 60%)",
      }}
    />
  );
}
