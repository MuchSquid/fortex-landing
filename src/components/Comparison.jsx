import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Comparison = () => {
  return (
    <section id="comparativa" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-gray-500 font-mono tracking-widest uppercase text-sm border-b border-gray-600 pb-1">Despliegue Técnico</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-8 uppercase tracking-tighter">
            La decisión.
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light text-lg">
            Dos vías arquitectónicas. Elige la infraestructura que soporte el peso operativo de tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-white/20">
          {/* Card: Operate OneTex */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/20 bg-white/5 relative flex flex-col group hover:bg-white/10 transition-colors duration-500">
            {/* Minimalist Top Indicator */}
            <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-white/20 flex items-center justify-center font-mono text-xs text-white bg-transparent">
              OP_1
            </div>
            
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-white mb-2 uppercase tracking-tighter">OneTex</h3>
              <p className="text-white font-mono uppercase text-xs tracking-widest bg-white/10 inline-block px-2 py-1">Estándar Operativo Inmediato</p>
            </div>

            <ul className="space-y-6 mb-16 flex-1">
              {[
                "La gestión vive en Excel o papel.",
                "Trazabilidad depende de la memoria humana.",
                "Carencia absoluta de un sistema centralizado.",
                "Control reactivo: se opera cuando el error ya ocurrió."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-white">
                    <Check size={18} strokeWidth={2} />
                  </div>
                  <span className="text-gray-300 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/demo" className="text-center w-full block border border-white text-black bg-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-white transition-colors">
              Implementar OneTex
            </a>
          </div>

          {/* Card: Custom/Integration */}
          <div className="p-10 md:p-16 relative flex flex-col group hover:bg-white/5 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-white/20 flex items-center justify-center font-mono text-xs text-gray-400 bg-transparent">
              OP_2
            </div>

             <div className="mb-12">
              <h3 className="text-4xl font-bold text-gray-400 mb-2 uppercase tracking-tighter group-hover:text-white transition-colors">A Medida</h3>
              <p className="text-gray-500 font-mono uppercase text-xs tracking-widest border border-gray-600 inline-block px-2 py-1">Infraestructura Legacy</p>
            </div>

             <ul className="space-y-6 mb-16 flex-1">
              {[
                "Ya existe un sistema legacy pesado.",
                "Procesos ultra específicos/únicos del sector.",
                "Necesidad de extender arquitectura existente.",
                "Integración requerida por compliance."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-red-500">
                    <X size={18} strokeWidth={2} />
                  </div>
                  <span className="text-gray-400 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/contacto" className="text-center w-full block border border-white/20 text-white bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-white transition-colors">
              Requerir Desarrollo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
