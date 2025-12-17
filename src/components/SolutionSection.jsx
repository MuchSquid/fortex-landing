import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const SolutionSection = () => {
  return (
    <section id="control" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>
            La Solución Definitiva
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Transforma el <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 opacity-50 line-through decoration-red-500">Caos</span> en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500">Control Absoluto</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            OneTex no es solo software. Es el sistema nervioso digital que tu operación necesita para escalar sin romperse.
          </motion.p>
        </div>

        {/* Main Product Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-[#1a1f2e] to-[#0f172a] border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-900/20 group"
        >
          {/* Glass Overlay Effect */}
          <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
             
             {/* Left: Value Prop */}
             <div className="space-y-8">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    Operate OneTex
                    <span className="px-2 py-0.5 rounded text-xs bg-blue-500 text-white font-bold tracking-wide">CORE</span>
                  </h3>
                  <p className="text-blue-200/60 text-lg">Tu centro de comando operativo.</p>
               </div>

               <div className="space-y-4">
                 {[
                   { title: "Centralización Total", desc: "Toda tu operación en una sola pantalla, en tiempo real.", color: "bg-blue-500" },
                   { title: "Trazabilidad Forense", desc: "Historial inmutable de cada acción, visita y decisión.", color: "bg-cyan-500" },
                   { title: "Escalabilidad Infinita", desc: "Crece x10 sin necesidad de multiplicar tu staff administrativo.", color: "bg-indigo-500" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className={`w-1 h-full rounded-full ${item.color}`} />
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>

               <Button href="/demo" className="w-full md:w-auto shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                 Solicitar Demo Personalizada
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </div>

             {/* Right: UI Visualization (Abstract) */}
             <div className="relative h-[400px] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-inner">
                {/* Mock Header */}
                <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 text-center text-[10px] text-gray-500 font-mono">dashboard.onetex.io</div>
                </div>

                {/* Mock Body content */}
                <div className="flex-1 p-6 relative">
                   {/* Abstract UI Elements */}
                   <div className="absolute top-6 left-6 right-6 h-32 rounded-xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 p-4 flex flex-col justify-between group-hover:border-blue-500/40 transition-colors">
                      <div className="flex justify-between items-start">
                         <div className="w-8 h-8 rounded bg-blue-500/20" />
                         <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">98.9% Uptime</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-1/2 bg-blue-500/40 rounded-full" />
                        <div className="h-2 w-3/4 bg-blue-500/20 rounded-full" />
                      </div>
                   </div>

                   <div className="absolute top-44 left-6 w-40 h-40 rounded-xl bg-white/5 border border-white/10 p-4 space-y-3">
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="mt-4 flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20" />
                        <div className="w-6 h-6 rounded-full bg-amber-500/20" />
                      </div>
                   </div>

                   <div className="absolute top-44 right-6 w-40 h-40 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-center">
                      <div className="text-center">
                         <div className="text-2xl font-bold text-white mb-1">1,240</div>
                         <div className="text-xs text-gray-500">Activos Monitoreados</div>
                      </div>
                   </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-blue-600/10 to-transparent" />
             </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
