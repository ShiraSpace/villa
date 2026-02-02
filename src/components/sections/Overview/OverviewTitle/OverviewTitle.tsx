'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

export function OverviewTitle(): JSX.Element {
  return (
    <motion.h2
      data-testid={TEST_ID.OVERVIEW_TITLE}
      variants={itemVariants}
      className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6'
    >
      {OVERVIEW_CONTENT.TITLE}
    </motion.h2>
  );
}
