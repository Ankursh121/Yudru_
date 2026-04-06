"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlaskConical, Cpu, Radio, Compass, Building2, Users } from "lucide-react";

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function RDPage() {
  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-[90vh] pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00e5ff] opacity-[0.03] blur-[150px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <FlaskConical className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] text-[12px] font-bold tracking-[0.1em] uppercase">Research & Development</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-[5.5rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
              Pushing the <br/>
              <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Boundaries</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] font-medium leading-relaxed mb-10 max-w-lg">
              Our R&D division leads innovation in drone technology through advanced research, prototyping, and collaborative development with industry and academic partners.
            </motion.p>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] shadow-[0_0_25px_rgba(0,229,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white transition-all inline-flex items-center gap-2"
              >
                Partner With Us <span className="text-[18px] leading-none mb-[2px]">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] ml-auto rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="/r-and-d/hero.png" 
                alt="High-tech drone laboratory" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="w-full py-32 bg-[#050910] border-t border-b border-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter drop-shadow-sm">
              Core Research Areas
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] max-w-2xl font-medium">
              Our multidisciplinary approach covers the complete spectrum of drone technology innovation.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Cpu, title: "AI Navigation & Automation", desc: "Developing intelligent autonomous flight systems using advanced machine learning algorithms." },
              { icon: FlaskConical, title: "Drone Prototyping", desc: "Rapid prototyping and iterative testing of new drone designs and configurations." },
              { icon: Radio, title: "Communication Systems", desc: "Secure telemetry and communication protocols for reliable drone operations." },
              { icon: Compass, title: "Flight Control Systems", desc: "Advanced flight controllers with precision navigation and stabilization." }
            ].map((area, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#0a0f16] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#00e5ff]/30 transition-colors group relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0 bg-gradient-to-b from-[#00e5ff]/5 to-transparent transition-all duration-500 group-hover:h-full opacity-0 group-hover:opacity-100 pointer-events-none" />

                <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-4 tracking-tight leading-tight">{area.title}</h3>
                <p className="text-[#8e9bb0] text-[14px] leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Innovation Pipeline (Vertical Timeline) */}
      <section className="w-full py-32 relative">
        <div className="max-w-[1000px] mx-auto px-8 w-full flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-28 tracking-tighter"
          >
            Innovation Pipeline
          </motion.h2>

          <div className="relative w-full flex flex-col space-y-16 lg:space-y-24">
            {/* The Spine */}
            <div className="absolute top-0 left-8 lg:left-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#00e5ff]/20 to-transparent -translate-x-1/2 z-0" />

            {[
              { num: "01", title: "Concept & Research", desc: "Initial research and feasibility studies", dir: "left" },
              { num: "02", title: "Design & Prototyping", desc: "Iterative design and rapid prototyping", dir: "right" },
              { num: "03", title: "Testing & Validation", desc: "Rigorous testing in simulated environments", dir: "left" },
              { num: "04", title: "Deployment & Support", desc: "Production and ongoing R&D support", dir: "right" }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className={`relative w-full flex items-center ${node.dir === 'left' ? 'justify-end lg:justify-start' : 'justify-end'} z-10 pl-20 lg:pl-0`}
              >
                {/* Node Dot Container */}
                <div className={`absolute top-1/2 -translate-y-1/2 left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center`}>
                   <div className="w-4 h-4 rounded-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff] z-20" />
                   {/* Expanding pulse ring */}
                   <motion.div 
                     animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                     transition={{ repeat: Infinity, duration: 2, ease: "easeOut" as const }}
                     className="absolute w-8 h-8 rounded-full border border-[#00e5ff] z-10"
                   />
                </div>

                {/* Card Payload */}
                <div className={`w-full lg:w-[42%] ${node.dir === 'left' ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} text-left`}>
                  <div className="bg-[#0a0f16] border border-white/5 p-8 rounded-2xl hover:border-[#00e5ff]/30 transition-colors shadow-lg">
                    <span className="text-[#00e5ff] font-extrabold text-3xl opacity-50 block mb-2">{node.num}</span>
                    <h4 className="text-white font-bold text-xl mb-2">{node.title}</h4>
                    <p className="text-[#8e9bb0] text-[14px]">{node.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Collaborative Innovation CTA */}
      <section className="w-full py-24 mb-10 flex items-center justify-center relative z-20 px-8">
        <div className="max-w-4xl w-full bg-[#0a0f16] border border-white/5 rounded-[32px] p-12 md:p-16 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          {/* Cybernetic glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00e5ff] opacity-[0.04] blur-[80px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-md relative z-10">
            Collaborative Innovation
          </h2>
          <p className="text-[#8e9bb0] text-[16px] leading-relaxed mb-10 font-medium max-w-xl relative z-10">
            We partner with leading institutions and organizations to accelerate drone technology development and adoption.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 relative z-10">
            <span className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-white text-[14px] font-bold flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#00e5ff]" /> Industry Partners
            </span>
            <span className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-white text-[14px] font-bold flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00e5ff]" /> Academic Institutions
            </span>
            <span className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-white text-[14px] font-bold flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-[#00e5ff]" /> Research Organizations
            </span>
          </div>

          <Link href="/contact" className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-white relative z-10 inline-block">
            Become a Partner →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
