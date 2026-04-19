import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';

const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))];

const ProjectCard = ({ project, index, featured = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`/portafolio/${project.slug}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      {/* Image container */}
      <div
        className={`relative overflow-hidden border border-white/10 group-hover:border-white/25 transition-colors duration-500 ${featured ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}
        style={{ viewTransitionName: `project-image-wrapper-${project.slug}` }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ viewTransitionName: `project-image-${project.slug}` }}
        />

        {/* Base dark tint */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-20" />

        {/* Hover overlay — slides up */}
        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute inset-0 flex items-end p-8 md:p-10"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-3 text-sm font-bold uppercase tracking-widest text-black"
            style={{ backgroundColor: project.accent }}
          >
            Ver Proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </motion.div>

        {/* Project number — top left */}
        <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest text-white/40">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Year — top right */}
        <div className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-white/40">
          {project.year}
        </div>
      </div>

      {/* Info below image */}
      <div className="pt-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: project.accent }}
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
              {project.category}
            </span>
          </div>
          <h3
            className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors duration-300"
            style={{ viewTransitionName: `project-title-${project.slug}` }}
          >
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mt-2 max-w-md">
            {project.description}
          </p>
        </div>

        {/* Tech tags — right column */}
        <div className="hidden md:flex flex-col items-end gap-1.5 shrink-0 pt-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-gray-700 group-hover:text-gray-500 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export const PortafolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest mb-6"
            >
              <span className="w-8 h-px bg-gray-600" />
              Nuestro Trabajo
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none"
            >
              Casos de <br />
              <span className="text-gray-600">Estudio.</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-white text-black bg-white'
                    : 'border-white/15 text-gray-500 hover:border-white/40 hover:text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project count */}
        <div className="flex items-center gap-3 mb-12 border-t border-white/10 pt-8">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-700">
            Mostrando
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={filtered.length}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-xs uppercase tracking-widest text-gray-500"
            >
              {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-16 lg:gap-20"
          >
            {/* Featured — full width */}
            {featured && (
              <ProjectCard project={featured} index={0} featured />
            )}

            {/* Rest — 2 col grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {rest.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i + 1} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom divider */}
        <div className="mt-24 pt-8 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-700">
            Fortex Digital Solutions — {new Date().getFullYear()}
          </span>
          <a
            href="/contacto"
            className="font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-1"
          >
            Iniciar un proyecto →
          </a>
        </div>

      </div>
    </section>
  );
};
