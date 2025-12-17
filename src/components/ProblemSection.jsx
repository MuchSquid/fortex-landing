import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Database, CloudOff } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Dependencia de Personas",
      description: "La operación funciona gracias a personas específicas, no a un sistema. Si ellos faltan, el conocimiento se pierde."
    },
    {
      icon: Clock,
      title: "Decisiones Tardías",
      description: "Las decisiones se toman tarde y a ciegas, basadas en relatos anecdóticos en lugar de datos reales y medibles."
    },
    {
      icon: Database,
      title: "Sin Trazabilidad Real",
      description: "Lo que pasó se 'explica' pero no se prueba. No existe un registro inmutable de acciones y responsabilidades."
    },
    {
      icon: CloudOff,
      title: "Escalar es Caos",
      description: "Crecer significa aumentar el desorden. Más clientes y equipos multiplican los problemas en lugar de la eficiencia."
    }
  ];

  return (
    <section id="problematica" className="py-20 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 font-bold tracking-wider uppercase text-sm">Problemática</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            La mayoría de las operaciones no fallan por tecnología. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">Fallan por desorden.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Información dispersa y falta de visibilidad terminan costando tiempo, dinero y control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-900/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
