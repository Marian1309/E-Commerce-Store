'use client';

import { type FC, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { ShoppingBag } from 'lucide-react';

import useCartStore from '@/hooks/use-cart';

import CustomButton from '@/components/ui/custom-button';

const NavbarActions: FC = () => {
  const router = useRouter();
  const { items } = useCartStore();

  const navbarItems = useMemo(() => items, [items]);

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <CustomButton
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag color="white" size={20} />

        <span className="ml-2 text-sm font-medium text-white">
          {navbarItems.length}
        </span>
      </CustomButton>
    </div>
  );
};

export default NavbarActions;
