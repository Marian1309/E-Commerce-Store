import Link from 'next/link';

import { getCategories } from '@/actions';

import { Container } from '@/common/ui';

import MainNav from './main-nav';
import NavbarActions from './navbar-actions';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">STORE</p>
          </Link>

          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
