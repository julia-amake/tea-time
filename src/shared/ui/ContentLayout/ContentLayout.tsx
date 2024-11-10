'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import cn from 'clsx';
import { getCssVariableValue } from '@/shared/lib/utils';
import { Container } from '@/shared/ui';
import s from './ContentLayout.module.scss';

type ContentLayoutProps = {
  sidebar?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const ContentLayout = ({ sidebar, children, className }: ContentLayoutProps) => {
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;

    let ticking = false;
    let lastScrollY = window.scrollY;
    let height = aside.offsetHeight;
    let windowHeight = window.innerHeight;
    const headerHeight = parseInt(getCssVariableValue('--height-header'));

    const makeSticky = () => {
      const currentScroll = window.scrollY;
      const direction = lastScrollY < currentScroll ? 'down' : 'up';
      const scrollDiff = Math.abs(lastScrollY - currentScroll);

      let offsetHeight = height - windowHeight;
      if (offsetHeight < 0) {
        offsetHeight = 0;
      }

      const currentTop = parseInt(getComputedStyle(aside).top) || 0;

      if (height <= windowHeight) {
        aside.style.top = headerHeight + 'px';
      } else if (direction === 'down') {
        const newSize = currentTop - scrollDiff;
        aside.style.top = (newSize < -offsetHeight ? -offsetHeight : newSize) + 'px';
      } else if (direction === 'up') {
        const newSize = currentTop + scrollDiff;
        aside.style.top = (newSize > headerHeight ? headerHeight : newSize) + 'px';
      }

      lastScrollY = currentScroll;
      ticking = false;
    };

    const setDefaults = () => {
      lastScrollY = window.scrollY;
      height = aside.offsetHeight;
      windowHeight = window.innerHeight;

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(makeSticky);
      ticking = true;
    };

    const handleResize = () => {
      if (ticking) return;
      window.requestAnimationFrame(setDefaults);
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className={cn(s.outer, className)}>
      <aside className={s.sidebar} ref={asideRef}>
        {sidebar}
      </aside>
      <main className={s.main}>{children}</main>
    </Container>
  );
};
