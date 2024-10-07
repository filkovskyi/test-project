import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from '../../app/components/ui/badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeDefined();
  });

  it('applies default variant classes', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge.classList.contains('bg-gray-100')).toBe(true);
    expect(badge.classList.contains('text-foreground')).toBe(true);
  });

  it('applies custom variant classes', () => {
    render(<Badge variant="primary">Primary Badge</Badge>);
    const badge = screen.getByText('Primary Badge');
    expect(badge.classList.contains('bg-primary')).toBe(true);
    expect(badge.classList.contains('text-background')).toBe(true);
  });

  it('applies additional className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText('Custom Badge');
    expect(badge.classList.contains('custom-class')).toBe(true);
  });

  it('renders with all variants', () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;
    variants.forEach((variant) => {
      render(<Badge variant={variant}>{`${variant} Badge`}</Badge>);
      const badge = screen.getByText(`${variant} Badge`);
      expect(badge).toBeDefined();
    });
  });
});