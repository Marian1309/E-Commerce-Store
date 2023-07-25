import type { FC } from 'react';

import type { Billboard as BillboardType } from '@/types';

interface BillboardProps {
  data: BillboardType;
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        className="relative aspect-square overflow-hidden rounded-xl md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="flex-col gap-y-8 text-center flex-center full">
          <p className="max-w-xs text-3xl font-bold text-gray-900 sm:max-w-xl sm:text-5xl lg:text-6xl">
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
