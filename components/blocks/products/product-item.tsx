'use client';

import { type FC, type MouseEventHandler } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Expand, ShoppingCart } from 'lucide-react';

import type { Product } from '@/types';

import { useCartStore, usePreviewModalStore } from '@/hooks/stores';

import { Currency, IconButton } from '@/components/ui';

interface ProductItemProps {
  data: Product;
}

const ProductItem: FC<ProductItemProps> = ({ data }) => {
  const router = useRouter();
  const { onOpen } = usePreviewModalStore();
  const { addItem } = useCartStore();

  const handleOnClickPushToProductId = () => {
    router.push(`/product/${data.id}`);
  };

  const handlePreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onOpen(data);
  };

  const handleAddingItemToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  return (
    <div
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3 dark:bg-transparent"
      onClick={handleOnClickPushToProductId}
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          quality={50}
          sizes="100"
          className="aspect-square rounded-md object-cover"
        />

        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={handlePreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={handleAddingItemToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      {data.price.length > 0 ? <Currency value={data.price} /> : 'Loading'}
    </div>
  );
};

export default ProductItem;
