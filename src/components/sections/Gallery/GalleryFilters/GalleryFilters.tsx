'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_CONTENT, TEST_ID, GalleryCategory } from '../constants';
import { itemVariants } from '../animations';

interface GalleryFiltersProps {
  activeCategory: GalleryCategory | 'all';
  onCategoryChange: (category: GalleryCategory | 'all') => void;
}

export function GalleryFilters({
  activeCategory,
  onCategoryChange,
}: GalleryFiltersProps): JSX.Element {
  return (
    <motion.div
      variants={itemVariants}
      data-testid={TEST_ID.GALLERY_FILTERS}
      className='flex gap-3 mb-8 justify-center flex-wrap md:flex-nowrap md:overflow-x-auto md:scrollbar-hide'
    >
      {GALLERY_CONTENT.CATEGORIES.map((category) => (
        <button
          key={category.id}
          data-testid={TEST_ID.GALLERY_FILTER_BUTTON}
          onClick={(): void => onCategoryChange(category.id)}
          className={`relative px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors duration-200 ${
            activeCategory === category.id
              ? 'text-white border-gold-500'
              : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
          }`}
        >
          {activeCategory === category.id && (
            <motion.span layoutId='activeFilter' className='absolute inset-0 bg-gold-500 rounded-full' />
          )}
          <span className='relative z-10'>{category.label}</span>
        </button>
      ))}
    </motion.div>
  );
}
