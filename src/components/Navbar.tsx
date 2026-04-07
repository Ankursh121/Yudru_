"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "R&D", href: "/r-and-d" },
  { text: "Training", href: "/training" },
  { text: "Drone Labs", href: "/drone-labs" },
  { text: "Repair", href: "/repair" },
  { text: "Gallery", href: "/gallery" },
  { text: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[60] flex items-center justify-between px-6 md:px-8 py-4 bg-[#050b14]/40 backdrop-blur-3xl saturate-200 border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] rounded-2xl transition-all">
        <div className="text-xl font-bold tracking-tight text-white drop-shadow-sm z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Yudru Drone</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-8 text-[13px] tracking-widest font-bold uppercase">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.text} 
                href={item.href} 
                className={`relative group inline-block transition-all duration-300 hover:-translate-y-[2px] hover:scale-110 ${
                  isActive 
                    ? "text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" 
                    : "text-white/50 hover:text-[#00e5ff] hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]"
                }`}
              >
                {item.text}
                <span className={`absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#00e5ff] rounded-full shadow-[0_0_12px_rgba(0,229,255,1)] transition-transform duration-300 origin-center ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:flex px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] via-cyan-300 to-[#00e5ff] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#050b14] text-[14px] font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] tracking-wide z-50">
            Get in Touch
          </Link>
          
          {/* Mobile Menu Toggle button */}
          <button 
            className="xl:hidden text-white hover:text-[#00e5ff] transition-colors p-2 z-50 focus:outline-none drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Right-Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sliding Reference Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[75%] sm:w-[350px] z-[60] flex flex-col bg-[#050b14]/95 backdrop-blur-3xl saturate-200 border-l border-white/[0.08] shadow-[-20px_0_60px_rgba(0,0,0,0.8)] overflow-y-auto xl:hidden pb-8"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
                <span className="text-lg font-bold tracking-tight text-white">Menu</span>
                <button 
                  className="text-white hover:text-[#00e5ff] transition-colors p-2 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col w-full py-6 px-4 space-y-2">
                {NAV_LINKS.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      key={item.text}
                    >
                      <Link 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-left py-4 px-5 text-[15px] tracking-widest font-bold uppercase rounded-r-xl transition-all duration-300 ${
                          isActive 
                            ? "text-[#00e5ff] bg-[#00e5ff]/10 border-l-[3px] border-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" 
                            : "text-white/60 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent"
                        }`}
                      >
                        {item.text}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="w-full px-6 mt-auto shrink-0">
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] via-cyan-300 to-[#00e5ff] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#050b14] text-[15px] font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,229,255,0.4)] tracking-wide"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
