import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import { ICONS } from '@/lib/constants';
import { ModalProvider } from '@/lib/providers';
import { toastOptions } from '@/lib/toast';

import { Footer, Navbar } from '@/common/layout';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'E-Commerce Client',
  icons: { icon: ICONS.favicon },
  authors: [{ name: 'Marian Pidchashyi', url: 'https://github.com/Marian1309' }]
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Toaster toastOptions={toastOptions} />
        <ModalProvider />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
