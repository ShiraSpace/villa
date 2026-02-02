'use client';

import { JSX } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Overview } from '@/components/sections/Overview';

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Overview />
    </main>
  );
}
