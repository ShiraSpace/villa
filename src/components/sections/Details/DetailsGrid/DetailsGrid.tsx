'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { DETAILS_CONTENT, TEST_ID } from '../constants';
import { containerVariants } from '../animations';
import { DetailsFact } from '../DetailsFact';

export function DetailsGrid(): JSX.Element {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      data-testid={TEST_ID.DETAILS_GRID}
      className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'
    >
      {DETAILS_CONTENT.FACTS.map((fact) => (
        <DetailsFact key={fact.id} title={fact.title} description={fact.description} />
      ))}
    </motion.div>
  );
}
