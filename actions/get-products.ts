import { cache } from 'react';

import axios from 'axios';
import queryString from 'query-string';

import type { Product } from '@/types';

import getStoreId from './get-store-id';

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = cache(async (query: Query): Promise<Product[]> => {
  const { categoryId, colorId, sizeId, isFeatured } = query;

  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId,
      colorId,
      sizeId,
      isFeatured
    }
  });

  const { data } = await axios.get(url);

  return data;
});

export default getProducts;
