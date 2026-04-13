import React from 'react';
import { motion } from 'framer-motion';

import { projects } from '../data/portfolio';


export const PortafolioGallery = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Nuestro Trabajo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transformando visiones en <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">experiencias digitales</span> excepcionales.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Cada proyecto es una oportunidad para innovar. Aquí presentamos una selección de nuestras soluciones más impactantes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-16/10 mb-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5" style={{ viewTransitionName: `project-image-wrapper-${project.slug}` }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  style={{ viewTransitionName: `project-image-${project.slug}` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-white/70 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                   </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 
                  className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors"
                  style={{ viewTransitionName: `project-title-${project.slug}` }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4">
                  <a href={`/portafolio/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group/link">
                    Ver Proyecto
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
