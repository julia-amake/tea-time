import React, { memo } from 'react';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from './mocks';
import s from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar = memo(({ className }: SidebarProps) => {
  return (
    <div className={cn(s.outer, className)}>
      <h2 className={s.title}>Каталог</h2>
      <ul className={s.list}>
        {categories.map(({ id, name, link, image }) => (
          <li className={s.item} key={id}>
            <Link className={s.link} href={link}>
              <Image className={s.pic} src={image || ''} alt={name} width={56} height={56} />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
