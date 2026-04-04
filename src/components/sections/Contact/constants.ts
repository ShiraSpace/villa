export const CONTACT_CONTENT = {
  subtitle: 'Get in Touch',
  title: 'Plan Your Stay',
  description:
    'Ready to experience paradise? Reach out to us directly and we will be happy to help you plan your perfect escape.',
  airbnb: {
    headline: 'Airbnb',
    subCopy: 'Book directly through Airbnb',
    cta: 'Book on Airbnb',
  },
  bookingCom: {
    headline: 'Booking.com',
    subCopy: 'Reserve through Booking.com',
    cta: 'Book on Booking.com',
  },
  seanrent: {
    headline: 'SeaNRent',
    subCopy: 'Book through SeaNRent',
    cta: 'Book on SeaNRent',
  },
  whatsapp: {
    headline: 'Chat With Us',
    subCopy: 'We reply within the hour',
    cta: 'Message Us →',
    prefilledMessage:
      "Hello! I'm interested in your villa. We are [X] adults and [Y] kids looking to rent between [start date] and [end date]. Could you please confirm availability and pricing? Thank you!",
  },
  email: {
    headline: 'Send a Message',
    subCopy: 'For detailed inquiries',
    cta: 'Email Us →',
  },
};
// Required on all target="_blank" links: prevents the opened tab from accessing window.opener
// (noopener) and hides the referrer URL from the destination site (noreferrer).
export const EXTERNAL_LINK_REL = 'noopener noreferrer';

export const PAGE_CLASS_NAMES = {
  section: 'section-padding bg-white',
  container: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  header: 'text-center mb-12',
  subtitle: 'mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold-600',
  title: 'mb-4 font-serif text-3xl font-bold text-stone-900 md:text-4xl',
  description: 'text-stone-500 max-w-xl mx-auto',
  cardList: 'flex flex-col gap-6',
  bookingGrid: 'grid grid-cols-1 mdc:grid-cols-3 gap-6',
  contactGrid: 'grid grid-cols-1 sm:grid-cols-2 gap-6',
  card: 'flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50',
  cardIcon: 'w-7 h-7 text-gold-500 mb-3',
  cardHeading: 'font-serif text-lg font-semibold text-stone-900 mb-1',
  cardSubCopy: 'text-stone-500 text-sm mb-5',
  ctaPrimary:
    'mt-auto px-5 py-2 rounded-lg bg-gold-500 text-white font-sans font-semibold text-sm hover:bg-gold-600 transition-colors',
  ctaSecondary:
    'mt-auto px-5 py-2 rounded-lg border border-stone-300 text-stone-700 font-sans font-semibold text-sm hover:border-gold-500 hover:text-gold-600 transition-colors',
};

export const TEST_ID = {
  section: 'contact-section',
  title: 'contact-title',
  subtitle: 'contact-subtitle',
  whatsapp: 'contact-whatsapp',
  email: 'contact-email',
  airbnb: 'contact-airbnb',
  bookingCom: 'contact-booking-com',
  seanrent: 'contact-seanrent',
};
