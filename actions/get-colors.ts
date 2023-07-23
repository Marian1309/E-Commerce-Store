import axios from 'axios';

import type { Color } from '@/types';

const getColors = async (): Promise<Color[]> => {
  const storeId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/storeId`);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;
  const { data } = await axios.get(URL);

  return data;
};

export default getColors;
