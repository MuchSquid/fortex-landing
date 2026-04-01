import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  {
    id: 'evidence',
    title: "Todo registrado",
    desc: "Cada orden, visita y responsable tiene evidencia.",
    num: "01",
    preview: "timeline"
  },
  {
    id: 'status',
    title: "Estado Real",
    desc: "Ficha técnica viva por equipo con historial completo.",
    num: "02",
    preview: "status_card"
  },
  {
    id: 'checklist',
    title: "Cierre con Pruebas",
    desc: "Checklists fotográficos firmados para evitar reclamos.",
    num: "03",
    preview: "checklist_ui"
  },
  {
    id: 'roles',
    title: "Accesos Claros",
    desc: "Cada rol ve, edita y autoriza solo lo que le corresponde.",
    num: "04",
    preview: "rbac_ui"
  },
  {
    id: 'alerts',
    title: "Alertas Tempranas",
    desc: "Identificación de cuellos de botella mediante semaforización.",
    num: "05",
    preview: "alert_ui"
  },
  {
    id: 'audit',
    title: "Auditoría Lista",
    desc: "Operación estandarizada lista para inspecciones legales.",
    num: "06",
    preview: "audit_ui"
  }
];

// Placeholder for PreviewCard logic (assuming it exists in the original file or similar)
const PreviewCard = ({ type }) => {
  return (
    <div className="w-full h-full border border-white/10 bg-black flex items-center justify-center p-8">
      <div className="text-gray-500 font-mono text-sm tracking-widest uppercase">
        VISTA DE DATOS_ [ {type} ]
      </div>
    </div>
  );
};

export const SuiteOneTex = () => {
  const [activeTab, setActiveTab] = useState(benefits[0].id);

  return (
    <section id="onetex" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="mb-20">
          <span className="text-white font-mono tracking-widest uppercase text-sm border-b border-white pb-1">OneTex System</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 tracking-tighter uppercase leading-none">
            Operaciones <br />
            sin fricción.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-white/10">
          
          {/* Left: Brutalist Interactive List */}
          <div className="lg:col-span-5 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`text-left p-6 md:p-8 border-b border-white/10 last:border-b-0 transition-all duration-300 group flex items-start gap-6 ${
                  activeTab === benefit.id 
                    ? 'bg-white text-black' 
                    : 'bg-transparent text-white hover:bg-white/5'
                }`}
              >
                <div className={`font-mono text-sm mt-1 transition-colors ${
                  activeTab === benefit.id ? 'text-black font-bold' : 'text-gray-600 group-hover:text-white'
                }`}>
                  {benefit.num}
                </div>
                <div>
                  <h3 className={`font-bold text-xl uppercase tracking-tight mb-2 transition-colors`}>
                    {benefit.title}
                  </h3>
                  <p className={`font-light leading-relaxed transition-colors ${
                    activeTab === benefit.id ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {benefit.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Preview Area (Brutalist Terminal-style) */}
          <div className="lg:col-span-7 bg-[#050505] p-6 flex flex-col items-center justify-center relative min-h-[500px]">
            {/* Minimalist Top Bar */}
            <div className="absolute top-0 left-0 w-full h-10 flex border-b border-white/10 px-4 items-center gap-4 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="ml-auto font-mono text-xs text-gray-500 uppercase tracking-widest">
                  Preview // {activeTab}
                </div>
            </div>

            <div className="w-full max-w-lg mt-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-[4/3]"
                >
                  <PreviewCard type={benefits.find(b => b.id === activeTab).preview} />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Subtle Grid overlay for that technical blueprint look */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
