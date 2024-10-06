import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  className?: string;
}

const variantClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};

export function Typography({ children, variant = 'body1', className = '' }: TypographyProps) {
  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';
  return (
    <Component className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
}