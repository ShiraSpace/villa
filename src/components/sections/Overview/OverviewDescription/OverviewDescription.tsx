'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

export function OverviewDescription(): JSX.Element {
  return (
    <motion.p
      data-testid={TEST_ID.OVERVIEW_DESCRIPTION}
      variants={itemVariants}
      className='text-stone-600 text-lg leading-relaxed max-w-2xl'
    >
      {OVERVIEW_CONTENT.DESCRIPTION}
    </motion.p>
  );
}
