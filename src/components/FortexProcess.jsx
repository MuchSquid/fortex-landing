import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: "Discovery",
    title: "Auditoría & Estrategia",
    description: "Desmenuzamos tu operación actual. Identificamos los cuellos de botella exactos y trazamos el plan arquitectónico para resolverlos brutalmente rápido.",
  },
  {
    number: "Engineering",
    title: "Desarrollo Nativo",
    description: "Escribimos código escalable. Sin plantillas infladas. Sistemas robustos en React y Node diseñados para soportar picos de tráfico y transacciones masivas.",
  },
  {
    number: "Scale",
    title: "Lanzamiento & Vuelo",
    description: "Despliegue militar. Monitoreamos en tiempo real, entrenamos a tu equipo y nos aseguramos de que el software sea un activo que genere dinero de inmediato.",
  }
];

export const FortexProcess = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] relative border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8"
          >
            <span className="w-8 h-px bg-gray-600"></span>
            Metodología
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter uppercase leading-none"
          >
            Cómo <br className="hidden md:block"/> lo hacemos.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`p-10 md:p-14 group transition-colors hover:bg-white/5 ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
            >
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-16 group-hover:text-white transition-colors duration-300">
                // {step.number}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">{step.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
