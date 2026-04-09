'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { villaData } from '@/data/villa';
import { TEST_ID, CONTACT_CONTENT, EXTERNAL_LINK_REL, PAGE_CLASS_NAMES } from './constants';
import { containerVariants } from './animations';
import { BookingCard } from './BookingCard/BookingCard';
import { ContactCard } from './ContactCard/ContactCard';

export function Contact(): JSX.Element {
  const { contact } = villaData;
  const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT_CONTENT.whatsapp.prefilledMessage)}`;

  const bookingPlatforms = [
    { testId: TEST_ID.airbnb, ...CONTACT_CONTENT.airbnb, href: contact.airbnbUrl },
    { testId: TEST_ID.bookingCom, ...CONTACT_CONTENT.bookingCom, href: contact.bookingComUrl },
    { testId: TEST_ID.seanrent, ...CONTACT_CONTENT.seanrent, href: contact.seanrentUrl },
  ];

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
            {bookingPlatforms.map((platform) => (
              <BookingCard key={platform.testId} {...platform} />
            ))}
          </div>

          <div className={PAGE_CLASS_NAMES.contactGrid}>
            <ContactCard
              testId={TEST_ID.whatsapp}
              icon={MessageCircle}
              headline={CONTACT_CONTENT.whatsapp.headline}
              subCopy={CONTACT_CONTENT.whatsapp.subCopy}
              href={whatsappHref}
              cta={CONTACT_CONTENT.whatsapp.cta}
              target='_blank'
              rel={EXTERNAL_LINK_REL}
            />
            <ContactCard
              testId={TEST_ID.email}
              icon={Mail}
              headline={CONTACT_CONTENT.email.headline}
              subCopy={CONTACT_CONTENT.email.subCopy}
              href={`mailto:${contact.email}`}
              cta={CONTACT_CONTENT.email.cta}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
