import React from 'react';
import { Button } from './ui/Button';

export const TransformationBanner = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-blue-600/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                    Transformación Operativa Digital
                </span>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto">
                    Convierte procesos desordenados en <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        sistemas escalables.
                    </span>
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Diseñamos e implementamos suites digitales que reducen el riesgo operativo y te devuelven el control real de tu negocio.
                </p>

                <Button href="/demo" className="h-14 px-8 text-lg shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] mx-auto">
                    Solicitar diagnóstico operativo
                </Button>
            </div>
        </section>
    );
};
