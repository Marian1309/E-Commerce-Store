'use client';

import type { FC } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import queryString from 'query-string';

import type { Color, Size } from '@/types';

import { cn } from '@/lib/utils';

import CustomButton from '@/components/ui/custom-button';

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
  className?: string;
};

const Filter: FC<FilterProps> = ({ data, name, valueKey, className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleOnClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3
        className={cn(
          'text-lg font-semibold text-gray-800 dark:text-white',
          className
        )}
      >
        {name}
      </h3>

      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <CustomButton
              className={cn(
                'rounded-md border border-gray-300 bg-white text-sm text-gray-800 dark:bg-gray-800 dark:text-white',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => handleOnClick(filter.id)}
            >
              {filter.name}
            </CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
