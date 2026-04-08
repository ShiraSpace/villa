import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { TEST_ID, CONTACT_CONTENT } from './constants';
import { villaData } from '@/data/villa';

describe('Contact', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the contact section', () => {
    expect(screen.getByTestId(TEST_ID.section)).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    expect(screen.getByTestId(TEST_ID.section)).toHaveAttribute('id', 'contact');
  });

  it('renders the subtitle', () => {
    expect(screen.getByTestId(TEST_ID.subtitle)).toHaveTextContent(CONTACT_CONTENT.subtitle);
  });

  it('renders the title', () => {
    expect(screen.getByTestId(TEST_ID.title)).toHaveTextContent(CONTACT_CONTENT.title);
  });

  it('renders the airbnb booking card', () => {
    expect(screen.getByTestId(TEST_ID.airbnb)).toBeInTheDocument();
  });

  it('renders the booking.com card', () => {
    expect(screen.getByTestId(TEST_ID.bookingCom)).toBeInTheDocument();
  });

  it('renders the seanrent card', () => {
    expect(screen.getByTestId(TEST_ID.seanrent)).toBeInTheDocument();
  });

  it('renders the whatsapp card', () => {
    expect(screen.getByTestId(TEST_ID.whatsapp)).toBeInTheDocument();
  });

  it('renders the email card', () => {
    expect(screen.getByTestId(TEST_ID.email)).toBeInTheDocument();
  });

  it('airbnb link points to correct url', () => {
    const link = screen.getByText(CONTACT_CONTENT.airbnb.cta);
    expect(link).toHaveAttribute('href', villaData.contact.airbnbUrl);
  });

  it('whatsapp link contains wa.me', () => {
    const link = screen.getByText(CONTACT_CONTENT.whatsapp.cta);
    expect(link.getAttribute('href')).toContain('wa.me');
  });

  it('email link uses mailto', () => {
    const link = screen.getByText(CONTACT_CONTENT.email.cta);
    expect(link).toHaveAttribute('href', `mailto:${villaData.contact.email}`);
  });
});
