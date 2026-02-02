'use client';

import { JSX } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { collageContainerVariants, imageVariants } from '../animations';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

export function OverviewCollage(): JSX.Element {
  const images = OVERVIEW_CONTENT.IMAGES;

  return (
    <motion.div
      data-testid={TEST_ID.OVERVIEW_COLLAGE}
      variants={collageContainerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      className='grid grid-cols-2 gap-3 md:gap-4'
    >
      <motion.div
        variants={imageVariants}
        className='relative aspect-[4/3] rounded-lg overflow-hidden'
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes='(max-width: 768px) 50vw, 25vw'
          className='object-cover hover:scale-105 transition-transform duration-500'
          data-testid={`${TEST_ID.OVERVIEW_IMAGE}-0`}
        />
      </motion.div>
      <motion.div
        variants={imageVariants}
        className='relative aspect-[4/3] rounded-lg overflow-hidden'
      >
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          sizes='(max-width: 768px) 50vw, 25vw'
          className='object-cover hover:scale-105 transition-transform duration-500'
          data-testid={`${TEST_ID.OVERVIEW_IMAGE}-1`}
        />
      </motion.div>
      <motion.div
        variants={imageVariants}
        className='relative aspect-[4/3] rounded-lg overflow-hidden'
      >
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          sizes='(max-width: 768px) 50vw, 25vw'
          className='object-cover hover:scale-105 transition-transform duration-500'
          data-testid={`${TEST_ID.OVERVIEW_IMAGE}-2`}
        />
      </motion.div>
      <motion.div
        variants={imageVariants}
        className='relative aspect-[4/3] rounded-lg overflow-hidden'
      >
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          sizes='(max-width: 768px) 50vw, 25vw'
          className='object-cover hover:scale-105 transition-transform duration-500'
          data-testid={`${TEST_ID.OVERVIEW_IMAGE}-3`}
        />
      </motion.div>
    </motion.div>
  );
}
