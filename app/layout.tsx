import { ReactNode } from 'react';
import cn from 'clsx';
import type { Metadata } from 'next';
import '@/app/styles/index.scss';
import { Montserrat, Rubik } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/shared/consts/appInfo';
import { Header } from '@/widgets/Header';

const main = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-main',
  display: 'swap',
});

const secondary = Rubik({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-secondary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${APP_NAME} — ${APP_SLOGAN.toLowerCase()}`,
  description: APP_DESCRIPTION,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body className={cn(main.variable, secondary.variable)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
