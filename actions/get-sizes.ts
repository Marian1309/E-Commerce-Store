import { cache } from 'react';

import axios from 'axios';

import type { Size } from '@/types';

import getStoreId from './get-store-id';

const getSizes = cache(async (): Promise<Size[]> => {
  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;
  const { data } = await axios.get(URL);

  return data;
});

export default getSizes;
