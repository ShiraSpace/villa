import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { TEST_ID, HEADER_CONTENT } from '@/components/navigation/constants';

export function ContactButton(): JSX.Element {
  return (
    <div className="flex items-center space-x-4">
      <button data-testid={TEST_ID.CONTACT_BUTTON}
              onClick={() => handleLinkClick('#contact')}
              className="hidden md:block btn-primary"
      >
        {HEADER_CONTENT.CONTACT_BUTTON}
      </button>
    </div>
  );
}
