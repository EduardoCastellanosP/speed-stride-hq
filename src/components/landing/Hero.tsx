"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { HERO } from "@/config/site";

export function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      
      {/* 1. IMAGEN DE RESPALDO (POSTER PERSONALIZADO) */}
      {/* Se muestra al instante y se desvanece suavemente cuando el video arranca */}
      <img
        src={HERO.posterUrl as string}
        alt="Hero Background"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out z-10 ${
          isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* 2. VIDEO DE FONDO */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src={HERO.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlay={() => setIsVideoReady(true)}
      />

      {/* 3. CAPAS DE DISEÑO Y OSCURECIMIENTO */}
      <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* 4. CONTENIDO DE LA HERO */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-5 pt-32 pb-24 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
            {HERO.ratingText}
          </span>
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {HERO.title}
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          {HERO.subtitle}
        </p>

        <a
          href={HERO.href}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-[0.1em] text-accent-foreground transition-transform duration-300 hover:scale-105"
        >
          {HERO.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}