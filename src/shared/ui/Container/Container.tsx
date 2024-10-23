import { ElementType, HTMLProps } from 'react';
import cn from 'clsx';
import s from './Container.module.scss';

type ContainerProps = Omit<HTMLProps<HTMLElement>, 'as'> & {
  as?: ElementType;
};

export const Container = ({
  as: Elem = 'div',
  children,
  className,
  ...otherProps
}: ContainerProps) => {
  return (
    <Elem className={cn(s.outer, className)} {...otherProps}>
      {children}
    </Elem>
  );
};
