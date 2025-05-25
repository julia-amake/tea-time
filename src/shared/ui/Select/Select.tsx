'use client';
import React, { ChangeEvent, useEffect, useId, useState } from 'react';
import cn from 'clsx';
import { useHover } from '@/shared/lib/hooks';
import { typedMemo } from '@/shared/lib/utils';
import { Button, ButtonProps } from '@/shared/ui/Button/Button';
import s from './Select.module.scss';

export interface SelectOption {
  name: string;
  content: string;
}

type SelectProps<Value> = Pick<
  ButtonProps<'button'>,
  'size' | 'variant' | 'icon' | 'iconPosition' | 'iconClassName' | 'upper' | 'rounded'
> & {
  defaultText?: string | string[];
  value?: Value;
  options: SelectOption[];
  onChange?: (value: Value) => void;
  full?: boolean;
  disabled?: boolean;
  className?: string;
};

export const Select = typedMemo(
  <Value extends string>({
    options = [],
    defaultText = 'Не выбрано',
    value,
    onChange,
    size = 'm',
    variant = 'primary',
    full,
    upper,
    rounded,
    className,
    icon,
    iconPosition,
    iconClassName,
    disabled,
  }: SelectProps<Value>) => {
    const [isOpen, setIsOpen] = useState(true);
    const { isHover, bindHover } = useHover();
    const selectId = useId();

    useEffect(() => {
      setIsOpen(isHover);
    }, [isHover]);

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value as Value);
      setIsOpen(false);
    };

    if (!options.length) return null;

    return (
      <div className={cn(s.outer, className, { [s.outer_full]: full })} {...bindHover}>
        <Button
          className={s.value}
          onClick={handleToggle}
          size={size}
          variant={variant}
          upper={upper}
          rounded={rounded}
          icon={icon}
          iconPosition={iconPosition}
          iconClassName={iconClassName}
          full
          disabled={disabled}
        >
          {value || defaultText}
        </Button>
        <div>
          <div
            className={cn(s.options, s[`options_size-${size}`], {
              [s.options_active]: isOpen,
            })}
          >
            {options.map(({ name, content }) => (
              <label key={name} className={cn(s.option)}>
                {content}
                <input
                  className={s.input}
                  type="radio"
                  name={selectId}
                  value={name}
                  onChange={handleChange}
                  disabled={disabled}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  },
);
