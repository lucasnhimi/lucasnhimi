'use client';
import { Compass, Layout, List } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { SidebarItem } from './sidebar-item';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Início',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Pesquisar',
    href: '/search',
  },
];

const userRoutes = [
  {
    icon: List,
    label: 'Cursos',
    href: '/admin/courses',
  },
];

export function SidebarRoutes() {
  const pathname = usePathname();
  const isAdminPage = pathname?.includes('/admin');
  const routes = isAdminPage ? userRoutes : guestRoutes;

  return (
    <div className='flex flex-col w-full space-y-1.5 p-3'>
      {routes.map((route) => (
        <SidebarItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
