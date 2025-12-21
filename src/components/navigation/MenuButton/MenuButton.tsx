import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { MenuItem } from '../types';
import { TEST_ID } from '@/components/navigation/constants';

interface MenuButtonProps {
  menuItem: MenuItem;
}

export function MenuButton({ menuItem }: MenuButtonProps): JSX.Element {
  return (
    <button
      data-testid={TEST_ID.MENU_BUTTON}
      onClick={() => handleLinkClick(menuItem.href)}
      className='text-stone-700 hover:text-gold-600 font-medium transition-colors relative group'
    >
      {menuItem.label}
      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full'></span>
    </button>
  );
}
