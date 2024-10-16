import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/styles/index.scss';
import { Montserrat } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/shared/consts/appInfo';
import { Header } from '@/widgets/Header';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-main',
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
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
