import React from 'react';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  let bg, color;
  switch (variant) {
    case 'secondary':
      bg = COLORS['button-secondary-bg'];
      color = COLORS['button-secondary-text'];
      break;
    case 'destructive':
      bg = COLORS['button-destructive-bg'];
      color = COLORS['button-destructive-text'];
      break;
    default:
      bg = COLORS['button-primary-bg'];
      color = COLORS['button-primary-text'];
  }
  return (
    <button
      style={{
        background: bg,
        color,
        padding: `${SPACING['spacing-3']} ${SPACING['spacing-6']}`,
        border: 'none',
        borderRadius: BORDER_RADIUS['radius-medium'],
        fontWeight: TYPOGRAPHY['typography-h4'].fontWeight,
        fontSize: TYPOGRAPHY['typography-h4'].fontSize,
      }}
      {...props}
    >
      {children}
    </button>
  );
}