import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: "Cimientos Web",
    desc: "Landing pages funcionales y corporativas construidas en Astro.",
    tags: ["Astro", "Tailwind", "SEO"],
    span: "col-span-1 md:col-span-4"
  },
  {
    title: "E-Commerce",
    desc: "Tiendas online veloces, enfocadas en checkout sin fricción y retención.",
    tags: ["Shopify", "React", "Next.js"],
    span: "col-span-1 md:col-span-8"
  },
  {
    title: "Software a Medida",
    desc: "Sistemas internos complejos: CRMs, ERPs, paneles administrativos y automatización.",
    tags: ["Node.js", "PostgreSQL", "React"],
    span: "col-span-1 md:col-span-12"
  }
];

export const FortexServices = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-32 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-gray-600"></span>
              Capacidades
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none"
            >
              Arsenal <br /> Técnico.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
             <a href="/contacto" className="text-gray-400 font-mono uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
               Ver portfolio →
             </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`${service.span} bg-transparent border border-white/10 p-10 md:p-12 hover:bg-white/5 transition-colors duration-500 group flex flex-col justify-between min-h-[300px]`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">{service.title}</h3>
              
              <div className="mt-auto">
                <p className="text-gray-400 font-light text-lg mb-8 max-w-md group-hover:text-white transition-colors duration-500">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 font-mono text-xs uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
