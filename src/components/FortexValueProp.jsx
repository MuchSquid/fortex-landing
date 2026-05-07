import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';

const benefits = [
  {
    number: "01",
    title: "Ventas & Conversión",
    description: "Arquitecturas digitales hechas a medida. Colocamos los puntos de conversión donde la psicología de tu cliente toma decisiones de compra.",
  },
  {
    number: "02",
    title: "Velocidad Extrema",
    description: "Tu cliente valora su tiempo. Código limpio y nativo para carga instantánea, reduciendo rebotes y potenciando tu SEO de inmediato.",
  },
  {
    number: "03",
    title: "Escalabilidad CRM",
    description: "Para las ventas de hoy y la expansión de mañana. Estructuras integradas, listas para conectarse con CRMs y automatizaciones avanzadas.",
  }
];

const FeatureCard = ({ benefit, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col p-6 md:p-8 bg-transparent overflow-hidden border border-transparent"
    >
      {/* Dynamic Cursor Light Trail */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 71, 255, 0.1),
              transparent 80%
            )
          `
        }}
      />

      {/* Large Background Number */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden -mt-4 -mr-4 md:-mt-8 md:-mr-8">
        <motion.div 
          animate={isHovered ? { scale: 1.1, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-foreground"
        >
          {benefit.number}
        </motion.div>
      </div>
      
      {/* Interactive Content */}
      <div className="relative z-10 flex flex-col mt-auto pt-24 md:pt-32">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-foreground group-hover:text-[#0047FF] transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-muted leading-relaxed font-light">
          {benefit.description}
        </p>
      </div>

      {/* Base animated bottom border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 + 0.2 * index, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-foreground/10 origin-left"
      />
      
      {/* Hover animated bottom border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0047FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
    </motion.div>
  );
};

export const FortexValueProp = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background relative">
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20 lg:mb-24">
          
          {/* Header left */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase leading-none"
            >
              Máquinas de<br />
              <span className="text-muted">Conversión.</span>
            </motion.h2>
          </div>

          {/* Header right */}
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted font-light"
            >
              No hacemos folletos digitales. Diseñamos e implementamos plataformas web de altísima velocidad, enfocadas radicalmente en el retorno de inversión y la escalabilidad de tu negocio.
            </motion.p>
          </div>

        </div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 pt-8">
          {benefits.map((benefit, index) => (
            <FeatureCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
