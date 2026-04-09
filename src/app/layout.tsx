import React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Header } from '@/components/navigation/Header';

export const metadata: Metadata = {
  title: 'Baan Sook - Happiness in the jungle',
  description:
    'Experience luxury living at Koh Phangan. Your dream vacation awaits at our beautiful villa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
