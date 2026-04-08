'use client';

import { JSX } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PAGE_CLASS_NAMES } from '../constants';
import { itemVariants } from '../animations';

interface ContactCardProps {
  testId: string;
  icon: LucideIcon;
  headline: string;
  subCopy: string;
  href: string;
  cta: string;
  target?: string;
  rel?: string;
}

export function ContactCard({
  testId,
  icon: Icon,
  headline,
  subCopy,
  href,
  cta,
  target,
  rel,
}: ContactCardProps): JSX.Element {
  return (
    <motion.div data-testid={testId} variants={itemVariants} className={PAGE_CLASS_NAMES.card}>
      <Icon className={PAGE_CLASS_NAMES.cardIcon} />
      <h3 className={PAGE_CLASS_NAMES.cardHeading}>{headline}</h3>
      <p className={PAGE_CLASS_NAMES.cardSubCopy}>{subCopy}</p>
      <a href={href} target={target} rel={rel} className={PAGE_CLASS_NAMES.ctaSecondary}>
        {cta}
      </a>
    </motion.div>
  );
}
