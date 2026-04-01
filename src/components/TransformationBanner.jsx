import React from 'react';

export const TransformationBanner = () => {
    return (
        <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
            {/* Pure CSS Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
                <div className="border border-white/20 bg-[#050505] p-12 md:p-20 flex flex-col items-center text-center">
                    
                    <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-10">
                        // Transformación Operativa Digital
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                        Del caos, <br className="hidden md:block"/> a la máquina.
                    </h2>
                    
                    <p className="text-xl text-gray-400 font-light max-w-2xl mb-16 leading-relaxed">
                        Implementamos infraestructura técnica que destruye la dependencia humana y te devuelve el control frío de tu negocio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="/demo" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
                            Ejecutar Diagnóstico
                        </a>
                        <a href="/contacto" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-colors">
                            Contactar Ingeniería
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
