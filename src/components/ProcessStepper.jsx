import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

const stepsContent = {
  1: {
    title: "Análisis de su operación",
    description: "Analizamos cómo funciona hoy su empresa, sin filtros. Nos sumergimos en sus procesos reales para entender dónde duele realmente.",
    detailsTitle: "Qué evaluamos:",
    details: ["Procesos operativos reales", "Flujo de información actual", "Dependencia de personas clave", "Riesgos y puntos de fricción"]
  },
  2: {
    title: "Diagnóstico Profundo",
    description: "Identificamos las causas raíz de los problemas detectados y cuantificamos el impacto financiero y operativo de no resolverlos.",
    detailsTitle: "Entregables:",
    details: ["Mapa de calor de ineficiencias", "Cálculo de pérdidas actuales", "Evaluación de madurez digital", "Informe de riesgos críticos"]
  },
  3: {
    title: "Estrategia a Medida",
    description: "Diseñamos un plan de acción claro, definiendo qué tecnologías y procesos son necesarios para alcanzar sus objetivos.",
    detailsTitle: "Qué definimos:",
    details: ["Arquitectura de solución", "Roadmap de implementación", "Definición de KPIs", "Reingeniería de procesos clave"]
  },
  4: {
    title: "Propuesta de Valor",
    description: "Presentamos una solución detallada con alcance, tiempos y costos transparentes, sin letras chicas ni sorpresas.",
    detailsTitle: "Qué recibe:",
    details: ["Alcance técnico detallado", "Cronograma de ejecución", "Presupuesto de inversión", "Proyección de ROI"]
  },
  5: {
    title: "Desarrollo Ágil",
    description: "Construimos la solución iterativamente, asegurando calidad y alineación constante con las necesidades del negocio.",
    detailsTitle: "Cómo trabajamos:",
    details: ["Sprints de 2 semanas", "Demos quincenales", "Feedback continuo", "Control de calidad riguroso"]
  },
  6: {
    title: "Piloto Controlado",
    description: "Probamos la solución en un entorno controlado para validar resultados y ajustar detalles antes del despliegue total.",
    detailsTitle: "Objetivos del piloto:",
    details: ["Validación de usabilidad", "Medición de métricas reales", "Ajuste de flujos de trabajo", "Capacitación de usuarios clave"]
  },
  7: {
    title: "Expansión y Soporte",
    description: "Desplegamos la solución a toda la operación y capacitamos a tu equipo para asegurar la adopción y el éxito a largo plazo.",
    detailsTitle: "Post-implementación:",
    details: ["Despliegue escalonado", "Capacitación masiva", "Soporte técnico dedicado", "Mejora continua"]
  }
};

export const ProcessStepper = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        if (activeStep < 7) {
            setActiveStep(prev => prev + 1);
        }
    };

    const steps = [
        { num: 1, title: "Análisis", color: "text-amber-500", border: "border-amber-500", shadow: "shadow-amber-500/40", bg: "bg-amber-500", textActive: "text-black" },
        { num: 2, title: "Diagnóstico", color: "text-amber-500", border: "border-amber-500", shadow: "shadow-amber-500/40", bg: "bg-amber-500", textActive: "text-black" },
        { num: 3, title: "Estrategia", color: "text-blue-500", border: "border-blue-500", shadow: "shadow-blue-500/40", bg: "bg-blue-500", textActive: "text-black" },
        { num: 4, title: "Propuesta", color: "text-blue-500", border: "border-blue-500", shadow: "shadow-blue-500/40", bg: "bg-blue-500", textActive: "text-black" },
        { num: 5, title: "Desarrollo", color: "text-blue-500", border: "border-blue-500", shadow: "shadow-blue-500/40", bg: "bg-blue-500", textActive: "text-black" },
        { num: 6, title: "Piloto", color: "text-emerald-500", border: "border-emerald-500", shadow: "shadow-emerald-500/40", bg: "bg-emerald-500", textActive: "text-black" },
        { num: 7, title: "Expansión", color: "text-emerald-500", border: "border-emerald-500", shadow: "shadow-emerald-500/40", bg: "bg-emerald-500", textActive: "text-black" },
    ];

  return (
    <section className="py-20 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Beams */}
        <div className="absolute inset-0 flex justify-center opacity-10 pointer-events-none">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Cómo implementamos <br/> soluciones Fortex
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                No vendemos software por vender. Nuestra prioridad es entender su operación a fondo antes de escribir una línea de código.
            </p>
        </div>

        {/* Stepper Logic */}
        <div className="max-w-4xl mx-auto">
            {/* Steps Indicator */}
            <div className="flex justify-between items-center mb-12 md:mb-16 relative overflow-x-auto py-4 px-2 hide-scrollbar">
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
                 {steps.map((step) => (
                     <button 
                        key={step.num} 
                        onClick={() => setActiveStep(step.num)}
                        className="flex flex-col items-center gap-2 bg-[#0a0a0a] px-2 min-w-[80px] group transition-all"
                     >
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 ${
                             activeStep === step.num 
                             ? `${step.bg} ${step.textActive} ${step.border} shadow-[0_0_20px_rgba(37,99,235,0.0)] ${step.shadow.replace('shadow-', 'shadow-[0_0_20px_')} scale-110` 
                             : 'bg-[#0a0a0a] text-gray-500 border-white/10 group-hover:border-white/30 group-hover:text-gray-300'
                         }`}>
                             {step.num}
                         </div>
                         <span className={`text-xs font-medium transition-colors duration-300 ${activeStep === step.num ? step.color : 'text-gray-600'}`}>
                             {step.title}
                         </span>
                     </button>
                 ))}
            </div>

            {/* Active Step Content */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6 md:p-12 text-center"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold mb-6">
                        Paso {activeStep}: {activeStep === 1 ? 'En curso' : 'Siguiente'}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">
                        {stepsContent[activeStep].title}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                        <div className="space-y-4">
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {stepsContent[activeStep].description}
                            </p>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h4 className="text-white font-semibold border-b border-white/10 pb-2">
                                {stepsContent[activeStep].detailsTitle}
                            </h4>
                            <ul className="space-y-2">
                                {stepsContent[activeStep].details.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        {activeStep < 7 ? (
                            <Button onClick={handleNext}>
                                Siguiente paso: {steps[activeStep].title}
                            </Button>
                        ) : (
                            <Button className="shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                Comenzar Transformación
                            </Button>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
