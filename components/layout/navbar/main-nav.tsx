'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Category } from '@/types';

import { cn } from '@/lib/utils';

interface MainNavProps {
  data: Category[];
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-white',
            route.active ? 'text-black dark:text-white' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
