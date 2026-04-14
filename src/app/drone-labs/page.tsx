"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlaskConical, Monitor, Users, Cpu, Microscope, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/contact";
import { useMobile } from "@/hooks/useMobile";

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (isMobile: boolean) => ({
    opacity: 1,
    transition: { 
      staggerChildren: isMobile ? 0.05 : 0.15, 
      delayChildren: isMobile ? 0 : 0.1 
    }
  })
};

const itemVariants = {
  hidden: (isMobile: boolean) => ({ 
    opacity: 0, 
    y: isMobile ? 20 : 30, 
    filter: isMobile ? "blur(0px)" : "blur(10px)",
    scale: isMobile ? 1 : 0.95
  }),
  visible: (isMobile: boolean) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: isMobile 
      ? { duration: 0.4, ease: "easeOut" as const }
      : { duration: 0.5, ease: "easeOut" as const }
  })
};

export default function DroneLabsPage() {
  const isMobile = useMobile();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-40 pb-20 flex flex-col items-center justify-center relative bg-[url('/grid-pattern.svg')] bg-center text-center">
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00e5ff] opacity-[0.03] blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1000px] mx-auto px-8 w-full flex flex-col items-center relative z-10">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={isMobile}
            className="flex flex-col items-center"
          >
            <motion.div custom={isMobile} variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <FlaskConical className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] text-[12px] font-bold tracking-[0.1em] uppercase">Innovation Hub</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-lg">
              Drone Labs
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] md:text-[20px] font-medium leading-relaxed mb-10 max-w-2xl">
              Our state-of-the-art laboratories serve as the innovation and training backbone of YuDru, featuring cutting-edge facilities for every aspect of drone development.
            </motion.p>

            <motion.div custom={isMobile} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] shadow-[0_0_25px_rgba(0,229,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white transition-all inline-flex items-center gap-2"
              >
                Schedule a Visit <span className="text-[18px] leading-none mb-[2px]">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* World-Class Facilities */}
      <section className="w-full py-24 bg-[#050910] border-t border-b border-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }} custom={isMobile}
            className="flex flex-col items-center justify-center text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-sm">
              World-Class Facilities
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] max-w-2xl font-medium">
              From prototyping to testing, our labs are equipped to handle every stage of drone development.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }} custom={isMobile}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: FlaskConical, title: "Prototyping Lab", desc: "Rapid prototyping facilities for drone frame design, assembly, and initial testing." },
              { icon: Monitor, title: "Testing & Simulation", desc: "Advanced flight simulators and controlled testing environments for validation." },
              { icon: Users, title: "Training Labs", desc: "Dedicated spaces for student and professional drone operation training." },
              { icon: Cpu, title: "Electronics Workshop", desc: "Specialized area for flight controller programming and electronic assembly." },
              { icon: Microscope, title: "R&D Zone", desc: "Experimental research area for advanced drone technology development." },
              { icon: Zap, title: "Battery Testing", desc: "Secure facility for battery performance testing and safety validation." }
            ].map((facility, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col items-start hover:border-[#00e5ff]/30 transition-colors group relative overflow-hidden shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <facility.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-3 tracking-tight">{facility.title}</h3>
                <p className="text-[#8e9bb0] text-[14px] leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Built for Innovation (Split layout) */}
      <section className="w-full py-32 relative z-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }} custom={isMobile}
            className="flex-1 flex flex-col items-start"
          >
            <motion.h2 custom={isMobile} variants={itemVariants} className="text-4xl md:text-[3.5rem] font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Built for <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Innovation</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-xl">
              Our drone labs are designed to foster innovation, collaboration, and hands-on learning. Whether you&apos;re a student, researcher, or industry professional, our facilities provide the perfect environment for drone technology advancement.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-5 mb-10">
              {[
                "24/7 access for research teams",
                "Industry-standard equipment and tools",
                "Collaborative workspace design",
                "Safety-certified testing zones",
                "High-speed connectivity and data systems"
              ].map((li, i) => (
                <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] flex-shrink-0" />
                  <span className="text-white/90 text-[15px] font-medium">{li}</span>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ y: imageY }}
            className="flex-1 w-full relative h-[500px]"
          >
            {/* Ambient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#00e5ff] opacity-10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src="/r-and-d/hero.png" 
                alt="High-tech drone laboratory" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
