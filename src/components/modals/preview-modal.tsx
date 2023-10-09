'use client';

import usePreviewModalStore from '@/hooks/use-preview-modal';

import Gallery from '../blocks/gallery/gallery';
import Info from '../blocks/info';
import Modal from '../blocks/modal';

const PreviewModal = () => {
  const { isOpen, onClose } = usePreviewModalStore();
  const product = usePreviewModalStore((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;