import { cache } from 'react';

import axios from 'axios';

import type { Category } from '@/types';

import getStoreId from './get-store-id';

const getCategories = cache(async (): Promise<Category[]> => {
  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const { data } = await axios.get(URL);

  return data;
});

export default getCategories;
