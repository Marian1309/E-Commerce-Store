import { cache } from 'react';

import axios from 'axios';

const getStoreId = cache(async () => {
  const { data: storeId } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/storeId`
  );

  return storeId;
});

export default getStoreId;
