'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { formatPrice } from '@/lib/utils';

interface CurrencyProps {
  value: string;
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatPrice(+value)}</div>;
};

export default Currency;
