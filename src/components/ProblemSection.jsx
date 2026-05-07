import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const problems = [
  {
    number: "01",
    title: "Dependencia Humana",
    description: "La operación funciona gracias a personas específicas, no a un sistema. Si ellos faltan, el conocimiento fundacional se pierde.",
    stat: "73%",
    statLabel: "de las Pymes dependen de 1-2 personas clave"
  },
  {
    number: "02",
    title: "Ceguera Táctica",
    description: "Las decisiones se toman tarde, basadas en relatos anecdóticos en lugar de métricas crudas y reales de la operación inmediata.",
    stat: "48h",
    statLabel: "promedio para detectar un problema operativo"
  },
  {
    number: "03",
    title: "Sin Trazabilidad",
    description: "Lo que pasó se 'explica' pero jamás se prueba. No existe un registro inmutable de acciones, tiempo y responsabilidades.",
    stat: "0%",
    statLabel: "de registro verificable en operaciones no digitalizadas"
  },
  {
    number: "04",
    title: "Escalar es Caos",
    description: "Crecer significa inflar el desorden. Más clientes y equipos no multiplican la eficiencia, multiplican el costo operativo.",
    stat: "3x",
    statLabel: "incremento en errores al duplicar el volumen"
  }
];

const ProblemCard = ({ problem, index }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const isLast = index === problems.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden group transition-colors duration-500 hover:bg-foreground/[0.03] flex flex-col justify-between min-h-[320px] p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-foreground/10 ${isLast ? 'border-b-0 border-r-0' : ''}`}
    >
      {/* Cursor light — red tint */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(220,38,38,0.07), transparent 70%)`
        }}
      />

      {/* Red bottom border reveal */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

      {/* Top: number */}
      <div className="font-mono text-3xl font-bold text-foreground/10 group-hover:text-red-600/40 transition-colors duration-300 mb-8 select-none">
        //{problem.number}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-foreground uppercase tracking-tight group-hover:text-red-400 transition-colors duration-300">
          {problem.title}
        </h3>
        <p className="text-muted group-hover:text-foreground font-light leading-relaxed transition-colors duration-500 text-sm">
          {problem.description}
        </p>
      </div>

      {/* Stat */}
      <div className="mt-8 pt-6 border-t border-foreground/5 group-hover:border-foreground/10 transition-colors duration-300">
        <p className="text-3xl font-black text-foreground tracking-tighter leading-none">
          {problem.stat}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-muted mt-1 transition-colors duration-300 max-w-[160px]">
          {problem.statLabel}
        </p>
      </div>
    </motion.div>
  );
};

export const ProblemSection = () => {
  return (
    <section id="problematica" className="py-24 md:py-40 bg-background relative border-t border-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-red-600" />
              Diagnóstico
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground leading-none tracking-tighter uppercase"
            >
              La fractura <br />
              <span className="text-red-500">operativa.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md pt-4"
          >
            <p className="text-muted text-lg font-light">
              La mayoría de las operaciones complejas no colapsan por falta de tecnología. Colapsan por desorden estructural, asimetría de información y dependencia de héroes individuales.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground/10">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
