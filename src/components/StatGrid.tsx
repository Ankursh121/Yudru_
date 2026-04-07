"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate, motion } from "framer-motion";
import { Cpu, Users, Zap, Shield } from "lucide-react";

const itemVariants = {
  hidden: (isMobile: boolean) => ({ 
    opacity: 0, 
    y: 40,
    scale: isMobile ? 0.95 : 1,
  }),
  visible: (isMobile: boolean) => ({
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: isMobile 
      ? { duration: 0.5, ease: "easeOut" as any }
      : { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any } 
  })
};

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

function Counter({ value, suffix = "", label, icon: Icon, isMobile }: any) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Cinematic easing
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest) + suffix;
          }
        }
      });
    }
  }, [isInView, value, motionValue, suffix]);

  return (
    <motion.div 
      custom={isMobile} 
      variants={itemVariants}
      className="flex flex-col items-center justify-center p-8 bg-[#0a0f16]/60 border border-[#00e5ff]/10 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:bg-[#0a0f16]/80 hover:border-[#00e5ff]/30"
    >
      <Icon className="w-8 h-8 text-[#00e5ff] mb-6 opacity-90" strokeWidth={1.5} />
      <div className="text-4xl md:text-5xl font-bold text-[#00e5ff] font-sans tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
        <span ref={ref}>0{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-white/50 font-medium tracking-wide mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatGrid() {
  const isMobile = useMobile();
  const stats = [
    { icon: Cpu, value: 50, suffix: "+", label: "Drone Models" },
    { icon: Users, value: 500, suffix: "+", label: "Trained Pilots" },
    { icon: Zap, value: 5, suffix: "+", label: "Years R&D" },
    { icon: Shield, value: 100, suffix: "%", label: "Non-Chinese" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-4 px-4">
      {stats.map((s, i) => (
        <Counter key={i} {...s} isMobile={isMobile} />
      ))}
    </div>
  );
}
