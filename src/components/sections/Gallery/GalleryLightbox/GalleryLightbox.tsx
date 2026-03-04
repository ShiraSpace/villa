'use client';

import { JSX, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage, TEST_ID } from '../constants';
import { lightboxVariants, lightboxImageVariants } from '../animations';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps): JSX.Element {
  const isOpen = currentIndex !== null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return (): void => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return (): void => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-testid={TEST_ID.GALLERY_LIGHTBOX}
          variants={lightboxVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={onClose}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/[0.92]'
        >
          <button
            data-testid={TEST_ID.GALLERY_LIGHTBOX_CLOSE}
            onClick={onClose}
            className='absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200'
            aria-label='Close lightbox'
          >
            <X size={24} />
          </button>

          <button
            data-testid={TEST_ID.GALLERY_LIGHTBOX_PREV}
            onClick={(e): void => {
              e.stopPropagation();
              onPrev();
            }}
            className='absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full text-white/80 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-200'
            aria-label='Previous image'
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div
            variants={lightboxImageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e): void => e.stopPropagation()}
            className='relative w-[90vw] h-[80vh] max-w-6xl'
          >
            <Image
              data-testid={TEST_ID.GALLERY_LIGHTBOX_IMAGE}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes='90vw'
              className='object-contain'
              priority
            />
          </motion.div>

          <button
            data-testid={TEST_ID.GALLERY_LIGHTBOX_NEXT}
            onClick={(e): void => {
              e.stopPropagation();
              onNext();
            }}
            className='absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full text-white/80 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-200'
            aria-label='Next image'
          >
            <ChevronRight size={24} />
          </button>

          <div
            data-testid={TEST_ID.GALLERY_LIGHTBOX_COUNTER}
            className='absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans'
          >
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
