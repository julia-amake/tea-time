import { ElementType, HTMLProps } from 'react';
import cn from 'clsx';
import s from './Container.module.scss';

interface ContainerProps extends Omit<HTMLProps<HTMLElement>, 'as'> {
  as: ElementType;
}

export const Container = ({ as: Elem, children, className, ...otherProps }: ContainerProps) => {
  return (
    <Elem className={cn(s.outer, className)} {...otherProps}>
      {children}
    </Elem>
  );
};
