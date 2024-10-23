import React, { memo } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import { ROUTS } from '@/shared/consts/routes';
import CartIcon from '@/shared/assets/icons/Cart.svg';
import CatalogIcon from '@/shared/assets/icons/Catalog.svg';
import UserIcon from '@/shared/assets/icons/User.svg';
import s from './HeaderMenu.module.scss';

type HeaderMenuProps = {
  className?: string;
};

export const HeaderMenu = memo(({ className }: HeaderMenuProps) => {
  return (
    <nav className={cn(s.outer, className)}>
      <Link className={s.item} href={ROUTS.CATALOG}>
        <CatalogIcon className={s.icon} />
        Каталог
      </Link>
      <Link className={s.item} href={ROUTS.SIGN_IN}>
        <UserIcon className={s.icon} />
        Профиль
      </Link>
      <Link className={s.item} href={ROUTS.SIGN_IN}>
        <CartIcon className={s.icon} />
        Корзина
      </Link>
    </nav>
  );
});

HeaderMenu.displayName = 'HeaderMenu';
