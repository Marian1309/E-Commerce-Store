import axios from 'axios';

import type { Size } from '@/types';

const getSizes = async (): Promise<Size[]> => {
  const storeId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/storeId`);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;
  const { data } = await axios.get(URL);

  return data;
};

export default getSizes;
