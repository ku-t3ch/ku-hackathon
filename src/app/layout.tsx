import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Providers } from './providers';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KU Hackathon',
  description: 'KU Hackathon กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="flex flex-col pb-10">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
