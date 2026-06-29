import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center cursor-pointer';

  const variants = {
    primary: 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow)]',
    secondary: 'bg-[var(--bg-glass)] hover:bg-[var(--bg-glass-hover)] text-foreground backdrop-blur-md border border-[var(--border-color)]',
    outline: 'border border-[var(--color-accent)]/50 text-[var(--color-accent)] hover:bg-[var(--color-primary-subtle)] hover:border-[var(--color-accent)]',
    ghost: 'text-muted hover:text-foreground hover:bg-[var(--bg-glass)]'
  };

  if (props.href) {
    return (
      <a
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
