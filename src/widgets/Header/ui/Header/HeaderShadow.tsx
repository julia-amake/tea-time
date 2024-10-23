'use client';
import { useEffect, useState } from 'react';
import cn from 'clsx';
import s from './Header.module.scss';

export const HeaderShadow = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={cn(s.shadow, { [s.shadow_scrolled]: scrolled })} />;
};
