import type { FC } from 'react';

import Image from 'next/image';

import { Tab } from '@headlessui/react';

import type { Image as ImageType } from '@/types';

import { cn } from '@/lib/utils';

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square cursor-pointer rounded-md bg-white flex-center">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square overflow-hidden rounded-md full">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
