'use client';

import { type FC, type MouseEventHandler } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Expand, ShoppingCart } from 'lucide-react';

import type { Product } from '@/types';

import useCartStore from '@/hooks/use-cart';
import usePreviewModalStore from '@/hooks/use-preview-modal';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';

type ProductItemProps = {
  data: Product;
};

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
          alt={data.name}
          className="aspect-square rounded-md object-cover"
          fill
          priority
          quality={50}
          sizes="100"
          src={data.images[0].url}
        />

        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand className="text-gray-600" size={20} />}
              onClick={handlePreview}
            />
            <IconButton
              icon={<ShoppingCart className="text-gray-600" size={20} />}
              onClick={handleAddingItemToCart}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <Currency value={data.price} />
    </div>
  );
};

export default ProductItem;
