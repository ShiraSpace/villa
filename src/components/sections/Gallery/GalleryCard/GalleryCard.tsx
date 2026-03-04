'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage, TEST_ID } from '../constants';
import { cardVariants } from '../animations';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

export function GalleryCard({ image, onClick }: GalleryCardProps): JSX.Element {
  return (
    <motion.div
      variants={cardVariants}
      data-testid={TEST_ID.GALLERY_CARD}
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden cursor-pointer min-w-0 group ${
        image.tall ? 'row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes='280px'
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
    </motion.div>
  );
}
