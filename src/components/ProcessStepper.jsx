import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stepsContent = {
  1: {
    title: "Análisis Clínico",
    description: "Evaluación sin filtros de la operación real. Identificación cruda de puntos de fricción, cuellos de botella y hemorragias de eficiencias.",
    detailsTitle: "Variables de Extracción:",
    details: ["Mapeo de procesos empíricos", "Trazabilidad de la información", "Riesgo de dependencia humana", "Cuantificación de pérdidas"]
  },
  2: {
    title: "Arquitectura Estratégica",
    description: "Diseño del sistema nervioso que reemplazará el caos. Definición de la infraestructura técnica necesaria para soportar la carga real.",
    detailsTitle: "Blueprint:",
    details: ["Diagrama de arquitectura", "Definición dura de KPIs", "Diseño de base de datos", "Modelo de permisos y roles"]
  },
  3: {
    title: "Ingeniería Iterativa",
    description: "Construcción por bloques funcionales. No mostramos powerpoints, ensamblamos código listo para ser sometido a estrés comercial.",
    detailsTitle: "Protocolo de desarrollo:",
    details: ["Ciclos cerrados", "Revisiones técnicas", "Staging de pruebas", "Feedback de usuario real"]
  },
  4: {
    title: "Piloto & Estrés",
    description: "Despliegue en entorno de alta presión controlado. Aislamiento de edge cases, validación de tolerancias y ajuste de UI/UX operativo.",
    detailsTitle: "Metricas de Piloto:",
    details: ["Carga de estrés de DB", "Navegabilidad de operarios", "Retención de datos", "Emisión de reportes"]
  },
  5: {
    title: "Rollout",
    description: "Transición oficial al nuevo sistema central. Retirada de sistemas legacy y operación end-to-end puramente en la plataforma Fortex.",
    detailsTitle: "Vector de Cierre:",
    details: ["Capacitación táctica", "Soporte de impacto", "Monitoreo", "Mantenimiento proactivo"]
  }
};

export const ProcessStepper = () => {
    const [activeStep, setActiveStep] = useState(1);
    const steps = [1, 2, 3, 4, 5];

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
                <div className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8">
                  <span className="w-8 h-px bg-gray-600"></span>
                  Génesis Operativa
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none">
                    Protocolo de <br/> Implementación.
                </h2>
            </div>
            <p className="text-gray-400 font-light max-w-sm text-lg">
                El software genérico se instala. Nuestras soluciones se operan, se estresan y se escalan metódicamente.
            </p>
        </div>

        {/* Brutalist Stepper Container */}
        <div className="grid lg:grid-cols-12 gap-0 border border-white/20 bg-black">
            
            {/* Left: Step Controls */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col">
                 <div className="font-mono text-xs text-gray-500 p-6 border-b border-white/10 uppercase tracking-widest">
                    Seleccione Fase
                 </div>
                 {steps.map((num) => (
                     <button 
                        key={num} 
                        onClick={() => setActiveStep(num)}
                        className={`flex items-center justify-between p-6 md:px-8 border-b border-white/10 last:border-b-0 transition-colors group ${
                            activeStep === num 
                            ? 'bg-white text-black' 
                            : 'bg-transparent text-gray-500 hover:bg-white/5 hover:text-white'
                        }`}
                     >
                         <span className="font-bold text-xl uppercase tracking-tighter">Fase {num}</span>
                         <span className={`font-mono text-sm ${activeStep === num ? 'text-black' : 'text-gray-600'}`}>0{num}</span>
                     </button>
                 ))}
                 
                 <div className="mt-auto p-6 md:px-8 bg-white/5">
                     <a href="/contacto" className="text-white font-mono uppercase tracking-widest text-xs border-b border-gray-600 hover:border-white transition-colors pb-1">
                         Iniciar fase 01 - Contacto
                     </a>
                 </div>
            </div>

            {/* Right: Active Step Content */}
            <div className="lg:col-span-8 p-10 md:p-16 relative min-h-[500px] flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col"
                    >
                        <div className="font-mono text-6xl md:text-8xl font-bold text-white/5 mb-8">
                            //{activeStep}
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 max-w-xl">
                            {stepsContent[activeStep].title}
                        </h3>
                        
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-16">
                            {stepsContent[activeStep].description}
                        </p>
                        
                        <div className="mt-auto grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-4">
                                    <span className="w-4 h-px bg-white"></span>
                                    {stepsContent[activeStep].detailsTitle}
                                </h4>
                                <ul className="space-y-4">
                                    {stepsContent[activeStep].details.slice(0, 2).map((item, i) => (
                                        <li key={i} className="text-gray-400 font-mono text-sm uppercase bg-white/5 p-3 border border-white/10">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                               <h4 className="text-transparent font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-4 select-none">
                                    <span className="w-4 h-px bg-transparent"></span>
                                    _
                                </h4>
                                <ul className="space-y-4 flex-1">
                                     {stepsContent[activeStep].details.slice(2, 4).map((item, i) => (
                                        <li key={i} className="text-gray-400 font-mono text-sm uppercase bg-white/5 p-3 border border-white/10">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};
