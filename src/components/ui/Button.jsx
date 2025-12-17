import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10',
    outline: 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5'
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
