'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';

import type { Color, Size } from '@/types';

import CustomButton from '@/components/ui/custom-button';
import IconButton from '@/components/ui/icon-button';

import Filter from './filter';

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnOpen = () => setIsOpen(true);
  const handleOnClose = () => setIsOpen(false);

  return (
    <>
      <CustomButton
        className="flex items-center gap-x-2 lg:hidden"
        onClick={handleOnOpen}
      >
        Filters <Plus size={20} />
      </CustomButton>

      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={handleOnClose}
        open={isOpen}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <Dialog.Panel className="relative ml-auto flex max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl full">
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X className="dark:text-black" size={15} />}
                onClick={handleOnClose}
              />
            </div>

            <div className="p-4">
              <Filter
                className="dark:text-black"
                data={sizes}
                name="Sizes"
                valueKey="sizeId"
              />
              <Filter
                className="dark:text-black"
                data={colors}
                name="Colors"
                valueKey="colorId"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
