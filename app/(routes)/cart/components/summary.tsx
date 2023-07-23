'use client';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import axios from 'axios';
import { toast } from 'react-hot-toast';

import { useCartStore } from '@/hooks/stores';

import { Button, Currency } from '@/common/ui';

const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCartStore();

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((acc, curr) => {
    return acc + +curr.price;
  }, 0);

  const handleOnCheckout = async () => {
    const { data: storeId } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/storeId`
    );

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-8 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="border-t border-gray-200 pt-4 flex-between">
          <p className="text-base font-medium text-gray-900">Order total</p>

          <Currency value={String(totalPrice)} />
        </div>
      </div>

      <Button
        className="mt-5 w-full"
        disabled={items.length === 0}
        onClick={handleOnCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
