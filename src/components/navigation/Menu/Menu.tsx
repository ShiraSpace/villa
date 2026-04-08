import { JSX } from 'react';
import { MenuItem } from '../types';
import { MenuButton } from '@/components/navigation/MenuButton';
import { TEST_ID } from '@/components/navigation/constants';

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Overview', href: '#overview' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
];

interface MenuProps {
  isScrolled: boolean;
}

export function Menu({ isScrolled }: MenuProps): JSX.Element {
  return (
    <nav data-testid={TEST_ID.MENU} className='hidden md:flex items-center space-x-12'>
      {menuItems.map((item) => (
        <MenuButton key={item.href} menuItem={item} isScrolled={isScrolled} />
      ))}
    </nav>
  );
}
