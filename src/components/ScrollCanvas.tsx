"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";

const FRAME_COUNT = 240; // Full 240 frame sequence restored

function pad(num: number, size: number) {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Create a transform that maps scroll 0-1 to frame index 1-240
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let localCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/Black_drone_frames/ezgif-frame-${pad(i, 3)}.jpg`;
      const handleLoad = () => {
        localCount++;
        // Throttle state updates for performance
        if (localCount % 10 === 0 || localCount === FRAME_COUNT) {
          setLoadedCount(localCount);
        }
        // If first image is loaded, draw it to initialize canvas
        if (i === 1) {
          drawFrame(1, loadedImages);
        }
      };
      img.onload = handleLoad;
      img.onerror = handleLoad; // Safety escape for corrupt frames
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number, imgArray: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // alpha: false can improve performance slightly when we are drawing a fully opaque background
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Use specific index image (0-indexed array)
    const img = imgArray[index - 1];
    if (!img || !img.complete) return;

    // Canvas sizing based on window and devicePixelRatio for retina quality
    const dpr = window.devicePixelRatio || 1;
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    
    // Scale context to match DPR
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Calculate aspect ratios & dimensions to draw properly (Object-fit bounds)
    const imgRatio = img.width / img.height;
    const windowRatio = cw / ch;
    
    let drawW, drawH, drawX, drawY;

    // Ultra-High Quality PNGs can safely be scaled to cover the entire viewport without pixelation
    if (windowRatio > imgRatio) {
      drawW = cw;
      drawH = img.height * (cw / img.width);
    } else {
      drawH = ch;
      drawW = img.width * (ch / img.height);
    }

    drawX = (cw - drawW) / 2;
    drawY = (ch - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.floor(latest);
    if (images.length > 0) {
      drawFrame(currentFrame, images);
    }
  });

  // Handle resize elegantly
  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.floor(frameIndex.get());
      if (images.length > 0) {
        drawFrame(currentFrame, images);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <>


      <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden bg-black">
        {/* width and height styled to 100% so it fits screen, internal res is higher due to dpr */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
          style={{ filter: "contrast(1.4) saturate(1.15) brightness(0.9)" }} 
        />
        {/* Vignette overlay to ensure absolute seamless edge blending into black and improve text readability */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_60%,#000000_100%)]" />
      </div>
    </>
  );
}
