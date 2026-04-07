"use client";

import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import StatGrid from "@/components/StatGrid";
import CoreFocusAreas from "@/components/CoreFocusAreas";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// =========================================================================
// DESKTOP: Original Pristine Apple-Tier Physics & Animations (DO NOT MODIFY)
// =========================================================================
const containerDesktop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemDesktop = {
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
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

function FadeInTextDesktop({ children, side = "center" }: { children: React.ReactNode, side?: "left" | "right" | "center" }) {
  let alignClass = "text-center mx-auto items-center";
  if (side === "left") alignClass = "text-left ml-[10%] max-w-xl items-start";
  if (side === "right") alignClass = "text-right mr-[10%] max-w-xl ml-auto items-end";

  return (
    <motion.div
      variants={containerDesktop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -10% 0px" }}
      className={`pointer-events-auto flex flex-col ${alignClass}`}
    >
      {children}
    </motion.div>
  );
}

function ItemDesktop({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemDesktop} className={className}>
      {children}
    </motion.div>
  );
}

// =========================================================================
// MOBILE: Fast-Track Thumb Physics & Auto-Centered Layouts
// =========================================================================
const containerMobile = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const itemMobile = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: "easeOut" as const }
  },
  visible: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const } 
  }
};

function FadeInTextMobile({ children }: { children: React.ReactNode }) {
  // Mobile explicitly overrides all sides and locks strictly to the center vertically and horizontally
  const alignClass = "text-center mx-auto items-center px-6 max-w-xl w-full";
  return (
    <motion.div
      variants={containerMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`pointer-events-auto flex flex-col ${alignClass}`}
    >
      {children}
    </motion.div>
  );
}

function ItemMobile({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemMobile} className={className}>
      {children}
    </motion.div>
  );
}

// =========================================================================
// MAIN ROUTER: Explicit Structural Isolation
// =========================================================================
export default function Home() {
  return (
    <main className="relative bg-black w-full overflow-hidden">
      <Navbar />
      
      {/* 
        ##############################################################
        LAPTOP DOM BRANCH
        Uses the exact pristine native h-[600vh] math and absolute layers.
        ##############################################################
      */}
      <div className="hidden md:block relative w-full h-[600vh] bg-black">
        <ScrollCanvas /> {/* Native Sticky logic flawlessly adhered to the 600vh parent */}
        
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col">
          
          <section className="h-screen flex flex-col items-center justify-center pt-20">
            <FadeInTextDesktop>
              <ItemDesktop>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Built for <span className="bg-gradient-to-t from-highlight to-white bg-clip-text text-transparent">Excellence.</span>
                </h1>
              </ItemDesktop>
              <ItemDesktop>
                <p className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
                  Engineered for Innovation.
                </p>
              </ItemDesktop>
              <ItemDesktop>
                <p className="text-sm md:text-base text-zinc-100 tracking-wide max-w-2xl text-center leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-4 py-2 rounded-full backdrop-blur-[2px]">
                  Pioneering indigenous drone technology solutions for monitoring, logistics, and industrial applications. From R&D to training, we deliver excellence.
                </p>
              </ItemDesktop>
            </FadeInTextDesktop>
          </section>

          <section className="h-[150vh] flex items-center justify-center w-full relative z-20">
            <FadeInTextDesktop side="center">
              <ItemDesktop>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Engineered for <span className="bg-gradient-to-t from-highlight to-white/90 bg-clip-text text-transparent">perfection.</span>
                </h2>
              </ItemDesktop>
              <ItemDesktop>
                <p className="text-lg text-zinc-100 text-center max-w-2xl mx-auto mb-16 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-6 py-2 rounded-full backdrop-blur-[2px]">
                  Advanced aerodynamics meet precision-built components. Every element optimized for stability, efficiency, and control.
                </p>
              </ItemDesktop>
              <ItemDesktop>
                <div className="w-full">
                  <StatGrid />
                </div>
              </ItemDesktop>
            </FadeInTextDesktop>
          </section>

          <section className="h-[150vh] flex items-center justify-center w-full relative z-20">
            <FadeInTextDesktop side="center">
              <ItemDesktop>
                <div className="w-full">
                  <CoreFocusAreas />
                </div>
              </ItemDesktop>
            </FadeInTextDesktop>
          </section>

          <section className="h-[240vh] flex items-center justify-center pb-[10vh] w-full relative z-20">
            <FadeInTextDesktop side="center">
              <ItemDesktop>
                <div className="w-full">
                  <CTASection />
                </div>
              </ItemDesktop>
            </FadeInTextDesktop>
          </section>

        </div>
      </div>
      
      {/* 
        ##############################################################
        MOBILE DOM BRANCH
        Pure flex stacked layers using standard fast-thumb optimizations.
        ##############################################################
      */}
      <div className="block md:hidden relative w-full flex flex-col bg-black">
        
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 relative z-20">
            <FadeInTextMobile>
              <ItemMobile>
                <h1 className="text-5xl font-bold tracking-tighter text-white mb-2 drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Built for <span className="bg-gradient-to-t from-highlight to-white bg-clip-text text-transparent">Excellence.</span>
                </h1>
              </ItemMobile>
              <ItemMobile>
                <p className="text-2xl text-white font-medium mb-6 tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
                  Engineered for Innovation.
                </p>
              </ItemMobile>
              <ItemMobile>
                <p className="text-sm text-zinc-100 tracking-wide max-w-xl text-center leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-4 py-3 rounded-2xl backdrop-blur-[2px] border border-white/5">
                  Pioneering indigenous drone technology solutions for monitoring, logistics, and industrial applications. From R&D to training, we deliver excellence.
                </p>
              </ItemMobile>
            </FadeInTextMobile>
          </section>

          <section className="py-20 flex items-center justify-center w-full relative z-20">
            <FadeInTextMobile>
              <ItemMobile>
                <h2 className="text-4xl font-bold tracking-tight text-white mb-4 text-center drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
                  Engineered for <span className="bg-gradient-to-t from-highlight to-white/90 bg-clip-text text-transparent">perfection.</span>
                </h2>
              </ItemMobile>
              <ItemMobile>
                <p className="text-lg text-zinc-100 text-center max-w-xl mx-auto mb-16 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-[2px] border border-white/5">
                  Advanced aerodynamics meet precision-built components. Every element optimized for stability, efficiency, and control.
                </p>
              </ItemMobile>
              <ItemMobile>
                <div className="w-full">
                  <StatGrid />
                </div>
              </ItemMobile>
            </FadeInTextMobile>
          </section>

          <section className="py-20 flex items-center justify-center w-full relative z-20">
            <FadeInTextMobile>
              <ItemMobile>
                <div className="w-full">
                  <CoreFocusAreas />
                </div>
              </ItemMobile>
            </FadeInTextMobile>
          </section>

          <section className="py-20 flex items-center justify-center w-full relative z-20">
            <FadeInTextMobile>
              <ItemMobile>
                <div className="w-full">
                  <CTASection />
                </div>
              </ItemMobile>
            </FadeInTextMobile>
          </section>

      </div>

      <Footer />
    </main>
  );
}
