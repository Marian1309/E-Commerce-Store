import axios from 'axios';

import getStoreId from './get-store-id';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const getBillboard = async () => {
  const storeId = await getStoreId();

  const { data: billboardId } = await axios.get(`${API_URL}/billboardId`);

  const URL = `${API_URL}/${storeId}/billboards`;

  const { data } = await axios.get(`${URL}/${billboardId}`);

  return data ?? {};
};

export default getBillboard;
