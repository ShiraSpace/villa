import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { TEST_ID, HEADER_CONTENT } from '@/components/navigation/constants';

export function Logo(): JSX.Element {
  return (
    <button
      data-testid={TEST_ID.LOGO}
      onClick={() => handleLinkClick('#hero')}
      className='text-2xl font-serif font-bold text-stone-900 hover:text-gold-600 transition-colors'
    >
      {HEADER_CONTENT.LOGO_TEXT}
    </button>
  );
}
