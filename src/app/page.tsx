"use client";

import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import StatGrid from "@/components/StatGrid";
import CoreFocusAreas from "@/components/CoreFocusAreas";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    filter: "blur(12px)",
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } // Classic Apple-tier cubic bezier
  }
};

function FadeInText({ children, side = "center" }: { children: React.ReactNode, side?: "left" | "right" | "center" }) {
  let alignClass = "text-center mx-auto items-center px-4 md:px-0";
  if (side === "left") alignClass = "text-center md:text-left mx-6 md:mx-0 md:ml-[10%] max-w-xl items-center md:items-start";
  if (side === "right") alignClass = "text-center md:text-right mx-6 md:mx-0 md:mr-[10%] max-w-xl md:ml-auto items-center md:items-end";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -10% 0px" }}
      className={`pointer-events-auto flex flex-col ${alignClass}`}
    >
      {children}
    </motion.div>
  );
}

function Item({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      
      {/* Scrollable container with sticky canvas on desktop, native stack on mobile */}
      <div className="relative w-full md:h-[600vh]">
        <div className="hidden md:block">
          <ScrollCanvas />
        </div>
        
        {/* Text Overlays Layer */}
        <div className="relative md:absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col bg-black md:bg-transparent">
          
          {/* HERO section */}
          <section className="h-screen md:h-screen flex flex-col items-center justify-center pt-20">
            <FadeInText>
              <Item>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Built for <span className="bg-gradient-to-t from-highlight to-white bg-clip-text text-transparent">Excellence.</span>
                </h1>
              </Item>
              <Item>
                <p className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
                  Engineered for Innovation.
                </p>
              </Item>
              <Item>
                <p className="text-sm md:text-base text-zinc-100 tracking-wide max-w-2xl text-center leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-4 py-2 rounded-full backdrop-blur-[2px]">
                  Pioneering indigenous drone technology solutions for monitoring, logistics, and industrial applications. From R&D to training, we deliver excellence.
                </p>
              </Item>
            </FadeInText>
          </section>

          {/* ENGINEERING */}
          <section className="py-24 min-h-[50vh] md:h-[150vh] flex items-center justify-center w-full relative z-20">
            <FadeInText side="center">
              <Item>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Engineered for <span className="bg-gradient-to-t from-highlight to-white/90 bg-clip-text text-transparent">perfection.</span>
                </h2>
              </Item>
              <Item>
                <p className="text-lg text-zinc-100 text-center max-w-2xl mx-auto mb-16 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-6 py-2 rounded-full backdrop-blur-[2px]">
                  Advanced aerodynamics meet precision-built components. Every element optimized for stability, efficiency, and control.
                </p>
              </Item>
              <Item>
                <div className="w-full">
                  <StatGrid />
                </div>
              </Item>
            </FadeInText>
          </section>

          {/* SCORE FOCUS AREAS */}
          <section className="py-24 min-h-[50vh] md:h-[150vh] flex items-center justify-center w-full relative z-20">
            <FadeInText side="center">
              <Item>
                <div className="w-full">
                  <CoreFocusAreas />
                </div>
              </Item>
            </FadeInText>
          </section>

          {/* READY TO TAKE FLIGHT / CTA */}
          <section className="py-24 min-h-[50vh] md:h-[240vh] flex items-center justify-center pb-[10vh] w-full relative z-20">
            <FadeInText side="center">
              <Item>
                <div className="w-full">
                  <CTASection />
                </div>
              </Item>
            </FadeInText>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
