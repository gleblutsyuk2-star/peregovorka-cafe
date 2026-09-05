import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Меню Переговорки',
  description: 'Кофе, авторские напитки, еда и десерты в Переговорке на улице Радио',
};

export default function MenuLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
