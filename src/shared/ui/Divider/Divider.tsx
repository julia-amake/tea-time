import React, { memo } from 'react';
import cn from 'clsx';
import s from './Divider.module.scss';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'full' | 'middle';
  className?: string;
}

export const Divider = memo(
  ({ orientation = 'horizontal', variant = 'full', className }: DividerProps) => {
    return (
      <span
        className={cn(
          s.outer,
          className,
          s[orientation],
          s[variant],
          s[`${orientation}-${variant}`],
        )}
      />
    );
  },
);

Divider.displayName = 'Divider';
