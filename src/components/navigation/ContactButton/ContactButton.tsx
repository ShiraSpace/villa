import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { TEST_ID, HEADER_CONTENT } from '@/components/navigation/constants';

interface ContactButtonProps {
  isScrolled: boolean;
}

export function ContactButton({ isScrolled }: ContactButtonProps): JSX.Element {
  return (
    <div className='flex items-center space-x-4'>
      <button
        data-testid={TEST_ID.CONTACT_BUTTON}
        onClick={() => handleLinkClick('#contact')}
        className='hidden md:block bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 hover:shadow-luxury text-sm'
      >
        {HEADER_CONTENT.CONTACT_BUTTON}
      </button>
    </div>
  );
}
