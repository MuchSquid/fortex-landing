import React from 'react';
import { motion } from 'framer-motion';

export const ProblemSection = () => {
  const problems = [
    {
      number: "01",
      title: "Dependencia Humana",
      description: "La operación funciona gracias a personas específicas crónicas, no a un sistema. Si ellos faltan, el conocimiento fundacional se pierde."
    },
    {
      number: "02",
      title: "Ceguera Táctica",
      description: "Las decisiones se toman tarde, basadas en relatos anecdóticos en lugar de métricas crudas y reales de la operación inmediata."
    },
    {
      number: "03",
      title: "Sin Trazabilidad",
      description: "Lo que pasó se 'explica' pero jamás se prueba. No existe un registro inmutable de acciones, tiempo y responsabilidades."
    },
    {
      number: "04",
      title: "Escalar es Caos",
      description: "Crecer significa inflar el desorden. Más clientes y equipos no multiplican la eficiencia, multiplican el costo operativo."
    }
  ];

  return (
    <section id="problematica" className="py-24 md:py-40 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-red-600"></span>
              Diagnóstico
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tighter uppercase">
              La fractura <br />
              <span className="text-red-500">operativa.</span>
            </h2>
          </div>
          <div className="max-w-md pt-4">
            <p className="text-gray-400 text-lg font-light">
              La mayoría de las operaciones complejas no colapsan por falta de tecnología. Colapsan por desorden estructural, asimetría de información y dependencia de héroes individuales.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 bg-transparent border-b lg:border-b-0 lg:border-r border-white/10 last:border-b-0 last:border-r-0 hover:bg-white/5 transition-colors duration-300 group flex flex-col justify-between min-h-[320px]"
            >
              <div className="text-4xl font-bold font-mono text-white/20 group-hover:text-red-500 transition-colors duration-300 mb-8">
                //{problem.number}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-red-400 transition-colors">{problem.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
