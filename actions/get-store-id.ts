import axios from 'axios';

const getStoreId = async () => {
  const { data: storeId } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/storeId`
  );

  return storeId;
};

export default getStoreId;
