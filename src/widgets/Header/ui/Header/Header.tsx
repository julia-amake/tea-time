import React, { memo } from 'react';
import cn from 'clsx';
import { Container, Logo } from '@/shared/ui';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { HeaderShadow } from './HeaderShadow';
import s from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

export const Header = memo(({ className }: HeaderProps) => {
  return (
    <header className={cn(s.outer, className)}>
      <Container className={s.container}>
        <Logo />
        <HeaderMenu />
      </Container>
      <HeaderShadow />
    </header>
  );
});

Header.displayName = 'Header';
