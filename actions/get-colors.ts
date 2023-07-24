import axios from 'axios';

import type { Color } from '@/types';

import getStoreId from './get-store-id';

const getColors = async (): Promise<Color[]> => {
  const storeId = await getStoreId();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;
  const { data } = await axios.get(URL);

  return data;
};

export default getColors;
