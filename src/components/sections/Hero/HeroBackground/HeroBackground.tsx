import { JSX } from 'react';
import Image from 'next/image';
import { HERO_CONTENT, TEST_ID } from '../constants';

export function HeroBackground(): JSX.Element {
  return (
    <>
      <Image
        src='/images/hero/hero-1.jpg'
        alt={HERO_CONTENT.IMAGE_ALT}
        fill
        priority
        quality={90}
        sizes='100vw'
        className='object-cover'
      />
      <div
        data-testid={TEST_ID.HERO_BACKGROUND_OVERLAY}
        className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60'
      />
    </>
  );
}
