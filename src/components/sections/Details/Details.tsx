'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { TEST_ID } from './constants';
import { containerVariants } from './animations';
import { DetailsImage } from './DetailsImage';
import { DetailsHeader } from './DetailsHeader';
import { DetailsGrid } from './DetailsGrid';

export function Details(): JSX.Element {
  return (
    <section
      id='details'
      data-testid={TEST_ID.DETAILS_SECTION}
      className='section-padding bg-white'
    >
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <div className='order-1'>
            <DetailsImage />
          </div>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            className='order-2'
          >
            <DetailsHeader />
            <DetailsGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
