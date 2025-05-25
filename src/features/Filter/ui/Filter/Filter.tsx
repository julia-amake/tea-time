import React, { memo } from 'react';
import cn from 'clsx';
import s from './Filter.module.scss';

type FilterProps = {
  className?: string;
};

export const Filter = memo(({ className }: FilterProps) => {
  return (
    <div className={cn(s.outer, className)}>
      Чекбоксы: можно собирать и новинки
      <br />
      Цена от и до редактируемые поля + внизу ползунок
      <br />
      Добавки - ограниченный список тегов с кнопкой &#34;еще сколько&#34; или просто показать все
    </div>
  );
});

Filter.displayName = 'Filter';
