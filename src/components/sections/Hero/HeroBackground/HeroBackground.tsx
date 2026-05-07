'use client';

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import { TEST_ID, VIDEO_FADE_DELAY_MS } from '../constants';

const POSTER_SRC = '/images/gallery/exterior/balcony-and-pool.jpg';

export function HeroBackground(): JSX.Element {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), VIDEO_FADE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Image
        data-testid={TEST_ID.HERO_BACKGROUND_IMAGE}
        src={POSTER_SRC}
        alt='Baan Sook Villa — pool and balcony'
        fill
        priority
        className='absolute inset-0 object-cover'
      />
      <video
        data-testid={TEST_ID.HERO_BACKGROUND_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER_SRC}
        onLoadedData={() => setVideoReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src='/images/video/website_overview.mp4' type='video/mp4' />
      </video>
      <div
        data-testid={TEST_ID.HERO_BACKGROUND_OVERLAY}
        className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60'
      />
    </>
  );
}
