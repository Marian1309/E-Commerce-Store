import { cache } from 'react';

import axios from 'axios';

import type { Product } from '@/types';

import getStoreId from './get-store-id';

const getProduct = cache(async (id: string): Promise<Product> => {
  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

  const { data } = await axios.get(`${URL}/${id}`);

  return data;
});

export default getProduct;
