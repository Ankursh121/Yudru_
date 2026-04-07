"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, Target, Crosshair, Shield, Rocket, Users, 
  HelpCircle, ChevronDown
} from "lucide-react";

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
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants} className="mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 text-left rounded-xl border transition-all duration-300 ${isOpen ? 'bg-[#00e5ff]/5 border-[#00e5ff]/30' : 'bg-[#0a0f16] border-white/5 hover:border-white/10'}`}
      >
        <span className="text-white font-bold text-[15px]">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#00e5ff]' : 'text-white/50'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 text-[#8e9bb0] text-[15px] leading-relaxed border-x border-b border-transparent">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#03060a] relative flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-40 pb-20 flex flex-col items-center justify-center relative">
        {/* Glow */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#00e5ff] opacity-[0.03] blur-[150px] pointer-events-none rounded-full -translate-x-1/2" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-[1.05]">
              About <span className="text-[#00e5ff]">YuDru</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] font-medium leading-relaxed mb-6 max-w-lg">
              YuDru stands at the forefront of indigenous drone technology, delivering secure, innovative, and industry-leading solutions for monitoring, logistics, and industrial applications.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-lg">
              With a commitment to 100% non-Chinese components and transparent manufacturing, we provide compliant solutions suitable for government, enterprise, and research deployment.
            </motion.p>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[15px] shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:bg-white transition-all inline-flex items-center gap-2"
              >
                Get in Touch <span className="text-[18px] leading-none mb-[2px]">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex-1 w-full relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] ml-auto rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="/r-and-d/hero.png" 
                alt="Our high-tech drone laboratory" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-20 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Vision */}
            <motion.div variants={itemVariants} className="bg-[#0a0f16] border border-white/5 p-10 rounded-3xl hover:border-[#00e5ff]/30 transition-colors shadow-lg group">
              <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-white font-extrabold text-[24px] mb-4">Our Vision</h3>
              <p className="text-[#8e9bb0] text-[16px] leading-relaxed">
                To be the leading provider of indigenous drone technology solutions, empowering industry, research, and innovation with secure, world-class drone systems.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="bg-[#0a0f16] border border-white/5 p-10 rounded-3xl hover:border-[#00e5ff]/30 transition-colors shadow-lg group">
              <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20 text-[#00e5ff] group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-white font-extrabold text-[24px] mb-4">Our Mission</h3>
              <p className="text-[#8e9bb0] text-[16px] leading-relaxed">
                To design, develop, and deploy indigenous drone solutions with uncompromising quality, security, and innovation, while fostering talent through comprehensive training programs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-24 bg-[#050910] border-t border-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
              Core Values
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] md:text-[18px] max-w-2xl font-medium">
              The principles that guide everything we do at YuDru.
            </motion.p>
          </motion.div>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Crosshair, title: "Precision", desc: "Engineering excellence with attention to every detail in our drone solutions." },
              { icon: Shield, title: "Security", desc: "Indigenous, non-Chinese technology ensuring data sovereignty and compliance." },
              { icon: Rocket, title: "Innovation", desc: "Continuous R&D to push the boundaries of drone technology capabilities." },
              { icon: Users, title: "Collaboration", desc: "Partnering with institutions and industries for collective advancement." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#0a0f16] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#00e5ff]/30 transition-colors shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-[20px] bg-[#00e5ff] flex items-center justify-center mb-6 text-[#050b14] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <value.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-[20px] mb-3 tracking-tight relative z-10">{value.title}</h3>
                <p className="text-[#8e9bb0] text-[14px] leading-relaxed relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-32 border-t border-b border-white/[0.02] relative z-20">
        
        {/* Soft bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00e5ff] opacity-[0.02] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[900px] mx-auto px-6 w-full relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center justify-center text-center mb-20"
          >
            <motion.div variants={itemVariants} className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20 text-[#00e5ff]">
              <HelpCircle className="w-8 h-8" strokeWidth={2} />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              Frequently Asked <span className="text-[#00e5ff]">Questions</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[18px] max-w-2xl font-medium">
              Find answers to common questions about our products, services, and training programs.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col space-y-12"
          >
            {/* Category: Products & Solutions */}
            <div>
              <motion.h3 variants={itemVariants} className="text-[#00e5ff] font-bold text-[22px] mb-6 tracking-tight">Products & Solutions</motion.h3>
              <div className="flex flex-col">
                <AccordionItem 
                  question="What types of drones does YuDru offer?"
                  answer="YuDru offers a comprehensive range including Sports Drones, Monitoring Drones, Logistics Drones (5kg-100kg), Mapping Drones, and Battery/Power Systems. All our products are 100% non-Chinese and indigenously developed."
                />
                <AccordionItem 
                  question="Are your drones suitable for government and enterprise procurement?"
                  answer="Yes, all our drones are designed with industry-grade security and comply with government procurement standards. We use transparent sourcing and certified manufacturing processes."
                />
                <AccordionItem 
                  question="What is the payload capacity of your heavy-lift drones?"
                  answer="Our logistics drones range from 5kg to 100kg capacity, with modular payload systems that can be customized for delivery, disaster relief, and industrial transport applications."
                />
              </div>
            </div>

            {/* Category: Training & Certification */}
            <div>
              <motion.h3 variants={itemVariants} className="text-[#00e5ff] font-bold text-[22px] mb-6 tracking-tight">Training & Certification</motion.h3>
              <div className="flex flex-col">
                <AccordionItem 
                  question="What training programs do you offer?"
                  answer="We offer Drone Pilot Training (8 weeks), Industrial Operations (6 weeks), and Advanced Professional training (12 weeks). Each program includes hands-on flying, safety certification, and regulatory compliance."
                />
                <AccordionItem 
                  question="Do I get a certification after training?"
                  answer="Yes, upon successful completion of our training programs, you receive industry-recognized certification. Our courses also prepare you for DGCA licensing requirements."
                />
                <AccordionItem 
                  question="Are workshops available for beginners?"
                  answer="Absolutely! Our workshops cover drone assembly, flight controllers, and battery technology, designed for all skill levels from beginners to advanced professionals."
                />
              </div>
            </div>

            {/* Category: Services & Support */}
            <div>
              <motion.h3 variants={itemVariants} className="text-[#00e5ff] font-bold text-[22px] mb-6 tracking-tight">Services & Support</motion.h3>
              <div className="flex flex-col">
                <AccordionItem 
                  question="Do you offer drone repair and maintenance services?"
                  answer="Yes, we provide comprehensive repair and maintenance including diagnostics, motor/ESC repair, firmware updates, calibration, and Annual Maintenance Contracts (AMC)."
                />
                <AccordionItem 
                  question="Can you build custom drones for specific requirements?"
                  answer="Yes, our Custom Drone Development service covers requirement-based design, payload customization, software tuning, and complete prototyping and testing."
                />
                <AccordionItem 
                  question="What support is available after purchase?"
                  answer="We offer technical support, maintenance services, spare parts, firmware updates, and training for all our products. Extended warranty and AMC options are also available."
                />
              </div>
            </div>

            {/* Category: Compliance & Safety */}
            <div>
              <motion.h3 variants={itemVariants} className="text-[#00e5ff] font-bold text-[22px] mb-6 tracking-tight">Compliance & Safety</motion.h3>
              <div className="flex flex-col">
                <AccordionItem 
                  question="What certifications do your drones have?"
                  answer="Our products comply with ISO 9001:2015, DGCA regulations, and government procurement standards. We maintain transparent documentation for all certifications."
                />
                <AccordionItem 
                  question="How do you ensure non-Chinese components?"
                  answer="We maintain a strict, transparent supply chain with verified component sourcing. All materials are documented and auditable to ensure 100% non-Chinese manufacturing."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions? CTA */}
      <section className="w-full py-24 mb-10 flex items-center justify-center relative z-20 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="max-w-4xl w-full bg-[#0a0f16] border border-white/10 rounded-[32px] p-12 md:p-16 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/5 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-md relative z-10">
            Still Have Questions?
          </h2>
          <p className="text-[#8e9bb0] text-[16px] leading-relaxed mb-10 font-medium max-w-lg relative z-10">
            Our team is here to help. Reach out and we&apos;ll get back to you promptly.
          </p>

          <Link href="/contact" className="px-10 py-4 rounded-xl bg-[#00e5ff] text-[#050b14] font-bold text-[16px] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:bg-white relative z-10 flex items-center gap-2">
            Contact Us <span>→</span>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
