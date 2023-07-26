import Link from 'next/link';

import { getCategories } from '@/actions';

import { ThemeToggle } from '@/components/blocks';
import { Container } from '@/components/ui';

import MainNav from './main-nav';
import NavbarActions from './navbar-actions';

export const revalidate = 60;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Link
              href="/"
              className="ml-4 flex gap-x-2 dark:text-white lg:ml-0"
            >
              <p className="text-xl font-bold">STORE</p>
            </Link>

            <MainNav data={categories} />
          </div>

          <div className="flex gap-x-3">
            <ThemeToggle />
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
