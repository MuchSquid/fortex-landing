import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, Activity, FileCheck, Users, AlertTriangle, FileText } from 'lucide-react';

const benefits = [
  {
    id: 'evidence',
    icon: ClipboardCheck,
    title: "Todo registrado",
    desc: "Cada orden, visita y responsable tiene evidencia.",
    preview: "timeline",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/50",
    hover: "group-hover:bg-blue-500/20"
  },
  {
    id: 'status',
    icon: Activity,
    title: "Estado Real",
    desc: "Ficha técnica viva por ascensor con historial y condiciones.",
    preview: "status_card",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/50",
    hover: "group-hover:bg-emerald-500/20"
  },
  {
    id: 'checklist',
    icon: FileCheck,
    title: "Cierre con Pruebas",
    desc: "Checklists, fotos y firmas para evitar reclamos.",
    preview: "checklist_ui",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/50",
    hover: "group-hover:bg-cyan-500/20"
  },
  {
    id: 'roles',
    icon: Users,
    title: "Accesos Claros",
    desc: "Cada rol ve y autoriza solo lo que le corresponde.",
    preview: "rbac_ui",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/50",
    hover: "group-hover:bg-indigo-500/20"
  },
  {
    id: 'alerts',
    icon: AlertTriangle,
    title: "Alertas Tempranas",
    desc: "Tiempos, visitas y pendientes en indicadores simples.",
    preview: "alert_ui",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/50",
    hover: "group-hover:bg-amber-500/20"
  },
  {
    id: 'audit',
    icon: FileText,
    title: "Auditoría Lista",
    desc: "Operación estandarizada con respaldo listo para inspección.",
    preview: "audit_ui",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/50",
    hover: "group-hover:bg-purple-500/20"
  }
];

export const SuiteOneTex = () => {
  const [activeTab, setActiveTab] = useState(benefits[0].id);

  return (
    <section id="onetex" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Suite OneTex</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 max-w-2xl">
            Operaciones sin fricción desde el día uno.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Interactive List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 group ${
                  activeTab === benefit.id 
                    ? `bg-white/5 ${benefit.border} shadow-lg shadow-white/5` 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeTab === benefit.id ? `${benefit.bg} ${benefit.color}` : 'bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-white'
                  }`}>
                    <benefit.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${activeTab === benefit.id ? 'text-white' : 'text-white'}`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors ${activeTab === benefit.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Preview Area */}
          <div className="lg:col-span-7 relative h-[600px] bg-[#0f172a] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
            {/* Browser/App Header Mockup */}
            <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2 flex-shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="mx-auto text-xs font-mono text-gray-600">Fortex Platform v2.4</div>
            </div>

            <div className="flex-1 p-8 relative flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-md"
                >
                  <PreviewCard type={benefits.find(b => b.id === activeTab).preview} />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Overlay Gradient */}
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for rendering specific previews based on tab
const PreviewCard = ({ type }) => {
  if (type === 'timeline') {
    return (
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 space-y-4">
            <div className="flex justify-between items-center text-sm text-gray-400 border-b border-white/5 pb-2">
                <span>Historial de Actividad</span>
                <span>Hoy, 14:30</span>
            </div>
            {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <div className="w-0.5 flex-1 bg-white/10 my-1" />
                    </div>
                    <div>
                        <div className="text-white text-sm font-medium">Mantenimiento Correctivo</div>
                        <div className="text-xs text-gray-500">Torre A - Ascensor 2 • Técnico J. Pérez</div>
                    </div>
                </div>
            ))}
        </div>
    );
  }
  
  if (type === 'status_card') {
      return (
          <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-bold">Ascensor Principal</h4>
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs text-center border border-green-500/20">Operativo</span>
              </div>
              <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                          <div className="text-xs text-gray-500">Última Visita</div>
                          <div className="text-white font-mono">Hace 2d</div>
                      </div>
                       <div className="bg-white/5 p-3 rounded-lg">
                          <div className="text-xs text-gray-500">Disponibilidad</div>
                          <div className="text-white font-mono">98.5%</div>
                      </div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/10">
                      <span className="text-xs text-gray-600">Gráfico de Vibración</span>
                  </div>
              </div>
          </div>
      )
  }

  // Fallback generic card for others
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 mx-auto flex items-center justify-center mb-4">
            <Activity className="text-blue-500" />
        </div>
        <h4 className="text-white text-lg font-bold mb-2">Vista Previa Generada</h4>
        <p className="text-gray-400 text-sm">Visualización avanzada de {type}</p>
        <div className="mt-6 flex justify-center gap-2">
            <div className="h-2 w-16 bg-white/10 rounded-full" />
            <div className="h-2 w-8 bg-white/10 rounded-full" />
        </div>
    </div>
  );
};
