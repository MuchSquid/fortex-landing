import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section id="control" className="py-32 bg-black relative border-t border-white/10 overflow-hidden">
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-8 h-px bg-white"></span>
              La Solución
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none"
            >
              Control <br />
              <span className="text-gray-600">Absoluto.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-xl text-gray-400 font-light">
              OneTex es la infraestructura nerviosa central de tu operación. Visibilidad total, trazabilidad forense y roles blindados.
            </p>
          </motion.div>
        </div>

        {/* Brutalist Product Card Replacement */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border border-white/20 bg-black"
        >
          <div className="grid lg:grid-cols-2 gap-0">
             
             {/* Left: Value Prop */}
             <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between">
               <div>
                  <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter flex items-center gap-4">
                    OneTex
                    <span className="px-2 py-0.5 rounded-none text-xs bg-white text-black font-mono tracking-widest border border-white">CORE</span>
                  </h3>
                  <p className="text-gray-400 text-xl font-light mb-12">El centro de comando para operaciones pesadas y exigentes.</p>
               </div>

               <div className="space-y-6 mb-16">
                 {[
                   { title: "Centralización", desc: "Toda tu operación dictada desde un único tablero de control en tiempo real.", num: "01" },
                   { title: "Trazabilidad Forense", desc: "Registro inmutable y verificable de cada acción, usuario y segundo.", num: "02" },
                   { title: "Escalabilidad Fría", desc: "Multiplica x10 tu volumen sin aumentar linealmente tu fuerza administrativa.", num: "03" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="font-mono text-sm text-gray-600 group-hover:text-white transition-colors">{item.num}</div>
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>

               <a href="/demo" className="inline-flex items-center justify-between px-8 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors w-full group">
                 Solicitar Implementación
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </a>
             </div>

             {/* Right: UI Visualization (Wireframe/Abstract) */}
             <div className="p-10 md:p-16 bg-[#050505] flex items-center justify-center relative overflow-hidden">
                {/* Minimalist Data Grid Mockup */}
                <div className="w-full h-full border border-white/10 flex flex-col">
                  {/* Header */}
                  <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                    </div>
                    <div className="text-xs font-mono text-gray-500">ONETEX // DASHBOARD</div>
                  </div>
                  {/* Body wireframes */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="flex gap-6 h-32">
                      <div className="flex-1 border border-white/5 bg-white/[0.02]" />
                      <div className="flex-1 border border-white/5 bg-white/[0.02]" />
                      <div className="flex-1 border border-white/5 bg-white/[0.02] hidden md:block" />
                    </div>
                    <div className="flex-1 border border-white/5 bg-white/[0.02] flex items-end p-6">
                       {/* Mock Chart lines */}
                       <div className="w-full h-1/2 border-t border-l border-white/10 relative">
                         <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                           <path d="M0,50 L50,40 L100,60 L150,20 L200,30 L250,10 L300,40 L350,20 L400,0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                         </svg>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
             
          </div>
        </motion.div>
      </div>
    </section>
  );
};
