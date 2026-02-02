'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { TEST_ID } from '../constants';
import { factVariants } from '../animations';

interface DetailsFactProps {
  title: string;
  description: string;
}

export function DetailsFact({ title, description }: DetailsFactProps): JSX.Element {
  return (
    <motion.div
      variants={factVariants}
      data-testid={TEST_ID.DETAILS_FACT}
      className='p-4 lg:p-6 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-300'
    >
      <h3 className='font-serif font-semibold text-lg lg:text-xl text-stone-900 mb-2'>{title}</h3>
      <p className='text-stone-600 text-sm lg:text-base'>{description}</p>
    </motion.div>
  );
}
