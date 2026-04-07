"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // 96px boundary - offset by 48 to perfectly center the tight glow
      cursorX.set(e.clientX - 48);
      cursorY.set(e.clientY - 48);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        opacity: isVisible ? 0.45 : 0,
      }}
      className="fixed w-[96px] h-[96px] bg-[#00e5ff] rounded-full pointer-events-none z-[100] blur-[45px] mix-blend-screen transition-opacity duration-1000"
    />
  );
}
