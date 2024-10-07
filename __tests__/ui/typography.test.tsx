import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from '../../app/components/ui/typography';

describe('Typography', () => {
  it('renders children correctly', () => {
    render(<Typography>Hello, World!</Typography>);
    expect(screen.getByText('Hello, World!')).toBeDefined();
  });

  it('uses p tag and body1 classes by default', () => {
    render(<Typography>Default Text</Typography>);
    const element = screen.getByText('Default Text');
    expect(element.tagName).toBe('P');
    expect(element.classList.contains('text-base')).toBe(true);
  });

  it('applies correct classes for each variant', () => {
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'] as const;
    variants.forEach((variant) => {
      render(<Typography variant={variant}>{variant} text</Typography>);
      const element = screen.getByText(`${variant} text`);
      expect(element.classList.contains(variant.startsWith('h') ? 'font-bold' : '')).toBe(variant.startsWith('h'));
      expect(element.classList.contains({
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
        body1: 'text-base',
        body2: 'text-sm',
        caption: 'text-xs',
      }[variant])).toBe(true);
    });
  });

  it('uses correct HTML tag for heading variants', () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
    headings.forEach((heading) => {
      render(<Typography variant={heading}>{heading} heading</Typography>);
      const element = screen.getByText(`${heading} heading`);
      expect(element.tagName).toBe(heading.toUpperCase());
    });
  });

  it('uses p tag for non-heading variants', () => {
    const nonHeadings = ['body1', 'body2', 'caption'] as const;
    nonHeadings.forEach((variant) => {
      render(<Typography variant={variant}>{variant} text</Typography>);
      const element = screen.getByText(`${variant} text`);
      expect(element.tagName).toBe('P');
    });
  });

  it('applies additional className', () => {
    render(<Typography className="custom-class">Custom Class Text</Typography>);
    const element = screen.getByText('Custom Class Text');
    expect(element.classList.contains('custom-class')).toBe(true);
  });
});