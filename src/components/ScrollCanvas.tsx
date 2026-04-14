"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

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

  // Create a transform that maps scroll 0-1 to frame index 1-240
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/4k_frames/ezgif-frame-${pad(i, 3)}.jpg`;
      const handleLoad = () => {
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

    // Restrict extreme DPR scaling on modern Retina screens (which causes 4K -> 12K canvas drawing lag)
    const rawDpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const dpr = Math.min(rawDpr, 1.5); // Cap at 1.5 to eliminate rendering bottlenecks on 3x screens while keeping clarity
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    canvas.width = cw * dpr;
    canvas.height = ch * dpr;

    // Scale context to match DPR
    ctx.scale(dpr, dpr);
    
    // Performance: Drop "high" image smoothing to standard. The difference is imperceptible on motion but saves huge GPU cycles
    ctx.imageSmoothingEnabled = true;

    // Calculate aspect ratios & dimensions to draw properly (Object-fit bounds)
    const imgRatio = img.width / img.height;
    const windowRatio = cw / ch;

    // Ultra-High Quality PNGs can safely be scaled to cover the entire viewport without pixelation
    const drawW = windowRatio > imgRatio ? cw : img.width * (ch / img.height);
    const drawH = windowRatio > imgRatio ? img.height * (cw / img.width) : ch;

    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  const rafRef = useRef<number | null>(null);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.floor(latest);
    if (images.length > 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrame, images);
      });
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
          // Shifted heavy canvas API filters -> native CSS compositor filters. Vastly more performant!
          className="w-full h-full block contrast-[1.1] brightness-100 saturate-[0.8] will-change-transform transform-gpu"
        />
        {/* Vignette overlay to ensure absolute seamless edge blending into black and improve text readability */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.7)_60%,#000000_100%)]" />
        {/* Film grain noise overlay removed to drastically improve framerates on lower-end machines */}
      </div>
    </>
  );
}
