'use client';

import { JSX } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Logo } from '@/components/navigation/Logo';
import { ContactButton } from '@/components/navigation/ContactButton';
import { Menu } from '@/components/navigation/Menu';
import { TEST_ID } from '@/components/navigation/constants';

export function Header(): JSX.Element {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const scrollClasses = isScrolled
    ? 'bg-white shadow-md backdrop-blur-sm'
    : 'bg-transparent';

  return (
    <header
      data-testid={TEST_ID.HEADER}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollClasses}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo/>
          <Menu/>
          <ContactButton/>
        </div>
      </div>
    </header>
  );
}
