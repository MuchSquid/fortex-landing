import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Activity, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Soluciones Digitales Personalizadas
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white">
            Transforma tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Operación
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed">
            Diseñamos y operamos productos digitales que transforman el caos en control, dando visibilidad y orden a operaciones complejas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/demo" className="group">
              Solicitar demo 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary">Contáctanos</Button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-white/5">
            {[
              { 
                label: 'Eficiencia', 
                icon: Zap,
                color: 'text-amber-400',
                bg: 'bg-amber-400/10 group-hover/icon:bg-amber-400/20',
                animation: {
                  scale: [1, 1.2, 1],
                  filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
                  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }
              },
              { 
                label: 'Control', 
                icon: Shield,
                color: 'text-blue-500',
                bg: 'bg-blue-500/10 group-hover/icon:bg-blue-500/20',
                animation: {
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                } 
              },
              { 
                label: 'Visibilidad', 
                icon: Activity,
                color: 'text-emerald-400',
                bg: 'bg-emerald-400/10 group-hover/icon:bg-emerald-400/20',
                animation: {
                  x: [0, 2, -2, 0],
                  scale: [1, 1.1, 1],
                  transition: { duration: 1.5, repeat: Infinity }
                }
              },
            ].map(({ label, icon: Icon, animation, color, bg }) => (
              <div key={label} className="flex items-center gap-2 text-gray-400 group/icon">
                <div className={`p-2 rounded-lg ${bg} ${color} transition-colors`}>
                  <motion.div animate={animation}>
                    <Icon className="w-4 h-4" />
                  </motion.div>
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Header of Dashboard */}
            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="ml-4 h-4 w-32 rounded-full bg-white/5" />
            </div>
            
            {/* Body of Dashboard - Abstract Layout */}
            <div className="p-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-4">
                <div className="h-32 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
                  {/* Graph Line Mockup */}
                  <svg className="absolute bottom-0 left-0 right-0 h-16 w-full text-blue-500/30" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0,40 Q20,30 40,35 T80,20 T100,10 V40 H0 Z" fill="currentColor" />
                    <path d="M0,40 Q20,30 40,35 T80,20 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-3" />
                    <div className="h-2 w-16 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-12 bg-white/10 rounded" />
                  </div>
                  <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 mb-3" />
                    <div className="h-2 w-16 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-12 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 rounded-xl bg-white/5 border border-white/5 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5" />
                    <div className="space-y-1">
                      <div className="h-2 w-12 bg-white/10 rounded" />
                      <div className="h-2 w-8 bg-white/5 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-xl bg-[#1e293b] border border-white/10 p-4 shadow-2xl animate-float">
             <div className="w-full h-full rounded-lg bg-blue-500/10 flex items-center justify-center">
               <Activity className="text-blue-500" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
