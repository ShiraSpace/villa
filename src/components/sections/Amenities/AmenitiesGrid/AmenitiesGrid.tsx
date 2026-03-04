'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { AMENITIES_CONTENT, TEST_ID } from '../constants';
import { containerVariants } from '../animations';
import { AmenityItem } from '../AmenityItem';

export function AmenitiesGrid(): JSX.Element {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      data-testid={TEST_ID.AMENITIES_GRID}
      className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-8 gap-x-4'
    >
      {AMENITIES_CONTENT.AMENITIES.map((amenity) => (
        <AmenityItem key={amenity.id} name={amenity.name} icon={amenity.icon} />
      ))}
    </motion.div>
  );
}
