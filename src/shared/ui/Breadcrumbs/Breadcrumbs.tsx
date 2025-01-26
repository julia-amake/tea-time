import React, { memo } from 'react';
import cn from 'clsx';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import s from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  list: BreadcrumbsItem[];
  className?: string;
}

/**
 * Текущую страницу в список передавать не нужно
 */

export const Breadcrumbs = memo(({ list, className }: BreadcrumbsProps) => {
  if (list.length < 2) return null;

  return (
    <ul className={cn(s.outer, className)} itemScope itemType="https://schema.org/BreadcrumbList">
      {list.map(({ name, link }, idx) => (
        <BreadcrumbsItem index={idx} key={idx} name={name} link={link} />
      ))}
    </ul>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
