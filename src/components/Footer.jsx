import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                 {/* Logo */}
                <a href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
                    <div className="w-6 h-6 rounded-none bg-white border border-white flex items-center justify-center text-black font-bold text-xs">
                        F
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white uppercase">
                        Fortex <span className="text-gray-500">.</span>
                    </span>
                </a>

                <div className="text-sm text-gray-500">
                    © 2026 Fortex Digital Solutions. Todos los derechos son reservados.
                </div>
            </div>
        </footer>
    );
};
