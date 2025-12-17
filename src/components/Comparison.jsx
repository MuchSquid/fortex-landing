import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Comparison = () => {
  return (
    <section id="comparativa" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gray-500 font-bold tracking-wider uppercase text-sm">¿Es para ti?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            La decisión correcta
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Compara escenarios y elige la herramienta que se adapte al estado actual de tu operación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card: Operate OneTex */}
          <div className="rounded-3xl p-8 border border-blue-500/30 bg-blue-500/5 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Operate OneTex</h3>
              <p className="text-blue-400 text-sm font-medium">Ideal para orden inmediato</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "La gestión vive en Excel o papel.",
                "Trazabilidad depende de la memoria.",
                "Sin sistema centralizado.",
                "Control reactivo (post-fallo)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-0.5 rounded-full bg-blue-500/20 text-blue-500">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full justify-center">Elegir OneTex</Button>
          </div>

          {/* Card: Custom/Integration */}
          <div className="rounded-3xl p-8 border border-white/5 bg-white/5 flex flex-col">
             <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Integración / Desarrollo</h3>
              <p className="text-gray-500 text-sm font-medium">Para operaciones complejas o legacy</p>
            </div>

             <ul className="space-y-4 mb-8 flex-1">
              {[
                "Ya tienes un sistema legacy.",
                "Procesos muy específicos/únicos.",
                "Necesitas extender lo existente.",
                "Buscas integración, no remplazo."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-0.5 rounded-full bg-gray-700 text-gray-400">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full justify-center hover:bg-white/5 border-white/20 text-white">
              Consultar Desarrollo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
