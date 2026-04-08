'use client';

import { JSX } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PAGE_CLASS_NAMES, EXTERNAL_LINK_REL } from '../constants';
import { itemVariants } from '../animations';

interface BookingCardProps {
  testId: string;
  headline: string;
  subCopy: string;
  href: string;
  cta: string;
}

export function BookingCard({
  testId,
  headline,
  subCopy,
  href,
  cta,
}: BookingCardProps): JSX.Element {
  return (
    <motion.div data-testid={testId} variants={itemVariants} className={PAGE_CLASS_NAMES.card}>
      <ExternalLink className={PAGE_CLASS_NAMES.cardIcon} />
      <h3 className={PAGE_CLASS_NAMES.cardHeading}>{headline}</h3>
      <p className={PAGE_CLASS_NAMES.cardSubCopy}>{subCopy}</p>
      <a
        href={href}
        target='_blank'
        rel={EXTERNAL_LINK_REL}
        className={PAGE_CLASS_NAMES.ctaPrimary}
      >
        {cta}
      </a>
    </motion.div>
  );
}
