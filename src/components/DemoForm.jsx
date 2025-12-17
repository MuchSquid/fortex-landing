import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Mail, User, Building, MessageSquare, CheckCircle2 } from 'lucide-react';

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
    // Simulate form submission
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-12 text-center max-w-lg mx-auto"
      >
        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-blue-500 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">¡Solicitud Recibida!</h3>
        <p className="text-gray-400 mb-8">
          Gracias por tu interés en Fortex. Un especialista en transformación operativa te contactará en breve.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Volver al inicio
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-xl mx-auto"
    >
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Solicita tu Demo</h3>
        <p className="text-gray-400">
          Descubre cómo Fortex puede transformar tu operación.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Nombre Completo</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
            <input 
              type="text" 
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-300"
              placeholder="Ej. Juan Pérez"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Correo Corporativo</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
            <input 
              type="email" 
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-300"
              placeholder="juan@empresa.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Empresa</label>
          <div className="relative group">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
            <input 
              type="text" 
              name="company"
              required
              value={formState.company}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-300"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">¿Qué desafío buscas resolver?</label>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
            <textarea 
              name="message"
              required
              rows="4"
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-300 resize-none"
              placeholder="Cuéntanos brevemente sobre tus retos actuales..."
            />
          </div>
        </div>

        <Button type="submit" className="w-full h-12 text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
          Solicitar Diagnóstico Gratuito
        </Button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Tus datos están seguros. No compartimos información con terceros.
        </p>
      </form>
    </motion.div>
  );
};
