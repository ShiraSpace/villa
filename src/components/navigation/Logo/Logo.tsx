import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { TEST_ID, HEADER_CONTENT } from '@/components/navigation/constants';

interface LogoProps {
  isScrolled: boolean;
}

export function Logo({ isScrolled }: LogoProps): JSX.Element {
  const textColor = isScrolled ? 'text-stone-900' : 'text-white';

  return (
    <button
      data-testid={TEST_ID.LOGO}
      onClick={() => handleLinkClick('#hero')}
      className={`text-2xl font-serif font-bold hover:text-gold-400 transition-colors ${textColor}`}
    >
      {HEADER_CONTENT.LOGO_TEXT}
    </button>
  );
}
