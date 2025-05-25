import React, { memo, ReactNode, useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { useHover } from '@/shared/lib/hooks';
import s from './Dropdown.module.scss';

type DropdownProps = {
  trigger: ReactNode;
  content: ReactNode;
  hovered?: boolean;
  className?: string;
};

export const Dropdown = memo(({ trigger, content, hovered, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const { isHover, bindHover } = useHover();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (e: MouseEvent) => {
      if (!dropdownRef.current || dropdownRef.current.contains(e.target as Node)) return;
      setOpen(false);
    });
  }, []);

  useEffect(() => {
    if (!hovered) return;
    setOpen(isHover);
  }, [hovered, isHover]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(s.outer, className, { [s.outer_hovered]: isHover })}
      ref={dropdownRef}
      {...(hovered ? bindHover : {})}
    >
      <div className={s.trigger} onClick={handleToggle}>
        {trigger}
      </div>
      <div className={cn(s.dropdown, { [s.dropdown_closed]: !open })}>
        <div className={s.inner}>{content}</div>
      </div>
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
