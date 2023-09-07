import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLDivElement>;

const Skeleton: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-200', className)}
      {...props}
    />
  );
};

export default memo(Skeleton);
