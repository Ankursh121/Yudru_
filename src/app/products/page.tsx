"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { Plane, Eye, Package, Camera, MousePointer2, Battery, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants/contact";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans overflow-x-hidden w-full">
      <Navbar />

      {/* Hero Header */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff] opacity-10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 mb-10 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
          <span className="text-[#00e5ff] text-[13px] font-bold uppercase tracking-[0.2em] relative flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_8px_#00e5ff]"/>
            Scroll to Discover
          </span>
        </div>

        <h1 className="text-6xl md:text-[6.5rem] font-bold tracking-tighter text-white mb-6 text-center leading-[0.95]">
          Our <br/>
          <span className="bg-gradient-to-t from-[#00e5ff] to-white bg-clip-text text-transparent">Product Portfolio</span>
        </h1>

        <p className="text-[#8e9bb0] text-[18px] md:text-[20px] font-medium max-w-2xl text-center mb-16 leading-relaxed">
          100% indigenous drone technology engineered for innovation, research, and industrial excellence.
        </p>

        {/* Dynamic Jump Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-4 relative z-10">
          <a href="#soccer" className="px-5 py-2.5 rounded-full border border-[#0084ff]/30 text-[#0084ff] text-[14px] font-bold hover:bg-[#0084ff]/10 hover:border-[#0084ff]/60 transition-colors shadow-sm">
            Sports Drone – Drone Soccer
          </a>
          <a href="#surveillance" className="px-5 py-2.5 rounded-full border border-[#a855f7]/30 text-[#a855f7] text-[14px] font-bold hover:bg-[#a855f7]/10 hover:border-[#a855f7]/60 transition-colors shadow-sm">
            Surveillance Drones
          </a>
          <a href="#logistic" className="px-5 py-2.5 rounded-full border border-[#10b981]/30 text-[#10b981] text-[14px] font-bold hover:bg-[#10b981]/10 hover:border-[#10b981]/60 transition-colors shadow-sm">
            Logistic Drones
          </a>
          <a href="#fpv" className="px-5 py-2.5 rounded-full border border-[#f97316]/30 text-[#f97316] text-[14px] font-bold hover:bg-[#f97316]/10 hover:border-[#f97316]/60 transition-colors shadow-sm">
            FPV Drones
          </a>
          <a href="#batteries" className="px-5 py-2.5 rounded-full border border-[#ec4899]/30 text-[#ec4899] text-[14px] font-bold hover:bg-[#ec4899]/10 hover:border-[#ec4899]/60 transition-colors shadow-sm">
            Batteries & Power Systems
          </a>
        </div>

        {/* Scroll Mouse Icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <span className="text-[#8e9bb0] text-xs font-bold uppercase tracking-widest">Scroll Down</span>
          <MousePointer2 className="w-5 h-5 text-[#00e5ff]" />
        </motion.div>
      </section>

      {/* 1. Drone Soccer */}
      <ProductSection 
        id="soccer"
        themeColor="#0084ff"
        imageSide="left"
        imagePath="/products/soccer.png"
        eyebrow={{ icon: Plane, text: "Competitive Aerial Sport" }}
        title="Sports Drone - Drone Soccer"
        description="Drone Soccer is a competitive indoor aerial sport that combines drone piloting with team-based gameplay. Players fly specially designed, safety-caged drones to score goals through elevated rings, promoting precision control, teamwork, and fast decision-making. Ideal for educational institutions, sports academies, and event-based competitions."
        features={[
          "Fully enclosed protective frame for safe indoor use",
          "Optimized for agility and control",
          "Designed for training, tournaments, and leagues",
          "Encourages STEM learning and team collaboration"
        ]}
        tags={["Educational Institutions", "Sports Academies", "Tournaments & Leagues", "STEM Programs"]}
      />

      {/* 2. Surveillance */}
      <ProductSection 
        id="surveillance"
        themeColor="#a855f7"
        imageSide="right"
        imagePath="/products/surveillance.png"
        eyebrow={{ icon: Eye, text: "Intelligent Observation" }}
        title="Surveillance Drones"
        description="Our surveillance drone systems are engineered for reliable monitoring, reconnaissance, and security operations across civil, industrial, and defense applications. Available in Day Camera, Night Vision, and Thermal Imaging variants — all customizable based on mission requirements."
        features={[
          "High-resolution daylight camera system",
          "Night vision / low-light camera system",
          "Thermal imaging sensor for heat signatures",
          "Effective through smoke, fog, and darkness"
        ]}
        customGrid={
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-white font-bold tracking-wide mb-2 text-lg">Variants</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0a0f16] border border-[#a855f7]/20 p-5 rounded-2xl flex flex-col hover:border-[#a855f7]/50 transition-colors">
                <span className="text-[#a855f7] font-bold text-[15px] mb-2">Day Camera Drone</span>
                <p className="text-[#8e9bb0] text-[13px] leading-relaxed mb-4">High-clarity daytime operations with real-time aerial visibility for monitoring and inspection.</p>
                <ul className="text-white/60 text-[12px] font-medium space-y-1 mt-auto">
                  <li>• High-resolution daylight camera</li><li>• Stable real-time video transmission</li><li>• Suitable for perimeter security</li>
                </ul>
              </div>
              <div className="bg-[#0a0f16] border border-[#a855f7]/20 p-5 rounded-2xl flex flex-col hover:border-[#a855f7]/50 transition-colors">
                <span className="text-[#a855f7] font-bold text-[15px] mb-2">Night Vision Drone</span>
                <p className="text-[#8e9bb0] text-[13px] leading-relaxed mb-4">Built for low-light and nighttime missions with reliable performance in minimal lighting.</p>
                <ul className="text-white/60 text-[12px] font-medium space-y-1 mt-auto">
                  <li>• Night vision / low-light camera system</li><li>• Optimized for night operations</li><li>• Reliable in reduced visibility</li>
                </ul>
              </div>
              <div className="bg-[#0a0f16] border border-[#a855f7]/20 p-5 rounded-2xl md:col-span-2 flex flex-col hover:border-[#a855f7]/50 transition-colors">
                <span className="text-[#a855f7] font-bold text-[15px] mb-2">Thermal Surveillance Drone</span>
                <p className="text-[#8e9bb0] text-[13px] leading-relaxed mb-4">Advanced thermal imaging capable of detecting heat signatures in challenging environments.</p>
                <ul className="text-white/60 text-[12px] font-medium space-y-1 mt-auto">
                  <li>• Thermal imaging sensor</li><li>• Effective through smoke, fog, and darkness</li><li>• Ideal for search & rescue and defense</li>
                </ul>
              </div>
            </div>
          </div>
        }
        tags={["Perimeter Security", "Search & Rescue", "Defense Operations", "Industrial Inspections"]}
      />

      {/* 3. Logistic Drones */}
      <ProductSection 
        id="logistic"
        themeColor="#10b981"
        imageSide="left"
        imagePath="/products/logistic.png"
        eyebrow={{ icon: Package, text: "Secure Payload Transport" }}
        title="Logistic Drones"
        description="Our logistic drones are designed for secure and efficient payload transportation, from 500 grams up to 10 kilograms. Featuring modular payload mounting systems, they are suitable for medical delivery, industrial logistics, and defense use."
        features={[
          "Payload capacity: 500g to 10kg",
          "High stability with payload",
          "Modular payload mounting system",
          "Custom release mechanisms"
        ]}
        customGrid={
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-white font-bold tracking-wide mb-2 text-lg">Customization Options</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl bg-[#0a0f16] border border-[#10b981]/30 text-[#10b981] text-[13px] font-bold">Payload capacity</span>
              <span className="px-4 py-2 rounded-xl bg-[#0a0f16] border border-[#10b981]/30 text-[#10b981] text-[13px] font-bold">Flight endurance</span>
              <span className="px-4 py-2 rounded-xl bg-[#0a0f16] border border-[#10b981]/30 text-[#10b981] text-[13px] font-bold">Release mechanisms</span>
              <span className="px-4 py-2 rounded-xl bg-[#0a0f16] border border-[#10b981]/30 text-[#10b981] text-[13px] font-bold">Navigation & communication systems</span>
            </div>
          </div>
        }
        tags={["Medical Delivery", "Industrial Logistics", "Defense Use", "Disaster Relief"]}
      />

      {/* 4. FPV Drones */}
      <ProductSection 
        id="fpv"
        themeColor="#f97316"
        imageSide="right"
        imagePath="/products/fpv.png"
        eyebrow={{ icon: Camera, text: "First-Person View Lineup" }}
        title="FPV Drones"
        description="Our FPV drone lineup supports training, cinematography, industrial inspection, and advanced flight operations. Available from compact 2-inch indoor models to heavy-duty 13-inch industrial platforms, all featuring carbon fiber frames and high-performance components."
        features={[
          "Carbon fiber frames",
          "High-performance motors and ESCs",
          "Analog and digital FPV support",
          "Custom tuning and configuration"
        ]}
        customGrid={
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-white font-bold tracking-wide mb-2 text-lg">FPV Lineup</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: '2" FPV - Pavo Series', desc: 'Compact and lightweight, ideal for indoor flying and beginners.' },
                { name: '2.5" FPV Drone', desc: 'Highly agile platform suitable for tight spaces and controlled environments.' },
                { name: '3.5" Cinewhoop', desc: 'Ducted propeller design for smooth cinematic footage with enhanced safety.' },
                { name: '5" FPV Drone', desc: 'Industry-standard for freestyle flying and racing.' },
                { name: '7" FPV Drone', desc: 'Long-range drone designed for endurance and exploration missions.' },
                { name: '10" FPV Drone', desc: 'Heavy-duty platform supporting larger batteries and payloads.' },
                { name: '13" FPV Drone', desc: 'Industrial-grade built for extended flight time and specialized operations.' }
              ].map((fpv, i) => (
                <div key={i} className="bg-[#0a0f16] border border-[#f97316]/20 p-4 rounded-xl flex flex-col justify-center hover:border-[#f97316]/50 transition-colors group">
                  <span className="text-[#f97316] font-bold text-[14px] leading-tight mb-2 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.4)] transition-all">{fpv.name}</span>
                  <p className="text-[#8e9bb0] text-[12px] leading-snug">{fpv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        }
        tags={["Indoor Flying", "Cinematic Filming", "Freestyle & Racing", "Industrial Inspection"]}
      />

      {/* 5. Batteries & Power Systems */}
      <ProductSection 
        id="batteries"
        themeColor="#ec4899"
        imageSide="left"
        imagePath="/products/batteries.png"
        eyebrow={{ icon: Battery, text: "Powering Innovation" }}
        title="Batteries & Power Systems"
        description="We offer high-performance Li-Ion batteries designed for reliability, safety, and consistent power delivery across all drone platforms. Capacity, C-rating, and connector type can be customized to match specific drone and mission requirements."
        features={[
          "Custom capacity & C-rating",
          "Li-Ion variants from 1S to 8S",
          "Safety-tested systems",
          "Connector type customization"
        ]}
        customGrid={
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-white font-bold tracking-wide mb-2 text-lg">Battery Variants</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: '1S Li-Ion (1P)', desc: 'For micro drones, indoor FPV, and educational kits.' },
                { name: '2S Li-Ion (2P)', desc: 'Balanced power for small FPV drones and training platforms.' },
                { name: '3S Li-Ion (3P)', desc: 'Reliable power for beginner to mid-range FPV drones.' },
                { name: '4S Li-Ion (4S 2P / 3P)', desc: 'High-performance for professional FPV and cinematic use.' },
                { name: '6S Li-Ion (6S 2P / 3P / 4P)', desc: 'Professional and industrial-grade for high-power applications.' },
                { name: '8S Li-Ion (8S 2P)', desc: 'For advanced pilots requiring higher thrust and efficiency.' }
              ].map((bat, i) => (
                <div key={i} className="bg-[#0a0f16] border border-[#ec4899]/20 p-5 rounded-xl flex flex-col justify-center hover:border-[#ec4899]/50 transition-colors group">
                  <span className="text-[#ec4899] font-bold text-[14px] leading-tight mb-2 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.4)] transition-all">{bat.name}</span>
                  <p className="text-[#8e9bb0] text-[12px] leading-snug">{bat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        }
        tags={["Micro FPV Drones", "Training Platforms", "Industrial Drones", "Heavy-Duty Platforms"]}
      />

      {/* Elevate Operations CTA */}
      <section className="w-full flex items-center justify-center pt-10 pb-32 px-4 relative z-20">
        <div className="max-w-4xl w-full bg-[#0a0f16] border border-white/5 rounded-[32px] p-12 md:p-20 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-[#00e5ff] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
          
          <Shield className="w-12 h-12 text-[#00e5ff] mb-8" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-md max-w-2xl">
            Ready to Elevate Your <br className="hidden md:block"/> Operations?
          </h2>
          <p className="text-[#8e9bb0] text-[16px] leading-relaxed mb-10 font-medium">
            Partner with YuDru for indigenous drone solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-white"
            >
              Get in Touch →
            </a>
            <Link 
              href="/r-and-d" 
              className="px-8 py-3 rounded-xl bg-transparent border border-[#00e5ff]/40 text-[#00e5ff] font-bold text-[15px] transition-all hover:bg-[#00e5ff]/5"
            >
              Explore R&D
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
