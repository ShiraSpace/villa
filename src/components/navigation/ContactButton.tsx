import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';

export function ContactButton(): JSX.Element {
  return (
    <div className='flex items-center space-x-4'>
    <button
      onClick={() => handleLinkClick('#contact')}
      className='hidden md:block btn-primary'
    >
      Contact Us
    </button>
    </div>
  );
}
