import axios from 'axios';

const getBillboard = async () => {
  const { data: storeId } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/storeId`
  );

  const { data: billboardId } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/billboardId`
  );

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;

  const { data } = await axios.get(`${URL}/${billboardId}`);

  return data;
};

export default getBillboard;
