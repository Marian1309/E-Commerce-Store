import type { FC } from 'react';

import Container from '@/components/ui/container';
import Skeleton from '@/components/ui/skeleton';

const Loading: FC = () => {
  return (
    <Container>
      <div className="h-full w-full p-8">
        <Skeleton className="aspect-[2.4/1.2] w-full rounded-xl" />

        <div className="mt-8 h-full lg:grid lg:grid-cols-5 lg:gap-x-8">
          <div className="hidden lg:block">
            <Skeleton className="h-[559px] w-full rounded-xl" />
          </div>

          <div className="mt-6 lg:col-span-4 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="aspect-square rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
