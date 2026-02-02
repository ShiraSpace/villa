'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { TEST_ID } from './constants';
import { containerVariants } from './animations';
import { OverviewSubtitle } from './OverviewSubtitle';
import { OverviewTitle } from './OverviewTitle';
import { OverviewDescription } from './OverviewDescription';
import { OverviewCollage } from './OverviewCollage';

export function Overview(): JSX.Element {
  return (
    <section
      id='overview'
      data-testid={TEST_ID.OVERVIEW_SECTION}
      className='section-padding bg-stone-50'
    >
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            className='order-2 lg:order-1'
          >
            <OverviewSubtitle />
            <OverviewTitle />
            <OverviewDescription />
          </motion.div>
          <div className='order-1 lg:order-2'>
            <OverviewCollage />
          </div>
        </div>
      </div>
    </section>
  );
}
