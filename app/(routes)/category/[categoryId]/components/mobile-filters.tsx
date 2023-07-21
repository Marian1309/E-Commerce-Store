'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';

import type { Color, Size } from '@/types';

import { Button, IconButton } from '@/common/ui';

import Filter from './filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnOpen = () => setIsOpen(true);
  const handleOnClose = () => setIsOpen(false);

  return (
    <>
      <Button
        onClick={handleOnOpen}
        className="flex items-center gap-x-2 lg:hidden"
      >
        Filters <Plus size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={handleOnClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <Dialog.Panel className="relative ml-auto flex max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl full">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={handleOnClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
