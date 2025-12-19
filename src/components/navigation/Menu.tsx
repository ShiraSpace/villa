import { JSX } from 'react';
import { MenuItem } from './types';
import { MenuButton } from '@/components/navigation/MenuButton';

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Accommodations', href: '#accommodations' },
  { label: 'Location', href: '#location' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Menu(): JSX.Element {
return (
  <nav className="hidden md:flex items-center space-x-8">
    {menuItems.map((item) => (
      <MenuButton
        key={item.href}
        menuItem={item}
      />
    ))}
  </nav>
  );
}
