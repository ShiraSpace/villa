'use client';

import { JSX, MouseEvent } from 'react';
import { TEST_ID } from './constants';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export function Button({ children, href }: ButtonProps): JSX.Element {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className='btn-primary' data-testid={TEST_ID.BUTTON}>
      {children}
    </a>
  );
}
