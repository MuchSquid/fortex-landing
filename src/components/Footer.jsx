import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                 {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                        F
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                        Fortex <span className="text-blue-500">.</span>
                    </span>
                </div>

                <div className="text-sm text-gray-500">
                    © 2026 Fortex Digital Solutions. Todos los derechos son reservados.
                </div>
            </div>
        </footer>
    );
};
