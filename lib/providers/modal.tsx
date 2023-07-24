'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import PreviewModal from '@/components/modals/preview-modal';

const ModalProvider: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <PreviewModal />;
};

export default ModalProvider;
