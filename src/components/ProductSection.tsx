import React from "react";
import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface ProductSectionProps {
  id: string;
  eyebrow: { icon: LucideIcon; text: string };
  title: string;
  description: string;
  features: string[];
  tags?: string[];
  buttons?: { text: string; primary?: boolean }[];
  imagePath: string;
  imageSide?: "left" | "right";
  themeColor: string; // e.g. #00e5ff
  customGrid?: React.ReactNode;
}

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
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(20px)", rotateX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    rotateX: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function ProductSection({
  id,
  eyebrow,
  title,
  description,
  features,
  tags = [],
  imagePath,
  imageSide = "left",
  themeColor,
  customGrid,
}: ProductSectionProps) {
  
  const contentNode = (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col xl:w-1/2 justify-center"
    >
      
      {/* Eyebrow Label */}
      <motion.div variants={itemVariants} 
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 w-fit mb-6"
        style={{ color: themeColor }}
      >
        <eyebrow.icon className="w-4 h-4" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{eyebrow.text}</span>
      </motion.div>

      {/* Heading */}
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-md">
        {title.split(' - ').map((part, idx, arr) => (
          <React.Fragment key={idx}>
            {part}
            {idx < arr.length - 1 && (
              <> <span className="opacity-40">-</span> <br className="hidden md:block" /> </>
            )}
          </React.Fragment>
        ))}
      </motion.h2>

      {/* Description */}
      <motion.p variants={itemVariants} className="text-[#8e9bb0] text-[16px] leading-relaxed mb-10 max-w-xl font-medium">
        {description}
      </motion.p>

      {/* Feature Bullet Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {features.map((feat, idx) => (
          <div 
            key={idx}
            className="flex items-start gap-4 px-5 py-4 rounded-xl bg-[#0a0f16] border border-white/5 shadow-md flex-1 hover:border-white/10 transition-colors group"
          >
            <div 
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"
              style={{ backgroundColor: themeColor, boxShadow: `0 0 10px ${themeColor}` }}
              aria-hidden="true"
            />
            <span className="text-white/80 text-[13px] font-semibold leading-snug">{feat}</span>
          </div>
        ))}
      </motion.div>

      {/* Optional Sub-Grid Plugin (for Variants/Customizations) */}
      {customGrid && (
        <motion.div variants={itemVariants} className="mb-10 w-full mt-4">
          {customGrid}
        </motion.div>
      )}

      {/* Tags Pills */}
      {tags.length > 0 && (
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-4 py-1.5 rounded-full border bg-transparent text-[12px] font-bold tracking-wide shadow-sm"
              style={{ borderColor: `${themeColor}33`, color: themeColor }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  const imageNode = (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={imageVariants}
      className="flex xl:w-1/2 w-full items-center justify-center relative"
      style={{ perspective: 1000 }} // required for rotateX 3D effect
    >
      {/* Immersive glow behind the image - it breathes! */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] blur-[120px] rounded-full pointer-events-none z-0"
        style={{ backgroundColor: themeColor }}
      />
      
      {/* 3D Object Frame */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-[600px] aspect-square rounded-[32px] overflow-hidden bg-[#0a0f16] border border-white/5 z-10 shadow-2xl"
      >
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className="object-cover"
        />
        {/* Floating icon badge on image */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: 'rgba(5, 11, 20, 0.6)' }}
        >
          <eyebrow.icon className="w-5 h-5" style={{ color: themeColor }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id={id} className="w-full min-h-screen py-32 flex items-center border-b border-white/[0.02]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full flex flex-col xl:flex-row gap-20 xl:gap-24">
        {imageSide === "left" ? (
          <>
            {imageNode}
            {contentNode}
          </>
        ) : (
          <>
            {contentNode}
            {imageNode}
          </>
        )}
      </div>
    </section>
  );
}
