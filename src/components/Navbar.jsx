import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';

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
    { name: 'Agencia Fortex', href: '/' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Operate OneTex', href: '/onetex' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled && !isMobileMenuOpen
        ? 'bg-background/90 backdrop-blur-xl border-b border-[var(--border-color)] py-4'
        : 'bg-transparent py-4 lg:py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <a href="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-8 h-8 rounded-none border border-foreground bg-foreground flex items-center justify-center text-background font-bold text-xl">
            F
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground uppercase">
            Fortex <span className="text-muted">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 relative z-50">
          <ThemeToggle />
          <Button href="/contacto" variant="ghost" className="px-4 text-muted hover:text-foreground">Contáctanos</Button>
          <Button href="/contacto">Solicitar demo</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className={`p-2.5 rounded-xl transition-all duration-300 border backdrop-blur-md ${
              isMobileMenuOpen
                ? 'bg-[var(--bg-glass-hover)] border-[var(--border-color-strong)] text-foreground'
                : 'bg-[var(--bg-glass)] border-[var(--border-color)] text-muted hover:text-foreground hover:bg-[var(--bg-glass-hover)]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-surface border border-[var(--border-color)] overflow-hidden shadow-[var(--shadow-card)]"
          >
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold tracking-tight text-muted hover:text-foreground transition-colors py-2"
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
