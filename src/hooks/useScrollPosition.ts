'use client';

import { useState, useEffect } from 'react';

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollPosition(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
