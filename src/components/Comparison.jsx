import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Comparison = () => {
  return (
    <section id="comparativa" className="py-32 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-muted font-mono tracking-widest uppercase text-sm border-b border-muted pb-1">Despliegue Técnico</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-8 uppercase tracking-tighter">
            La decisión.
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto font-light text-lg">
            Dos vías arquitectónicas. Elige la infraestructura que soporte el peso operativo de tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-foreground/20">
          {/* Card: Operate OneTex */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-foreground/20 bg-foreground/5 relative flex flex-col group hover:bg-foreground/10 transition-colors duration-500">
            {/* Minimalist Top Indicator */}
            <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-foreground/20 flex items-center justify-center font-mono text-xs text-foreground bg-transparent">
              OP_1
            </div>
            
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-2 uppercase tracking-tighter">OneTex</h3>
              <p className="text-foreground font-mono uppercase text-xs tracking-widest bg-foreground/10 inline-block px-2 py-1">Estándar Operativo Inmediato</p>
            </div>

            <ul className="space-y-6 mb-16 flex-1">
              {[
                "La gestión vive en Excel o papel.",
                "Trazabilidad depende de la memoria humana.",
                "Carencia absoluta de un sistema centralizado.",
                "Control reactivo: se opera cuando el error ya ocurrió."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-foreground">
                    <Check size={18} strokeWidth={2} />
                  </div>
                  <span className="text-muted font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/demo" className="text-center w-full block border border-foreground text-background bg-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-foreground transition-colors">
              Implementar OneTex
            </a>
          </div>

          {/* Card: Custom/Integration */}
          <div className="p-10 md:p-16 relative flex flex-col group hover:bg-foreground/5 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-foreground/20 flex items-center justify-center font-mono text-xs text-muted bg-transparent">
              OP_2
            </div>

             <div className="mb-12">
              <h3 className="text-4xl font-bold text-muted mb-2 uppercase tracking-tighter group-hover:text-foreground transition-colors">A Medida</h3>
              <p className="text-muted font-mono uppercase text-xs tracking-widest border border-muted inline-block px-2 py-1">Infraestructura Legacy</p>
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
                  <span className="text-muted font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/contacto" className="text-center w-full block border border-foreground/20 text-foreground bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-foreground transition-colors">
              Requerir Desarrollo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
