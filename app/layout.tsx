import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tea Time",
  description: "Интернет-магазин на Next.js",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
