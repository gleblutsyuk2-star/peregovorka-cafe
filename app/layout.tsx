import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Переговорка — кофе, выпечка и встречи',
  description: 'Кофейня на улице Радио в Москве. Спешелти кофе, свежая выпечка и место для встреч.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
