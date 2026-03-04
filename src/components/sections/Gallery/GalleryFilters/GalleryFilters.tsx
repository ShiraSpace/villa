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
          className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
            activeCategory === category.id
              ? 'bg-gold-500 text-white border-gold-500'
              : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
          }`}
        >
          {category.label}
        </button>
      ))}
    </motion.div>
  );
}
