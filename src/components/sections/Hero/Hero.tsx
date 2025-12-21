'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { TEST_ID } from './constants';
import { containerVariants } from './animations';
import { HeroBackground } from './HeroBackground';
import { HeroTitle } from './HeroTitle';
import { HeroTagline } from './HeroTagline';
import { HeroCTA } from './HeroCTA';

export function Hero(): JSX.Element {
  return (
    <section
      id='hero'
      data-testid={TEST_ID.HERO_SECTION}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <HeroBackground />
      <motion.div
        className='container-custom text-center text-white z-10 relative'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <HeroTitle />
        <HeroTagline />
        {/*<HeroCTA />*/}
      </motion.div>
    </section>
  );
}
