'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_CONTENT, TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function GalleryHeader(): JSX.Element {
  return (
    <motion.h2
      variants={itemVariants}
      data-testid={TEST_ID.GALLERY_SUBTITLE}
      className='heading-section text-center mb-8'
    >
      {GALLERY_CONTENT.SUBTITLE}
    </motion.h2>
  );
}
