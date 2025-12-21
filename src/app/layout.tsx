import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';

export const metadata: Metadata = {
  title: 'Mips Grove | Luxury Villa Rental',
  description:
    'Experience luxury living at Mips Grove. Your dream vacation awaits at our beautiful villa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Header />
        {children}
      </body>
    </html>
  );
}
