import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';

const steps = [
  {
    index: "01",
    phase: "Discovery",
    title: "Auditoría & Estrategia",
    description: "Desmenuzamos tu operación actual. Identificamos los cuellos de botella exactos y trazamos el plan arquitectónico para resolverlos con precisión quirúrgica.",
    duration: "1 – 3 días",
    deliverables: ["Análisis de competencia", "Arquitectura de información", "Roadmap técnico"],
  },
  {
    index: "02",
    phase: "Engineering",
    title: "Desarrollo Nativo",
    description: "Escribimos código escalable. Sin plantillas infladas. Sistemas robustos en React y Node diseñados para soportar picos de tráfico y transacciones masivas.",
    duration: "2 – 6 semanas",
    deliverables: ["Código fuente limpio", "Pruebas de rendimiento", "Integración CRM / APIs"],
  },
  {
    index: "03",
    phase: "Scale",
    title: "Lanzamiento & Vuelo",
    description: "Despliegue sin fricciones. Monitoreamos en tiempo real, capacitamos a tu equipo y nos aseguramos de que el sistema genere retorno desde el día uno.",
    duration: "Ongoing",
    deliverables: ["Deploy en producción", "Monitoreo 24 / 7", "Soporte & iteración"],
  }
];

const StepCard = ({ step, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const isLast = index === steps.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden transition-colors duration-500 hover:bg-white/[0.03] ${
        !isLast ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
      }`}
    >
      {/* Cursor light */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(0,71,255,0.07), transparent 70%)`
        }}
      />

      {/* Blue bottom border reveal */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0047FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

      {/* Large background number */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden translate-y-4 translate-x-4">
        <motion.div
          animate={isHovered ? { opacity: 0.06 } : { opacity: 0.03 }}
          transition={{ duration: 0.5 }}
          className="text-[10rem] md:text-[14rem] font-black tracking-tighter text-white leading-none"
        >
          {step.index}
        </motion.div>
      </div>

      <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">

        {/* Phase label */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-600">
            // {step.phase}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-gray-700 border border-white/10 px-2 py-1 group-hover:border-white/20 group-hover:text-gray-500 transition-colors duration-300">
            {step.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5 group-hover:text-white transition-colors">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 group-hover:text-gray-300 font-light leading-relaxed text-base transition-colors duration-500 mb-10">
          {step.description}
        </p>

        {/* Deliverables */}
        <div className="mt-auto pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-700 mb-4">
            Entregables
          </p>
          <ul className="flex flex-col gap-2">
            {step.deliverables.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 + i * 0.07 }}
                className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-400 transition-colors duration-300"
              >
                <span className="w-1 h-1 rounded-full bg-[#0047FF] shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export const FortexProcess = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] relative border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-gray-600" />
              Metodología
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter uppercase leading-none"
            >
              Cómo <br className="hidden md:block" /> lo hacemos.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 font-mono text-xs uppercase tracking-widest max-w-xs text-right hidden md:block"
          >
            Tres fases. Sin rodeos. <br /> Sin tiempos muertos.
          </motion.p>
        </div>

        {/* Progress connector — desktop only */}
        <div className="hidden md:flex items-center gap-0 mb-0 px-0">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="w-2 h-2 rounded-full border border-[#0047FF] bg-[#0047FF] shrink-0"
              />
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                  className="flex-1 h-px bg-[#0047FF]/30 origin-left"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          <p className="text-gray-600 font-light text-sm">
            ¿Listo para empezar? El primer paso es una conversación sin compromiso.
          </p>
          <a
            href="/contacto"
            className="shrink-0 inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Iniciar Discovery
            <span className="text-base leading-none">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
