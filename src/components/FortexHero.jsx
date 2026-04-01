import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MagneticButton = ({ children, className, href, variant = 'primary' }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // 0.2 factor for subtle effect
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-medium text-lg overflow-hidden transition-all duration-300 rounded-none";
  
  const variants = {
    primary: "bg-[#0047FF] text-white hover:bg-[#005FF0] hover:shadow-[0_0_30px_rgba(0,71,255,0.5)]",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white"
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </motion.a>
  );
};

const AnimatedText = ({ text, className, delayOffset = 0 }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delayOffset }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden flex"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className={className}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const FortexHero = () => {
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const backgroundGradient = useMotionTemplate`radial-gradient(circle 800px at calc(${mouseX} * 100%) calc(${mouseY} * 100%), rgba(0, 71, 255, 0.12), transparent 80%)`;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden selection:bg-[#0047FF] selection:text-white"
    >
      {/* Dynamic Cursor Light Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: backgroundGradient }}
      />
      
      {/* Ultra Subtle Noise Overlay for Texture */}
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
            className="flex items-center gap-4 text-gray-400 font-mono text-sm uppercase tracking-widest"
          >
            <span className="w-8 h-px bg-gray-600"></span>
            Fortex Digital Solutions
          </motion.div>

          {/* Brutalist Huge Headline */}
          <div className="flex flex-col gap-2 w-full">
            <AnimatedText delayOffset={0.2} text="Crea." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-white leading-[0.9] text-left" />
            <AnimatedText delayOffset={0.6} text="Escala." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-gray-600 leading-[0.9] text-left" />
            <AnimatedText delayOffset={1.0} text="Domina." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-white leading-[0.9] text-left" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8 border-t border-white/10 pt-8"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
              Desde landing pages de alto impacto hasta arquitectura de software a medida. Construimos la infraestructura técnica que sostiene tu escalabilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start md:justify-end">
              <MagneticButton href="/contacto" variant="primary" className="group">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              
              <MagneticButton href="/portafolio" variant="secondary">
                Explorar Soluciones Web
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Minimalist Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none"
      >
        <div className="w-[30px] h-[46px] border border-white/20 rounded-full flex justify-center p-2 pt-2.5 bg-black/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
