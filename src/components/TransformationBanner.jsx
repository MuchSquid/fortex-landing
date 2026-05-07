import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '10x', label: 'Reducción de errores operativos' },
  { value: '48h', label: 'Tiempo promedio de implementación piloto' },
  { value: '100%', label: 'Trazabilidad desde el día uno' },
];

export const TransformationBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="py-32 bg-background border-t border-foreground/10 relative overflow-hidden">
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(220,38,38,0.06),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-foreground/10 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 md:p-10 text-center ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-foreground/10' : ''}`}
            >
              <p className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted max-w-[140px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border border-foreground/20 bg-surface p-12 md:p-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs text-muted uppercase tracking-widest mb-10"
          >
            // Transformación Operativa Digital
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none mb-8"
          >
            Del caos, <br className="hidden md:block" />
            <span className="text-muted">a la máquina.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted font-light max-w-2xl mb-16 leading-relaxed"
          >
            Implementamos infraestructura técnica que destruye la dependencia humana y te devuelve el control frío de tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="/demo"
              className="px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-foreground/80 transition-colors"
            >
              Ejecutar Diagnóstico
            </a>
            <a
              href="/contacto"
              className="px-10 py-5 bg-transparent border border-foreground/20 text-foreground font-bold uppercase tracking-widest text-sm hover:border-foreground transition-colors"
            >
              Contactar Ingeniería
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
