'use client';

import { useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    toast.error('Path not Found');
    router.replace('/');
    console.clear();
  }, [router]);

  return null;
};

export default NotFound;
