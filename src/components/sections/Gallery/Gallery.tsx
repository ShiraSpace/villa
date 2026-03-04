'use client';

import { JSX, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEST_ID, GALLERY_CONTENT, GalleryCategory } from './constants';
import { containerVariants } from './animations';
import { GalleryHeader } from './GalleryHeader';
import { GalleryFilters } from './GalleryFilters';
import { GalleryScroll } from './GalleryScroll';
import { GalleryLightbox } from './GalleryLightbox';

export function Gallery(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === 'all'
        ? GALLERY_CONTENT.IMAGES
        : GALLERY_CONTENT.IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const handleImageClick = useCallback((index: number): void => {
    setLightboxIndex(index);
  }, []);

  const handleClose = useCallback((): void => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback((): void => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  const handleNext = useCallback((): void => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
  }, [filteredImages.length]);

  return (
    <section
      id='gallery'
      data-testid={TEST_ID.GALLERY_SECTION}
      className='section-padding bg-stone-50'
    >
      <div className='container-custom'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          <GalleryHeader />
          <GalleryFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </motion.div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <GalleryScroll images={filteredImages} onImageClick={handleImageClick} />
          </motion.div>
        </AnimatePresence>
      </div>
      <GalleryLightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
