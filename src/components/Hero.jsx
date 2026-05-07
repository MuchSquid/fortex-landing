import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const backgroundGradient = useMotionTemplate`radial-gradient(circle 700px at calc(${mouseX} * 100%) calc(${mouseY} * 100%), rgba(220,38,38,0.08), transparent 80%)`;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Cursor light — red tint for OneTex */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: backgroundGradient }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-12">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest"
          >
            <span className="w-8 h-px bg-red-600" />
            Operate OneTex
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-1 w-full">
            {[
              { text: 'Del Caos,', color: 'text-foreground', delay: 0.1 },
              { text: 'al Control', color: 'text-red-500', delay: 0.25 },
              { text: 'Absoluto.', color: 'text-foreground', delay: 0.4 },
            ].map(({ text, color, delay }) => (
              <motion.h1
                key={text}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
                className={`text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter ${color} leading-[0.9] text-left`}
              >
                {text}
              </motion.h1>
            ))}
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8 border-t border-foreground/10 pt-8"
          >
            <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-xl">
              Diseñamos e implementamos infraestructura operativa que elimina la dependencia humana y te devuelve el control frío de tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start md:justify-end">
              <a
                href="/demo"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-foreground/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </a>

              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground/20 text-foreground font-bold text-sm uppercase tracking-widest hover:border-foreground transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="w-[30px] h-[46px] border border-foreground/20 rounded-full flex justify-center p-2 pt-2.5 bg-background/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
