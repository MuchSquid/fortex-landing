import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded-none bg-foreground border border-foreground flex items-center justify-center text-background font-bold text-xs">
            F
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground uppercase">
            Fortex <span className="text-muted">.</span>
          </span>
        </a>

        <div className="text-sm text-muted">
          © 2026 Fortex Digital Solutions. Todos los derechos son reservados.
        </div>
      </div>
    </footer>
  );
};
