import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import { Toaster } from 'react-hot-toast';

import { figtree } from '@/lib/fonts';
import { toastOptions } from '@/lib/toast';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar/navbar';
import ModalProvider from '@/components/providers/modal';
import ThemeProvider from '@/components/providers/theme';

import './globals.scss';

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'E-Commerce Store',
  authors: [{ name: 'Marian Pidchashyi', url: 'https://github.com/Marian1309' }]
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Toaster toastOptions={toastOptions} />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ModalProvider />

          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
