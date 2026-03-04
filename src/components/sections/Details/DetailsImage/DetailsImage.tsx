'use client';

import { JSX } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DETAILS_CONTENT, TEST_ID } from '../constants';
import { imageVariants } from '../animations';

export function DetailsImage(): JSX.Element {
  return (
    <motion.div
      variants={imageVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      className='relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl'
    >
      <Image
        src={DETAILS_CONTENT.IMAGE.src}
        alt={DETAILS_CONTENT.IMAGE.alt}
        fill
        className='object-cover'
        sizes='(max-width: 1024px) 100vw, 50vw'
        data-testid={TEST_ID.DETAILS_IMAGE}
      />
    </motion.div>
  );
}
