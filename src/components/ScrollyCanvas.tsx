"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 240; 

interface ScrollyCanvasProps {
  children?: (progress: MotionValue<number>) => React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const SHOW_THRESHOLD = 20;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      
      // Try WebP first, fall back to PNG if missing
      img.src = `/sequence/ezgif-frame-${paddedIndex}.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= SHOW_THRESHOLD && !imagesLoaded) {
          setImagesLoaded(true);
        }
      };
      
      img.onerror = () => {
        // If webp failed, try falling back to png
        if (img.src.includes(".webp")) {
          img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;
          return;
        }

        loadedCount++;
        if (loadedCount >= SHOW_THRESHOLD && !imagesLoaded) {
          setImagesLoaded(true);
        }
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawImage = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !images[index]) return;

    const img = images[index];
    
    // Avoid drawing if the image failed to load
    if (!img.complete || img.naturalHeight === 0) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw image with cover logic
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (imagesLoaded) {
      drawImage(Math.round(latest));
    }
  });

  // Initial draw and handle resize
  useEffect(() => {
    if (imagesLoaded) {
      drawImage(0);
      
      const handleResize = () => drawImage(Math.round(currentIndex.get()));
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [imagesLoaded, currentIndex, drawImage]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full block"
        />
        {/* Render overlay children on top of the canvas */}
        <div className="absolute inset-0 z-10">
          {children && children(scrollYProgress)}
        </div>
      </div>
    </div>
  );
}
