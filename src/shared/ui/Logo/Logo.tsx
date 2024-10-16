import React, { memo } from 'react';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME, APP_SLOGAN } from '@/shared/consts/appInfo';
import { ROUTS } from '@/shared/consts/routes';
import s from './Logo.module.scss';
import logoIcon from './logo.svg';

interface LogoProps {
  className?: string;
}

export const Logo = memo(({ className }: LogoProps) => {
  return (
    <Link className={cn(s.outer, className)} href={ROUTS.MAIN}>
      <Image className={s.pic} src={logoIcon} alt={APP_NAME} loading="eager" />
      <p className={s.info}>
        <strong className={s.title}>{APP_NAME}</strong>
        <span className={s.slogan}>{APP_SLOGAN}</span>
      </p>
    </Link>
  );
});

Logo.displayName = 'Logo';
