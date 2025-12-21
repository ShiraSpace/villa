import { JSX } from 'react';
import { handleLinkClick } from '@/components/navigation/navigation-utils';
import { MenuItem } from '../types';
import { TEST_ID } from '@/components/navigation/constants';

interface MenuButtonProps {
  menuItem: MenuItem;
  isScrolled: boolean;
}

export function MenuButton({ menuItem, isScrolled }: MenuButtonProps): JSX.Element {
  const textColor = isScrolled ? 'text-stone-700' : 'text-white';

  return (
    <button
      data-testid={TEST_ID.MENU_BUTTON}
      onClick={() => handleLinkClick(menuItem.href)}
      className={`hover:text-gold-400 font-medium transition-colors relative group ${textColor}`}
    >
      {menuItem.label}
      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full'></span>
    </button>
  );
}
