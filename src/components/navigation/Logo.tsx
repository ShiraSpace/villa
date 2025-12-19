import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';

export function Logo(): JSX.Element {
  return (
    <button
      onClick={() => handleLinkClick('#hero')}
      className='text-2xl font-serif font-bold text-stone-900 hover:text-gold-600 transition-colors'
    >
      Mips Grove
    </button>
  );
}
