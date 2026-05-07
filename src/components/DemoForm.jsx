import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DemoForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-background border border-foreground/20 p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
      >
        <div className="font-mono text-6xl text-foreground mb-8">OK</div>
        <h3 className="text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">Recepción Exitosa</h3>
        <p className="text-muted font-light mb-12 max-w-sm">
          Tus coordenadas operativas han sido registradas. Un ingeniero de nuestro equipo te contactará en breve.
        </p>
        <button
            onClick={() => setIsSubmitted(false)}
            className="border-b border-muted hover:border-foreground text-muted hover:text-foreground font-mono uppercase text-xs tracking-widest pb-1 transition-colors"
        >
          Retornar al formulario
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-surface border border-foreground/10 p-8 md:p-12"
    >
      <div className="mb-10">
        <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-2">Solicitar Evaluación</h3>
        <p className="text-muted font-mono text-xs uppercase tracking-widest">
          // Formulario de Contacto Directo
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">Nombre Completo *</label>
          <input
            type="text"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors"
            placeholder="Ej. Juan Pérez"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">Correo Corporativo *</label>
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors"
            placeholder="juan@empresa.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">Empresa *</label>
          <input
            type="text"
            name="company"
            required
            value={formState.company}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors"
            placeholder="Nombre de tu operación"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">Naturaleza del problema *</label>
          <textarea
            name="message"
            required
            rows="3"
            value={formState.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors resize-none"
            placeholder="Describe brevemente el cuello de botella actual..."
          />
        </div>

        <button type="submit" className="w-full mt-8 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-foreground/80 transition-colors">
          Enviar Datos
        </button>
      </form>
    </motion.div>
  );
};
