'use client';

import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import useCartStore from '@/hooks/use-cart';

import Container from '@/components/ui/container';

import CartItem from './components/cart-item';
import Summary from './components/summary';

const CartPage: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { items } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-transparent">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Shopping Cart
          </h1>

          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {items.length === 0 && (
                <p className="text-xl text-neutral-500">
                  No items added to cart
                </p>
              )}

              <ul>
                {items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
