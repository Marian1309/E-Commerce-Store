import axios from 'axios';

import type { Product } from '@/types';

const getProduct = async (id: string): Promise<Product> => {
  const storeId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/storeId`);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

  const { data } = await axios.get(`${URL}/${id}`);

  return data;
};

export default getProduct;
