import { render, screen } from '@testing-library/react';
import { BookingCard } from './BookingCard';

const mockProps = {
  testId: 'test-booking-card',
  headline: 'Airbnb',
  subCopy: 'Book directly through Airbnb',
  href: 'https://www.airbnb.com/rooms/123',
  cta: 'Book on Airbnb',
};

describe('BookingCard', () => {
  beforeEach(() => {
    render(<BookingCard {...mockProps} />);
  });

  it('renders the card', () => {
    expect(screen.getByTestId(mockProps.testId)).toBeInTheDocument();
  });

  it('renders the headline', () => {
    expect(screen.getByText(mockProps.headline)).toBeInTheDocument();
  });

  it('renders the sub copy', () => {
    expect(screen.getByText(mockProps.subCopy)).toBeInTheDocument();
  });

  it('renders the cta link with correct href', () => {
    expect(screen.getByText(mockProps.cta)).toHaveAttribute('href', mockProps.href);
  });

  it('cta link opens in a new tab', () => {
    expect(screen.getByText(mockProps.cta)).toHaveAttribute('target', '_blank');
  });

  it('cta link has noopener noreferrer rel', () => {
    expect(screen.getByText(mockProps.cta)).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
