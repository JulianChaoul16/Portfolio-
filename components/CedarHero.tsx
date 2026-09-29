"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CedarHero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!image || !canvas || !context || motion.matches) return;

    let frame = 0;
    let started = false;
    let disposed = false;
    const stop = () => {
      cancelAnimationFrame(frame);
      setAnimating(false);
    };
    const start = () => {
      if (started || disposed || motion.matches || !image.naturalWidth) return;
      started = true;
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const size = Math.max(16, Math.round(canvas.width / 36));
      const tiles: { x: number; y: number; delay: number }[] = [];
      for (let y = 0; y < canvas.height; y += size) {
        for (let x = 0; x < canvas.width; x += size) {
          const noise = ((x / size * 17 + y / size * 31) % 23) / 23;
          tiles.push({ x, y, delay: (1 - y / canvas.height) * 850 + noise * 420 });
        }
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      setAnimating(true);
      const began = performance.now();
      const draw = (now: number) => {
        const elapsed = now - began;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (const tile of tiles) {
          const progress = Math.min(1, Math.max(0, (elapsed - tile.delay) / 950));
          if (!progress) continue;
          const eased = 1 - Math.pow(1 - progress, 3);
          const width = Math.min(size, canvas.width - tile.x);
          const height = Math.min(size, canvas.height - tile.y);
          // Square fragments assemble from below, resolving into the original image.
          const offset = Math.round((1 - eased) * 160 / size) * size;
          context.globalAlpha = Math.min(1, progress * 2);
          context.drawImage(image, tile.x, tile.y, width, height,
            tile.x, tile.y + offset, width, height);
        }
        context.globalAlpha = 1;
        if (elapsed < 2250) frame = requestAnimationFrame(draw);
        else stop();
      };
      frame = requestAnimationFrame(draw);
    };
    image.addEventListener("load", start);
    motion.addEventListener("change", stop);
    if (image.complete) start();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      image.removeEventListener("load", start);
      motion.removeEventListener("change", stop);
    };
  }, []);

  return (
    <div className={`hub-cedar${animating ? " is-assembling" : ""}`} aria-hidden="true">
      <Image ref={imageRef} src="/trees/cedar-hero-generated.png" alt=""
        width={941} height={1672} sizes="(max-width: 760px) 100vw, 760px" priority />
      <canvas ref={canvasRef} />
    </div>
  );
}
