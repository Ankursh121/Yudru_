"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 35, stiffness: 450, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isButton = target.closest("button") ||
        target.closest("a") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button";

      setIsHovering(!!isButton);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] overflow-visible hidden md:block"
      style={{
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* CONSTANT BLUE POWER-GLOW (Always On) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00D6FF]/15 rounded-full blur-[35px]"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Continuous Dual-Ripple Flow (Subtle) */}
      {isHovering && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[#50C878]/50"
              style={{ mixBlendMode: "screen" }}
            />
          ))}
        </div>
      )}

      {/* Soft Emerald Glow BACKGROUND (Reduced Brightness) */}
      <motion.div
        animate={{
          scale: isHovering ? 3.5 : 1,
          opacity: isHovering ? 0.2 : 0, // Reduced opacity
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#50C878]/15 rounded-full blur-[80px]"
        style={{ mixBlendMode: "screen" }}
      />

      {/* THE CURSOR IMAGE (Reduced Contrast) */}
      <motion.div
        animate={{
          scale: isHovering ? 1.25 : 1.1,
          rotate: isHovering ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10"
      >
        <img
          src="/cursor.png"
          alt="Cursor"
          className="w-[70px] h-[70px] object-contain transition-all duration-300"
          style={{ 
            imageRendering: "auto",
            filter: isHovering ? "drop-shadow(0 0 10px #50C878) brightness(1.1)" : "none" // Reduced brightness
          }}
        />
      </motion.div>
    </motion.div>
  );
}
