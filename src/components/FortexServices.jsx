import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';

const services = [
  {
    number: "01",
    title: "Landing Pages",
    subtitle: "Cimientos Web",
    desc: "Páginas de aterrizaje y sitios corporativos construidos para velocidad extrema y conversión. Cada decisión de diseño tiene un propósito comercial.",
    metric: "< 1s",
    metricLabel: "Tiempo de carga",
    tags: ["Astro", "Tailwind", "SEO", "Core Web Vitals"],
    span: "col-span-1 md:col-span-5",
    tall: true,
  },
  {
    number: "02",
    title: "E-Commerce",
    subtitle: "Tiendas de Alto Ticket",
    desc: "Tiendas online de alto rendimiento con flujos de checkout sin fricción, diseñadas para retención y maximizar el valor del carrito.",
    metric: "+40%",
    metricLabel: "Tasa de conversión",
    tags: ["Shopify", "React", "Next.js", "Stripe"],
    span: "col-span-1 md:col-span-7",
    tall: true,
  },
  {
    number: "03",
    title: "Software a Medida",
    subtitle: "Sistemas Internos Complejos",
    desc: "CRMs, ERPs, dashboards administrativos y automatizaciones. Construimos la infraestructura digital interna que mueve tu operación a la siguiente escala.",
    metric: "∞",
    metricLabel: "Escalabilidad",
    tags: ["Node.js", "PostgreSQL", "React", "API REST"],
    span: "col-span-1 md:col-span-12",
    tall: false,
  }
];

const ServiceCard = ({ service, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const isFullWidth = service.span.includes('col-span-12');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${service.span} group relative border border-foreground/10 hover:border-foreground/20 transition-colors duration-500 overflow-hidden cursor-default`}
    >
      {/* Cursor light */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,71,255,0.08), transparent 70%)`
        }}
      />

      {/* Blue bottom border reveal */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0047FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

      <div className={`relative z-10 p-8 md:p-12 ${isFullWidth ? 'flex flex-col md:flex-row md:items-end md:justify-between gap-10' : 'flex flex-col justify-between min-h-[360px]'}`}>

        {/* Top: number + subtitle */}
        <div className={isFullWidth ? 'md:max-w-xl' : 'flex flex-col gap-6'}>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {service.number}
            </span>
            <motion.span
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs uppercase tracking-widest text-[#0047FF]"
            >
              Ver más →
            </motion.span>
          </div>

          {/* Title */}
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
              {service.subtitle}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-none group-hover:text-foreground transition-colors">
              {service.title}
            </h3>
          </div>

          {/* Desc */}
          <p className="text-muted group-hover:text-foreground transition-colors duration-500 font-light leading-relaxed text-base max-w-md">
            {service.desc}
          </p>

          {/* Tags */}
          {!isFullWidth && (
            <div className="flex flex-wrap gap-2 mt-6">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-foreground/10 group-hover:border-foreground/20 text-muted group-hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Metric + tags (right column for full-width, bottom for tall) */}
        <div className={`flex ${isFullWidth ? 'flex-col items-start md:items-end gap-6 shrink-0' : 'items-end justify-between mt-auto pt-6 border-t border-foreground/5 group-hover:border-foreground/10 transition-colors'}`}>
          <div className={isFullWidth ? 'text-right' : ''}>
            <p className={`text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none ${isFullWidth ? '' : ''}`}>
              {service.metric}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">
              {service.metricLabel}
            </p>
          </div>

          {isFullWidth && (
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-foreground/10 group-hover:border-foreground/20 text-muted group-hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const FortexServices = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="py-32 bg-background relative border-t border-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-muted" />
              Capacidades
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none"
            >
              Arsenal <br /> Técnico.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="/portafolio"
              className="text-muted font-mono uppercase tracking-widest text-sm hover:text-foreground transition-colors border-b border-muted hover:border-foreground pb-1"
            >
              Ver portafolio →
            </a>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
