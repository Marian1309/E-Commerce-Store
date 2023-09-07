import type { FC } from 'react';

import Container from '@/components/ui/container';
import Skeleton from '@/components/ui/skeleton';

const Loading: FC = () => {
  return (
    <Container>
      <div className="h-full w-full p-8">
        <Skeleton className="aspect-[2.4/1.2] w-full rounded-xl" />

        <div className="mt-[100px] grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} className="aspect-square rounded-xl" />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Loading;
