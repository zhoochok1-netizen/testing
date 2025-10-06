import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Testovoe Middle Frontend',
  description: 'Тестовое задание для Middle Frontend разработчика',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
