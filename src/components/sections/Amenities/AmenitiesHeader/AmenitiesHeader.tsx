'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { AMENITIES_CONTENT, TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function AmenitiesHeader(): JSX.Element {
  return (
    <div className='text-center mb-12 lg:mb-16'>
      <motion.p
        variants={itemVariants}
        data-testid={TEST_ID.AMENITIES_SUBTITLE}
        className='inline-block text-gold-500 font-medium tracking-wider uppercase text-sm mb-4'
      >
        {AMENITIES_CONTENT.SUBTITLE}
      </motion.p>
      <motion.h2
        variants={itemVariants}
        data-testid={TEST_ID.AMENITIES_TITLE}
        className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6'
      >
        <span className='text-stone-900'>{AMENITIES_CONTENT.TITLE}</span>
        <span className='text-gold-500'>{AMENITIES_CONTENT.TITLE_ACCENT}</span>
      </motion.h2>
    </div>
  );
}
