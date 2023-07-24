import axios from 'axios';

import type { Category } from '@/types';

import getStoreId from './get-store-id';

const getCategory = async (id: string): Promise<Category> => {
  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const { data } = await axios.get(`${URL}/${id}`);

  return data;
};

export default getCategory;
