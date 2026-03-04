'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { DETAILS_CONTENT, TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function DetailsHeader(): JSX.Element {
  return (
    <>
      <motion.p
        variants={itemVariants}
        data-testid={TEST_ID.DETAILS_SUBTITLE}
        className='inline-block text-gold-500 font-medium tracking-wider uppercase text-sm mb-4'
      >
        {DETAILS_CONTENT.SUBTITLE}
      </motion.p>
      <motion.h2
        variants={itemVariants}
        data-testid={TEST_ID.DETAILS_TITLE}
        className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6'
      >
        {DETAILS_CONTENT.TITLE}
      </motion.h2>
    </>
  );
}
