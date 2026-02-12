import { JSX } from 'react';
import { TEST_ID } from '../constants';

export function HeroBackground(): JSX.Element {
  return (
    <>
      <video
        data-testid={TEST_ID.HERO_BACKGROUND_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 h-full w-full object-cover'
      >
        <source src='/images/video/part_3.mov' type='video/mp4' />
      </video>
      <div
        data-testid={TEST_ID.HERO_BACKGROUND_OVERLAY}
        className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60'
      />
    </>
  );
}
