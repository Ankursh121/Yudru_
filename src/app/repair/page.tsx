"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/constants/contact";
import { useMobile } from "@/hooks/useMobile";
import { 
  Wrench, PhoneCall, ShieldCheck, Clock, CheckCircle2, 
  Cpu, Battery, Camera, Radio, Settings, Hammer,
  Mail, MapPin
} from "lucide-react";

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
    y: isMobile ? 20 : 40, 
    filter: isMobile ? "blur(0px)" : "blur(12px)", 
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

export default function RepairPage() {
  const isMobile = useMobile();
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
              <Wrench className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] text-[12px] font-bold tracking-[0.1em] uppercase">Expert Repair Services</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-lg leading-tight">
              Drone <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Repair</span> Services
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] md:text-[20px] font-medium leading-relaxed mb-10 max-w-2xl">
              Get your drone back in the air with our certified repair services. Fast turnaround, quality parts, and expert technicians.
            </motion.p>

            <motion.div custom={isMobile} variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] shadow-[0_0_25px_rgba(0,229,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white transition-all inline-flex items-center gap-2"
                >
                  Request Repair <span className="text-[18px] leading-none mb-[2px]">→</span>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="tel:9810653919"
                  className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-[15px] hover:bg-white/5 transition-all inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" /> Call Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose YuDru Repair? */}
      <section className="w-full py-24 bg-[#050910] border-t border-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-sm">
              Why Choose <span className="text-[#00e5ff]">YuDru</span> Repair?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] max-w-2xl font-medium">
              We bring the same innovation and expertise from our drone development to repair services.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Certified Technicians", desc: "Our team consists of certified drone technicians with years of experience." },
              { icon: Clock, title: "Quick Turnaround", desc: "Most repairs completed within 24-72 hours with priority service available." },
              { icon: CheckCircle2, title: "Quality Guarantee", desc: "90-day warranty on all repairs with genuine or high-quality replacement parts." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#00e5ff]/30 transition-colors group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-full bg-[#00e5ff]/5 flex items-center justify-center mb-6 border border-[#00e5ff]/10 text-[#00e5ff] group-hover:bg-[#00e5ff]/10 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-[#8e9bb0] text-[14px] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Repair Services (Grid) */}
      <section className="w-full py-32 border-t border-b border-white/[0.02] relative z-20">
        
        {/* Soft centered bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5ff] opacity-[0.02] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center text-center mb-20 relative z-10"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter drop-shadow-sm">
              Our Repair <span className="text-[#00e5ff]">Services</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] max-w-2xl font-medium">
              Comprehensive repair solutions for all drone components and systems.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
          >
            {[
              { icon: Cpu, title: "Flight Controller Repair", desc: "Expert diagnosis and repair of flight controller issues, firmware updates, and calibration services.", price: "₹2,500" },
              { icon: Battery, title: "Battery & Power Systems", desc: "Battery health assessment, cell replacement, power distribution board repairs, and charging system fixes.", price: "₹1,500" },
              { icon: Camera, title: "Gimbal & Camera Service", desc: "Gimbal motor replacement, stabilization calibration, camera sensor cleaning, and lens repairs.", price: "₹3,000" },
              { icon: Radio, title: "Communication Systems", desc: "RC receiver repairs, video transmitter fixes, antenna replacements, and signal optimization.", price: "₹2,000" },
              { icon: Settings, title: "Motor & ESC Repair", desc: "Motor bearing replacement, ESC diagnostics, winding repairs, and propulsion system tuning.", price: "₹1,800" },
              { icon: Hammer, title: "Frame & Structure", desc: "Carbon fiber repairs, arm replacements, landing gear fixes, and structural integrity assessment.", price: "₹1,200" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col items-start hover:border-[#00e5ff]/30 transition-colors shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mb-6 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-[20px] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#8e9bb0] text-[14px] leading-relaxed mb-6 flex-1">{service.desc}</p>
                <div className="mt-auto">
                  <span className="text-[#00e5ff] font-bold text-[15px]">Starting from {service.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works (Vertical Timeline) */}
      <section className="w-full py-32 bg-[#050910] border-b border-white/[0.02]">
        <div className="max-w-[1000px] mx-auto px-8 w-full flex flex-col items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center text-center mb-28"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              How It <span className="text-[#00e5ff]">Works</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] max-w-2xl font-medium">
              Simple and transparent repair process from start to finish.
            </motion.p>
          </motion.div>

          <div className="relative w-full flex flex-col space-y-8 lg:space-y-12">
            {/* The Vertical Line / Spine */}
            <div className="absolute top-0 left-8 lg:left-1/2 w-[2px] h-full bg-gradient-to-b from-[#00e5ff]/5 via-[#00e5ff]/30 to-[#00e5ff]/5 -translate-x-1/2 z-0" />

            {[
              { num: "01", title: "Submit Request", desc: "Fill out our repair request form or contact us directly.", dir: "right" },
              { num: "02", title: "Diagnosis", desc: "Our experts perform a thorough diagnostic assessment.", dir: "left" },
              { num: "03", title: "Quote & Approval", desc: "Receive a detailed quote and approve the repair.", dir: "right" },
              { num: "04", title: "Repair & Test", desc: "Professional repair followed by comprehensive testing.", dir: "left" },
              { num: "05", title: "Delivery", desc: "Your drone is returned fully functional and tested.", dir: "right" }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className={`relative w-full flex flex-col lg:flex-row items-center ${node.dir === 'left' ? 'lg:justify-start' : 'justify-end lg:justify-end'} z-10 pl-20 lg:pl-0`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-1/2 -translate-y-1/2 left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center`}>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff] z-20" />
                   {/* Mini pulse */}
                   <motion.div 
                     animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                     transition={{ repeat: Infinity, duration: 2, ease: "easeOut" as const }}
                     className="absolute w-6 h-6 rounded-full border border-[#00e5ff] z-10"
                   />
                </div>

                {/* Node Content Container */}
                <div className={`w-full lg:w-[42%] flex ${node.dir === 'left' ? 'lg:justify-end lg:pr-12' : 'justify-start lg:pl-12'}`}>
                  <div className="w-full bg-[#0a0f16] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-[#00e5ff]/30 transition-colors shadow-lg">
                    <span className="text-[#00e5ff] font-extrabold text-2xl md:text-3xl opacity-80 block mb-2">{node.num}</span>
                    <h4 className="text-white font-bold text-lg md:text-xl mb-2">{node.title}</h4>
                    <p className="text-[#8e9bb0] text-[13px] md:text-[14px] leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Need Immediate Assistance? (Contact Block) */}
      <section className="w-full py-24 mb-10 flex items-center justify-center relative z-20 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="max-w-5xl w-full bg-[#0a0f16] border border-white/10 rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Cybernetic glow pulse */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00e5ff] blur-[100px] pointer-events-none rounded-full -translate-y-1/2 z-0" 
          />
          
          {/* Left Side: Contact Text & Details */}
          <div className="flex-1 flex flex-col items-start relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4 drop-shadow-md">
              Need Immediate<br/>Assistance?
            </h2>
            <p className="text-[#8e9bb0] text-[15px] leading-relaxed mb-8 font-medium max-w-sm">
              Our expert technicians are ready to help. Contact us for a free consultation and quote.
            </p>

            <div className="flex flex-col space-y-4 w-full">
              <a href="tel:9810653919" className="flex items-center gap-3 text-white/90 hover:text-[#00e5ff] transition-colors group w-fit">
                <PhoneCall className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-bold tracking-wide">+91 9810653919</span>
              </a>
              <a href="mailto:repair@yudru.com" className="flex items-center gap-3 text-white/90 hover:text-[#00e5ff] transition-colors group w-fit">
                <Mail className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-medium">repair@yudru.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-medium">Yudru Technologies, Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Button Links */}
          <div className="flex flex-col items-center md:items-end justify-center w-full md:w-auto relative z-10 space-y-4 mt-4 md:mt-0">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[220px] px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] hover:bg-white transition-all text-center shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              Chat on WhatsApp
            </a>
            <button className="w-full md:w-[220px] px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-[15px] hover:bg-white/5 transition-all text-center">
              View FAQs
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
