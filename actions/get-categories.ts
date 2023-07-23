import axios from 'axios';

import type { Category } from '@/types';

const getCategories = async (): Promise<Category[]> => {
  const storeId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/storeId`);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const { data } = await axios.get(URL);

  return data;
};

export default getCategories;
