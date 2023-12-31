'use client';

import type { FC } from 'react';

import { ShoppingCart } from 'lucide-react';

import type { Product } from '@/types';

import useCartStore from '@/hooks/use-cart';

import Currency from '../ui/currency';
import CustomButton from '../ui/custom-button';

type InfoProps = {
  data: Product;
};

const Info: FC<InfoProps> = ({ data }) => {
  const { addItem } = useCartStore();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {data.name}
      </h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900 dark:text-white">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Size:</h3>
          <div>{data.size.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <CustomButton
          className="flex items-center gap-x-2"
          onClick={() => addItem(data)}
        >
          Add To Cart <ShoppingCart />
        </CustomButton>
      </div>
    </div>
  );
};

export default Info;
