'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import {
  Waves,
  Sunrise,
  Trees,
  ChefHat,
  Wifi,
  AirVent,
  Droplets,
  Tv,
  Laptop,
  Bubbles,
  WashingMachine,
  Fan,
  CarFront,
  Shield,
  Bed,
  Sparkles,
  Lock,
  Coffee,
  LucideProps,
} from 'lucide-react';
import { TEST_ID } from '../constants';
import { itemVariants } from '../animations';

type IconComponent = React.ComponentType<LucideProps>;

const iconMap: Record<string, IconComponent> = {
  Waves,
  Sunrise,
  Trees,
  ChefHat,
  Wifi,
  AirVent,
  Droplets,
  Tv,
  Laptop,
  Bubbles,
  WashingMachine,
  Fan,
  CarFront,
  Shield,
  Bed,
  Sparkles,
  Lock,
  Coffee,
};

interface AmenityItemProps {
  name: string;
  icon: string;
}

export function AmenityItem({ name, icon }: AmenityItemProps): JSX.Element {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      variants={itemVariants}
      data-testid={TEST_ID.AMENITY_ITEM}
      className='flex flex-col items-center text-center gap-2 cursor-default group transition-colors duration-300'
    >
      {IconComponent && (
        <IconComponent
          size={28}
          strokeWidth={1.5}
          className='text-stone-900 group-hover:text-gold-500 transition-colors duration-300'
          data-testid={TEST_ID.AMENITY_ICON}
        />
      )}
      <span className='text-stone-600 text-xs sm:text-sm leading-tight'>{name}</span>
    </motion.div>
  );
}
