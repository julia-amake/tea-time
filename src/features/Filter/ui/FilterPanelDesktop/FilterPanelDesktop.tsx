import React, { memo } from 'react';
import cn from 'clsx';
import s from './FilterPanelDesktop.module.scss';

type FilterPanelDesktopProps = {
  className?: string;
};

export const FilterPanelDesktop = memo(({ className }: FilterPanelDesktopProps) => {
  return <div className={cn(s.outer, className)}>...</div>;
});

FilterPanelDesktop.displayName = 'FilterPanelDesktop';
