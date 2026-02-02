'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

export function OverviewSubtitle(): JSX.Element {
  return (
    <motion.span
      data-testid={TEST_ID.OVERVIEW_SUBTITLE}
      variants={itemVariants}
      className='inline-block text-gold-500 font-medium tracking-wider uppercase text-sm mb-4'
    >
      {OVERVIEW_CONTENT.SUBTITLE}
    </motion.span>
  );
}
