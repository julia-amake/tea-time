import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/styles/index.scss';

export const metadata: Metadata = {
  title: 'Tea Time — больше, чем просто чай',
  description: 'Интернет-магазин чая с доставкой на дом',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
