import axios from 'axios';
import queryString from 'query-string';

import type { Product } from '@/types';

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const { data: storeId } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/storeId`
  );

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;
  const { categoryId, colorId, sizeId, isFeatured } = query;

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
};

export default getProducts;
