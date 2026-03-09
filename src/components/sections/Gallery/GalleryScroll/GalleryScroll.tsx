'use client';

import { JSX, useRef, useCallback, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage, TEST_ID } from '../constants';
import { GalleryCard } from '../GalleryCard';
import { gridContainerVariants } from '../animations';

interface GalleryScrollProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export function GalleryScroll({ images, onImageClick }: GalleryScrollProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = useCallback((amount: number): void => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent): void => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback((): void => {
    setIsDragging(false);
  }, []);

  return (
    <div className='relative'>
      <button
        data-testid={TEST_ID.GALLERY_SCROLL_LEFT}
        onClick={(): void => scroll(-900)}
        className='absolute left-[-1.25rem] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:shadow-lg hover:text-stone-900 transition-all duration-200 hidden md:flex'
        aria-label='Scroll left'
      >
        <ChevronLeft size={20} />
      </button>

      <motion.div
        ref={scrollRef}
        variants={gridContainerVariants}
        initial='hidden'
        animate='visible'
        data-testid={TEST_ID.GALLERY_SCROLL}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`grid grid-rows-2 grid-flow-col auto-cols-[200px] md:auto-cols-[240px] lg:auto-cols-[280px] gap-2 md:gap-3 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {images.map((image, index) => (
          <GalleryCard key={image.src} image={image} onClick={(): void => onImageClick(index)} />
        ))}
      </motion.div>

      <button
        data-testid={TEST_ID.GALLERY_SCROLL_RIGHT}
        onClick={(): void => scroll(900)}
        className='absolute right-[-1.25rem] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:shadow-lg hover:text-stone-900 transition-all duration-200 hidden md:flex'
        aria-label='Scroll right'
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
