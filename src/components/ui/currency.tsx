import { memo } from 'react';
import type { FC } from 'react';

import { formatPrice } from '@/lib/utils';

type CurrencyProps = {
  value: string;
};

const Currency: FC<CurrencyProps> = ({ value }) => {
  return (
    <div className="font-semibold">
      <p>{formatPrice(+value)}</p>
    </div>
  );
};

export default memo(Currency);
