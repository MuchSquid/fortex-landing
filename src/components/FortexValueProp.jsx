import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    number: "01.",
    title: "Acelera Procesos",
    description: "Eliminamos tareas manuales y cuellos de botella. Automatizamos el caos operativo para que tu equipo aporte valor real.",
  },
  {
    number: "02.",
    title: "Escala Fuerte",
    description: "Crecer con hojas de cálculo no es escalable. Construimos infraestructura digital para manejar 10x más carga sin romperse.",
  },
  {
    number: "03.",
    title: "Max. Ventas",
    description: "Desde E-Commerces optimizados hasta integraciones CRM. Diseñamos ecosistemas digitales enfocados exclusivamente en conversión.",
  }
];

export const FortexValueProp = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-32 bg-black relative border-t border-white/10">
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Header left */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none"
            >
              Hardware invisible. <br />
              <span className="text-gray-600">Impacto visible.</span>
            </motion.h2>
          </div>

          {/* Header right */}
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 font-light"
            >
              No vendemos código abstracto. Diseñamos e implementamos sistemas interactivos radicalmente enfocados en resolver los desafíos tácticos de rentabilidad y escala corporativa.
            </motion.p>
          </div>

        </div>

        {/* Minimalist Grid */}
        <div className="grid md:grid-cols-3 gap-y-16 gap-x-8 border-t border-white/10 pt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group flex flex-col"
            >
              {/* Typography Number instead of Icon */}
              <div className="text-8xl md:text-9xl font-bold tracking-tighter text-white/5 select-none mb-6 group-hover:text-white/20 transition-colors duration-500">
                {benefit.number}
              </div>
              
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
