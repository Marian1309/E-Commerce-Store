import axios from 'axios';

import type { Category } from '@/types';

const getCategory = async (id: string): Promise<Category> => {
  const storeId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/storeId`);
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const { data } = await axios.get(`${URL}/${id}`);

  return data;
};

export default getCategory;
