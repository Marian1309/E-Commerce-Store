import { memo } from 'react';
import type { FC } from 'react';

const NoResults: FC = () => {
  return (
    <div className="pt-4 text-2xl flex-center full">No results found.</div>
  );
};

export default memo(NoResults);
