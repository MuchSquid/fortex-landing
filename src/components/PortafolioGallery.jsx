import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Elite',
    category: 'Plataforma Web',
    description: 'Plataforma de comercio electrónico de alto rendimiento con integraciones robustas de pago y gestión de inventario en tiempo real.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Aplicación Web',
    description: 'Panel de control analítico para gestión de datos empresariales. Interfaz intuitiva con visualización de métricas avanzadas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Fintech App',
    category: 'Plataforma Bancaria',
    description: 'Aplicación web para gestión de finanzas personales y empresariales. Diseño modular, seguro y altamente escalable.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'Landing Corporativo',
    category: 'Sitio Web',
    description: 'Sitio web corporativo con animaciones fluidas y diseño minimalista enfocado en la conversión y presentación de marca.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
  }
];

export const PortafolioGallery = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-24 selection:bg-white selection:text-black">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-6 mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest"
          >
            <span className="w-8 h-px bg-gray-600"></span>
            Nuestro Trabajo
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Portafolio de <span className="text-gray-500">Proyectos.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 font-light leading-relaxed mt-4"
          >
            Explora una selección de nuestros proyectos recientes. Desarrollos web a medida, plataformas escalables y experiencias digitales que generan impacto.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col gap-6"
            >
              {/* Image Container */}
              <a href={project.link} className="relative aspect-4/3 overflow-hidden bg-white/5 border border-white/10 block">
                <motion.div 
                  className="w-full h-full bg-cover bg-center origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Overlay Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">{project.category}</span>
                </div>
                <a href={project.link} className="inline-block hover:opacity-80 transition-opacity">
                  <h3 className="text-3xl font-bold tracking-tight text-white">{project.title}</h3>
                </a>
                <p className="text-gray-400 font-light leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center text-white font-medium mt-2 hover:text-gray-300 transition-colors group/link w-fit">
                  Ver detalle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-16 border-t border-white/10 flex flex-col items-center text-center gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            ¿Listo para construir el tuyo?
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Agenda una llamada y descubramos cómo podemos escalar tu negocio.
          </p>
          <a href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Contactar ahora
          </a>
        </motion.div>

      </div>
    </section>
  );
};
