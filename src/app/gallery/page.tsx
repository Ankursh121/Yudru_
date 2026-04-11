"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Drones", "Components", "Training", "Labs", "Events"];

const rawImages = [
  { src: "photo_2024-09-07_10-31-25.jpg", title: "Flight Controller Integration", category: "Components" },
  { src: "photo_2025-03-16_23-31-40.jpg", title: "Bionic Prosthesis Prototype", category: "Labs" },
  { src: "photo_2025-06-03_08-36-43.jpg", title: "Telemetry Ground Station", category: "Training" },
  { src: "photo_2025-06-03_08-36-45.jpg", title: "Drone Assembly Workshop", category: "Training" },
  { src: "photo_2025-06-03_08-36-50.jpg", title: "Indoor Flight Dynamics Demo", category: "Training" },
  { src: "photo_2025-06-03_08-36-53.jpg", title: "Aerodynamic Frame Inspection", category: "Labs" },
  { src: "photo_2025-09-17_23-04-57.jpg", title: "Outdoor FPV Piloting", category: "Events" },
  { src: "photo_2025-09-17_23-12-20.jpg", title: "Innovation Achievement Award", category: "Events" },
  { src: "photo_2025-09-17_23-12-22.jpg", title: "Student Pilot Program", category: "Training" },
  { src: "photo_2025-09-17_23-12-24.jpg", title: "Hardware Integration Testing", category: "Labs" },
  { src: "photo_2025-09-17_23-12-25.jpg", title: "STEM Aerial Robotics", category: "Training" },
  { src: "photo_2026-02-27_16-45-09.jpg", title: "Outdoor UAV Field Test", category: "Drones" },
  { src: "photo_2026-02-27_16-49-11.jpg", title: "Carbon Fiber Micro-Frame", category: "Components" },
  { src: "photo_2026-02-27_16-49-12.jpg", title: "Industrial Quadcopter Chassis", category: "Drones" },
  { src: "photo_2026-02-27_16-49-14.jpg", title: "Cinewhoop Prototype", category: "Drones" },
  { src: "photo_2026-04-11_17-32-20.jpg", title: "UAV Architecture Demo", category: "Labs" },
  { src: "photo_2026-04-11_17-32-21.jpg", title: "Circuit Integration Workshop", category: "Training" },
  { src: "photo_2026-04-11_17-32-22.jpg", title: "Aviation Principles Lecture", category: "Training" },
  { src: "photo_2026-04-11_17-32-24.jpg", title: "Youth Tech Initiative", category: "Events" },
  { src: "photo_2026-04-11_17-32-25.jpg", title: "Engineering Outreach Panel", category: "Events" }
];

const galleryItems = rawImages.map((item) => ({
  id: item.src,
  src: `/Gallery/${item.src}`,
  title: item.title,
  category: item.category
}));

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#060a11] text-white flex flex-col relative overflow-hidden">
      {/* Ambient background matching theme */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#00e5ff]/5 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Subtle Star Particles using a repeating radial gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #00e5ff 1px, transparent 1px)', backgroundSize: '150px 150px' }}
      />
      
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              Our Work in Action
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-zinc-400 mb-12"
          >
            Innovation. Training. Engineering. Impact.
          </motion.p>

          {/* Navigation Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-8 mb-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 min-h-[44px] md:px-8 rounded-full text-[15px] outline-none font-bold transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-[#00e5ff] text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                    : "bg-[#0a0f18] border border-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          
          {/* Items Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-500 text-sm mt-4 tracking-wide font-medium"
          >
            Showing {filteredItems.length} items
          </motion.div>
        </div>

        {/* Layout Engine: Carousel for 'All', Masonry for Filters */}
        {activeTab === "All" ? (
          <div className="w-full relative py-8 overflow-hidden group">
            {/* Infinite Horizontal Carousel */}
            {filteredItems.length > 0 ? (
              <motion.div
                className="flex gap-4 sm:gap-6 w-max"
                animate={{ 
                  x: ["0%", "-50%"]
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: Math.max(25, filteredItems.length * 12),
                }}
              >
                {[...filteredItems, ...filteredItems].map((item, i) => (
                  <div
                    key={`carousel-${item.id}-${i}`}
                    className="relative flex-none w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0f18] hover:border-[#00e5ff]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 transform md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_rgba(0,229,255,0.2)]"
                  >
                    <img 
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e5ff] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
                      <span className="inline-block bg-[#00e5ff]/10 text-[#00e5ff] text-[10px] font-extrabold uppercase tracking-[0.2em] px-2 py-1 rounded backdrop-blur-sm mb-3 border border-[#00e5ff]/20">
                        {item.category}
                      </span>
                      <span className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block whitespace-normal">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="w-full text-center text-zinc-500 py-24">No items correspond to this filter.</div>
            )}
            
            {/* Cinematic Fade Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#060a11] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#060a11] to-transparent z-10 pointer-events-none" />
          </div>
        ) : (
          <div className="w-full mt-4">
            {/* Classic Masonry Layout for filtered views */}
            {filteredItems.length > 0 ? (
              <motion.div 
                layout
                className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, i) => (
                    <motion.div
                      key={`masonry-${item.id}`}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -8, 0] // Floating effect coordinates
                      }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 },
                        y: { 
                          repeat: Infinity, 
                          duration: 4, 
                          ease: "easeInOut",
                          delay: (i % 5) * 0.3 // Staggered floating
                        }
                      }}
                      className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-[#0a0f18] hover:border-[#00e5ff]/50 shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-shadow duration-500"
                    >
                      <img 
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 text-left pointer-events-none">
                        <span className="text-[#00e5ff] text-[10px] font-extrabold uppercase tracking-[0.2em] block mb-1.5 opacity-80">
                          {item.category}
                        </span>
                        <span className="text-white text-lg font-bold leading-tight drop-shadow-lg block pr-4">
                          {item.title}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="w-full text-center text-zinc-500 py-24">No items correspond to this filter.</div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
