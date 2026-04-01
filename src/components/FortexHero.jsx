import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FortexHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden selection:bg-white selection:text-black">
      
      {/* Ultra Subtle Noise Overlay for Texture (CSS Pattern) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-12">
          
          {/* Stark Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest"
          >
            <span className="w-8 h-px bg-gray-600"></span>
            Fortex Digital Solutions
          </motion.div>

          {/* Brutalist Huge Headline */}
          <div className="flex flex-col gap-2 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.9] text-left"
            >
              Crea.
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-gray-600 leading-[0.9] text-left"
            >
              Escala.
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.9] text-left"
            >
              Domina.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8 border-t border-white/10 pt-8"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
              Arquitectura digital de élite para empresas que rechazan lo ordinario. Desarrollamos software, automatizamos ventas y estructuramos tu crecimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start md:justify-end">
              <a href="/contacto" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10 flex items-center">
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Harsh hover color block instead of soft fade */}
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
              
              <a href="/onetex" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg hover:border-white transition-colors">
                Descubrir OneTex
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
