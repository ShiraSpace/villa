import { render, screen } from '@testing-library/react';
import { BookingCard } from './BookingCard';

const props = {
  testId: 'test-booking-card',
  headline: 'Airbnb',
  subCopy: 'Book directly through Airbnb',
  href: 'https://www.airbnb.com/rooms/123',
  cta: 'Book on Airbnb',
};

describe('BookingCard', () => {
  beforeEach(() => {
    render(<BookingCard {...props} />);
  });

  it('renders the card', () => {
    expect(screen.getByTestId(props.testId)).toBeInTheDocument();
  });

  it('renders the headline', () => {
    expect(screen.getByText(props.headline)).toBeInTheDocument();
  });

  it('renders the sub copy', () => {
    expect(screen.getByText(props.subCopy)).toBeInTheDocument();
  });

  it('renders the cta link with correct href', () => {
    expect(screen.getByText(props.cta)).toHaveAttribute('href', props.href);
  });

  it('cta link opens in a new tab', () => {
    expect(screen.getByText(props.cta)).toHaveAttribute('target', '_blank');
  });

  it('cta link has noopener noreferrer rel', () => {
    expect(screen.getByText(props.cta)).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
