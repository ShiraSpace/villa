'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { villaData } from '@/data/villa';
import { TEST_ID, CONTACT_CONTENT, EXTERNAL_LINK_REL, PAGE_CLASS_NAMES } from './constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Contact(): JSX.Element {
  const { contact } = villaData;

  return (
    <section id='contact' data-testid={TEST_ID.section} className={PAGE_CLASS_NAMES.section}>
      <div className={PAGE_CLASS_NAMES.container}>
        <div className={PAGE_CLASS_NAMES.header}>
          <p data-testid={TEST_ID.subtitle} className={PAGE_CLASS_NAMES.subtitle}>
            {CONTACT_CONTENT.subtitle}
          </p>
          <h2 data-testid={TEST_ID.title} className={PAGE_CLASS_NAMES.title}>
            {CONTACT_CONTENT.title}
          </h2>
          <p className={PAGE_CLASS_NAMES.description}>{CONTACT_CONTENT.description}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className={PAGE_CLASS_NAMES.cardList}
        >
          <div className={PAGE_CLASS_NAMES.bookingGrid}>
            <motion.div
              data-testid={TEST_ID.airbnb}
              variants={itemVariants}
              className={PAGE_CLASS_NAMES.card}
            >
              <ExternalLink className={PAGE_CLASS_NAMES.cardIcon} />
              <h3 className={PAGE_CLASS_NAMES.cardHeading}>{CONTACT_CONTENT.airbnb.headline}</h3>
              <p className={PAGE_CLASS_NAMES.cardSubCopy}>{CONTACT_CONTENT.airbnb.subCopy}</p>
              <a
                href={contact.airbnbUrl}
                target='_blank'
                rel={EXTERNAL_LINK_REL}
                className={PAGE_CLASS_NAMES.ctaPrimary}
              >
                {CONTACT_CONTENT.airbnb.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.bookingCom}
              variants={itemVariants}
              className={PAGE_CLASS_NAMES.card}
            >
              <ExternalLink className={PAGE_CLASS_NAMES.cardIcon} />
              <h3 className={PAGE_CLASS_NAMES.cardHeading}>{CONTACT_CONTENT.bookingCom.headline}</h3>
              <p className={PAGE_CLASS_NAMES.cardSubCopy}>{CONTACT_CONTENT.bookingCom.subCopy}</p>
              <a
                href={contact.bookingComUrl}
                target='_blank'
                rel={EXTERNAL_LINK_REL}
                className={PAGE_CLASS_NAMES.ctaPrimary}
              >
                {CONTACT_CONTENT.bookingCom.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.seanrent}
              variants={itemVariants}
              className={PAGE_CLASS_NAMES.card}
            >
              <ExternalLink className={PAGE_CLASS_NAMES.cardIcon} />
              <h3 className={PAGE_CLASS_NAMES.cardHeading}>{CONTACT_CONTENT.seanrent.headline}</h3>
              <p className={PAGE_CLASS_NAMES.cardSubCopy}>{CONTACT_CONTENT.seanrent.subCopy}</p>
              <a
                href={contact.seanrentUrl}
                target='_blank'
                rel={EXTERNAL_LINK_REL}
                className={PAGE_CLASS_NAMES.ctaPrimary}
              >
                {CONTACT_CONTENT.seanrent.cta}
              </a>
            </motion.div>
          </div>

          <div className={PAGE_CLASS_NAMES.contactGrid}>
            <motion.div
              data-testid={TEST_ID.whatsapp}
              variants={itemVariants}
              className={PAGE_CLASS_NAMES.card}
            >
              <MessageCircle className={PAGE_CLASS_NAMES.cardIcon} />
              <h3 className={PAGE_CLASS_NAMES.cardHeading}>{CONTACT_CONTENT.whatsapp.headline}</h3>
              <p className={PAGE_CLASS_NAMES.cardSubCopy}>{CONTACT_CONTENT.whatsapp.subCopy}</p>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT_CONTENT.whatsapp.prefilledMessage)}`}
                target='_blank'
                rel={EXTERNAL_LINK_REL}
                className={PAGE_CLASS_NAMES.ctaSecondary}
              >
                {CONTACT_CONTENT.whatsapp.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.email}
              variants={itemVariants}
              className={PAGE_CLASS_NAMES.card}
            >
              <Mail className={PAGE_CLASS_NAMES.cardIcon} />
              <h3 className={PAGE_CLASS_NAMES.cardHeading}>{CONTACT_CONTENT.email.headline}</h3>
              <p className={PAGE_CLASS_NAMES.cardSubCopy}>{CONTACT_CONTENT.email.subCopy}</p>
              <a href={`mailto:${contact.email}`} className={PAGE_CLASS_NAMES.ctaSecondary}>
                {CONTACT_CONTENT.email.cta}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
