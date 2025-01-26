import { ReactElement } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import { typedMemo } from '@/shared/lib/utils/typedMemo';
import LoadingIcon from '@/shared/assets/icons/Loading.svg';
import s from './Button.module.scss';

type ButtonType = 'button' | 'link' | 'a';
type ButtonSize = 's' | 'm' | 'l';
type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'text';
type ButtonTextPosition = 'center' | 'left' | 'right';
type ButtonIconPosition = 'left' | 'right';

export type ButtonProps<T> = {
  /**
   * "button" (дефолтное) для кнопок,
   * "link" для ссылок внутри приложения,
   * "а" для внешних ссылок
   */
  as?: T;
  size?: ButtonSize;
  variant?: ButtonVariant;
  textPosition?: ButtonTextPosition;
  isLoading?: boolean;
  full?: boolean;
  upper?: boolean;
  rounded?: boolean;
  className?: string;
  icon?: SVGType;
  iconPosition?: ButtonIconPosition;
  iconClassName?: string;
  /**
   * Если содержит несколько элементов,
   * их нужно обернуть в общую обертку,
   * чтобы не добавлялись лишние отступы между этими элементами
   */
  children?: string | string[] | ReactElement;
  disabled?: boolean;
  type?: T extends 'button' ? 'button' | 'submit' | 'reset' : never;
  onClick?: T extends 'button' ? () => void : never;
  /**
   * Укажите as="link" (для ссылок внутри приложения)
   * или as="а" (для внешних ссылок)
   */
  href?: T extends 'button' ? never : string;
};

export const Button = typedMemo(<T extends ButtonType = 'button'>(props: ButtonProps<T>) => {
  const {
    as = 'button',
    size = 'm',
    variant = 'primary',
    rounded,
    upper,
    full,
    isLoading,
    children,
    textPosition = 'center',
    icon,
    iconPosition,
    iconClassName,
    disabled,
    className,
    type,
    onClick,
    href,
  } = props;

  const Icon = isLoading ? LoadingIcon : icon;

  if (!children && !Icon) return null;

  const outerClassNames = cn(
    className,
    s.outer,
    s[`outer_size-${size}`],
    s[`outer_variant-${variant}`],
    s[`outer_text-${textPosition}`],
    {
      [s.outer_disabled]: disabled || isLoading,
      [s.outer_clickable]: !disabled && !isLoading && (href || onClick),
      [s.outer_full]: full,
      [s.outer_iconOnly]: !children,
      [s.outer_rounded]: rounded,
      [s.outer_upper]: upper,
    },
  );

  const iconClassNames = cn(iconClassName, s.icon, s[`icon_size-${size}`], {
    [s.icon_right]: iconPosition === 'right',
  });

  const content = (
    <>
      {Icon && <Icon className={iconClassNames} />}
      {children && children}
    </>
  );

  if (as === 'button')
    return (
      <button
        className={outerClassNames}
        disabled={disabled || isLoading}
        type={type}
        onClick={onClick}
      >
        {content}
      </button>
    );

  if (!href) return <div className={outerClassNames}>{content}</div>;

  const Elem = as === 'a' ? 'a' : Link;

  return (
    <Elem
      className={outerClassNames}
      href={href}
      {...(as === 'a' ? { rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </Elem>
  );
});

Object.defineProperty(Button, 'displayName', { value: 'Button' });
