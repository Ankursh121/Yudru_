"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, School, Shield, Building2, Clock, BarChart, UserPlus } from "lucide-react";

// Framer motion global staggers
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function TrainingPage() {
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-screen pt-32 pb-10 flex flex-col items-center justify-center relative">
        {/* Deep ambient glow */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#00e5ff] opacity-[0.03] blur-[150px] pointer-events-none rounded-full -translate-x-1/2" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] text-[12px] font-bold tracking-[0.1em] uppercase">Training & Workshops</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-[5.5rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
              Master <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Drone</span> <br/>
              <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Technology</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] font-medium leading-relaxed mb-10 max-w-lg">
              From school-level introductions to advanced defence training, our programs deliver hands-on UAV education tailored to every skill level and industry need.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] shadow-[0_0_25px_rgba(0,229,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white transition-all inline-flex items-center gap-2"
              >
                Enroll Now <span className="text-[18px] leading-none mb-[2px]">→</span>
              </Link>
              <a 
                href="#programs"
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-[15px] hover:bg-white/5 transition-all inline-flex items-center"
              >
                View Programs
              </a>
            </motion.div>
          </motion.div>

          {/* Right Parallax Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)", rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ perspective: 1000, y: heroImageY }}
            className="flex-1 w-full relative"
          >
            <div className="relative w-full aspect-[4/3] max-w-[700px] ml-auto rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="/training/hero.png" 
                alt="Students flying indoor drone" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Demographics Ribbon */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full max-w-[1200px] mx-auto mt-24 mb-10 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 z-20"
        >
          {[
            { icon: School, label: "School Students" },
            { icon: GraduationCap, label: "Engineering Colleges" },
            { icon: Shield, label: "Defence Personnel" },
            { icon: Building2, label: "Industry Professionals" }
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center justify-center gap-4 text-center group">
              <div className="w-16 h-16 rounded-[20px] bg-[#00e5ff] flex items-center justify-center text-[#050b14] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300">
                <item.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <span className="text-white font-bold text-[14px]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Training Programs Section */}
      <section id="programs" className="w-full py-32 bg-[#050910] border-t border-b border-white/[0.02] relative z-20">
        
        {/* Soft centered bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5ff] opacity-[0.02] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center text-center mb-20 relative z-10"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter drop-shadow-sm">
              Training Programs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] max-w-2xl font-medium">
              Structured programs designed for schools, colleges, defence personnel, and industry professionals.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-[#0a0f16] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#00e5ff]/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <School className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium"><Clock className="w-3.5 h-3.5"/> 2 Days</div>
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium mt-1"><BarChart className="w-3.5 h-3.5"/> Foundational</div>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-[22px] mb-4 tracking-tight leading-tight group-hover:text-[#00e5ff] transition-colors">School-Level Drone<br/>Training</h3>
              <p className="text-[#8e9bb0] text-[14px] leading-relaxed mb-8 flex-1">
                A foundational drone training program designed for school students, introducing them to UAV technology through hands-on learning.
              </p>
              <ul className="space-y-4 mb-4">
                {[
                  "Introduction to drones and UAV systems",
                  "Basics of flight, safety, and regulations",
                  "Hands-on drone assembly and flying",
                  "STEM-focused practical learning"
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/70 mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-[13px]">{li}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-[#0a0f16] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#00e5ff]/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium"><Clock className="w-3.5 h-3.5"/> 3 Days</div>
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium mt-1"><BarChart className="w-3.5 h-3.5"/> Advanced</div>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-[22px] mb-4 tracking-tight leading-tight group-hover:text-[#00e5ff] transition-colors">College & Institutional<br/>Training</h3>
              <p className="text-[#8e9bb0] text-[14px] leading-relaxed mb-8 flex-1">
                Advanced training program designed for engineering students and technical institutions, covering aerodynamics through to flight testing.
              </p>
              <ul className="space-y-4 mb-4">
                {[
                  "Drone aerodynamics and propulsion systems",
                  "Electronics, flight controllers, and sensors",
                  "FPV systems and communication",
                  "Drone assembly, configuration, and flight testing",
                  "Industry applications and career pathways"
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/70 mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-[13px]">{li}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-[#0a0f16] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#00e5ff]/30 transition-colors group relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium"><Clock className="w-3.5 h-3.5"/> Custom</div>
                  <div className="flex items-center gap-1.5 text-[#8e9bb0] text-[12px] font-medium mt-1"><BarChart className="w-3.5 h-3.5"/> Professional</div>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-[22px] mb-4 tracking-tight leading-tight group-hover:text-[#00e5ff] transition-colors relative z-10">Defence & Industry<br/>Training</h3>
              <p className="text-[#8e9bb0] text-[14px] leading-relaxed mb-8 flex-1 relative z-10">
                Specialized training programs designed for operational and professional drone usage by defence personnel, security agencies, and industry professionals.
              </p>
              <ul className="space-y-4 mb-4 relative z-10">
                {[
                  "Advanced drone operations",
                  "Surveillance and mission planning",
                  "Payload integration",
                  "Maintenance, safety, and troubleshooting",
                  "Application-specific training modules"
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/70 mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-[13px]">{li}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Start Your Drone Journey CTA */}
      <section className="w-full py-32 flex items-center justify-center relative z-20 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="max-w-4xl w-full bg-[#0a0f16] border border-white/5 rounded-[32px] p-12 md:p-16 text-center flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Cybernetic glow pulse */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-[#00e5ff] blur-[100px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 z-0" 
          />
          
          <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/30 text-[#00e5ff] mb-6 relative z-10">
            <UserPlus className="w-8 h-8" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-md relative z-10">
            Start Your Drone Journey
          </h2>
          <p className="text-[#8e9bb0] text-[16px] leading-relaxed mb-10 font-medium max-w-xl relative z-10">
            Whether you&apos;re a student, educator, or professional — our training programs are designed to equip you with real-world drone skills.
          </p>

          <Link href="/contact" className="px-8 py-4 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:bg-white relative z-10 flex items-center gap-2">
            Contact Our Training Team <span>→</span>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
