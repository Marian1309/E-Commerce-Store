'use client';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import axios from 'axios';
import { toast } from 'react-hot-toast';

import { getStoreId } from '@/actions';

import useCartStore from '@/hooks/use-cart';

import Currency from '@/components/ui/currency';
import CustomButton from '@/components/ui/custom-button';

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
    const storeId = await getStoreId();

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 dark:bg-transparent sm:p-6 lg:col-span-5 lg:mt-8 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="border-t border-gray-200 pt-4 flex-between">
          <p className="text-base font-medium text-gray-900 dark:text-white">
            Order total
          </p>

          <Currency value={String(totalPrice)} />
        </div>
      </div>

      <CustomButton
        className="mt-5 w-full"
        disabled={items.length === 0}
        onClick={handleOnCheckout}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default Summary;
