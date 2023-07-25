'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { ShoppingBag } from 'lucide-react';

import { useCartStore } from '@/hooks/stores';

import { CustomButton } from '@/components/ui';

const NavbarActions: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const router = useRouter();
  const { items } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <CustomButton
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </CustomButton>
    </div>
  );
};

export default NavbarActions;
