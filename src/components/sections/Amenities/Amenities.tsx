'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { TEST_ID } from './constants';
import { containerVariants } from './animations';
import { AmenitiesHeader } from './AmenitiesHeader';
import { AmenitiesGrid } from './AmenitiesGrid';

export function Amenities(): JSX.Element {
  return (
    <section
      id='amenities'
      data-testid={TEST_ID.AMENITIES_SECTION}
      className='section-padding bg-stone-50'
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          <AmenitiesHeader />
        </motion.div>
        <AmenitiesGrid />
      </div>
    </section>
  );
}
