'use client';

import { JSX } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Overview } from '@/components/sections/Overview';
import { Details } from '@/components/sections/Details';

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Overview />
      <Details />
    </main>
  );
}
