import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import { ModalProvider, ThemeProvider } from '@/lib/providers';
import { toastOptions } from '@/lib/toast';

import { Footer, Navbar } from '@/components/layout';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'E-Commerce Store',
  authors: [{ name: 'Marian Pidchashyi', url: 'https://github.com/Marian1309' }]
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Toaster toastOptions={toastOptions} />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
