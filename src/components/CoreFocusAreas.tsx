import Link from "next/link";
import { Beaker, GraduationCap, Settings, Plane, ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile";

const focusAreas = [
  {
    icon: Beaker,
    title: "Research & Development",
    desc: "Cutting-edge drone prototyping, AI navigation, and flight control systems development.",
    link: "/r-and-d"
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    desc: "Professional drone pilot certification, safety compliance, and industrial operations training.",
    link: "/training"
  },
  {
    icon: Settings,
    title: "Technical Workshops",
    desc: "Hands-on workshops for drone assembly, electronics, battery technology, and maintenance.",
    link: "/training"
  },
  {
    icon: Plane,
    title: "Drone Laboratories",
    desc: "State-of-the-art prototyping labs, testing environments, and simulation facilities.",
    link: "/drone-labs"
  }
];

const itemVariants = {
  hidden: (isMobile: boolean) => ({ 
    opacity: 0, 
    y: 40,
    scale: isMobile ? 0.95 : 1, // Scaled entry strictly for Mobile
  }),
  visible: (isMobile: boolean) => ({
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: isMobile 
      ? { duration: 0.4, ease: "easeOut" }
      : { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  })
};

// useMobile hook moved to shared hooks/useMobile.ts

export default function CoreFocusAreas() {
  const isMobile = useMobile();
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4">
      {/* Label Pill */}
      <div className="px-5 py-1.5 rounded-full border border-[#00e5ff]/40 bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
        What We Do
      </div>
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 uppercase drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
        Core Focus Areas
      </h2>
      
      {/* Subheading */}
      <p className="text-zinc-100 text-center max-w-2xl text-[15px] md:text-lg mb-16 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-6 py-2 rounded-full backdrop-blur-[2px]">
        Delivering excellence across the complete drone technology ecosystem, from research to deployment.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full text-left">
        {focusAreas.map((area, idx) => (
          <motion.div 
            custom={isMobile}
            variants={itemVariants}
            key={idx} 
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.15 }}
            className="flex flex-col bg-[#0a0f16]/80 border border-[#00e5ff]/10 rounded-2xl p-6 hover:bg-[#0c131c] hover:border-[#00e5ff]/30 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
          >
            {/* Icon Block */}
            <div className="w-12 h-12 rounded-xl bg-[#00e5ff] flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:scale-110 transition-transform duration-300">
              <area.icon className="w-6 h-6 text-[#050b14]" strokeWidth={2} />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight drop-shadow-sm">{area.title}</h3>
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow drop-shadow-sm">
              {area.desc}
            </p>
            
            <Link href={area.link} className="inline-flex items-center text-[#00e5ff] text-sm font-bold tracking-wide hover:text-white transition-colors group-hover:gap-2 gap-1 mt-auto">
              Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
