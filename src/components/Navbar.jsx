import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Problemática', href: '/#problematica' },
    { name: 'Control', href: '/#control' },
    { name: 'Suite OneTex', href: '/#onetex' },
    { name: 'Comparativa', href: '/#comparativa' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled && !isMobileMenuOpen
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-4' 
        : 'bg-transparent py-4 lg:py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            F
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Fortex <span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Menu - Centered Absolutely */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4 relative z-50">
          <Button variant="ghost" className="px-4 text-gray-300 hover:text-white">Contáctanos</Button>
          <Button href="/demo">Solicitar demo</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden relative z-50 p-2.5 rounded-xl transition-all duration-300 border backdrop-blur-md ${
            isMobileMenuOpen 
              ? 'bg-white/10 border-white/20 text-white' 
              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#050505] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold tracking-tight text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
