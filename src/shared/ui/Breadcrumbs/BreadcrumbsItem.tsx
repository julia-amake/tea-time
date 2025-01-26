import React from 'react';
import s from './Breadcrumbs.module.scss';

export interface BreadcrumbsItem {
  name: string;
  link: string;
}

interface BreadcrumbsItemProps extends BreadcrumbsItem {
  index: number;
}

export const BreadcrumbsItem = ({ index, name, link }: BreadcrumbsItemProps) => {
  return (
    <li
      className={s.item}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <a className={s.link} href={link} itemProp="item">
        <span itemProp="name">{name}</span>
      </a>
      <meta itemProp="position" content={index.toString()} />
    </li>
  );
};
