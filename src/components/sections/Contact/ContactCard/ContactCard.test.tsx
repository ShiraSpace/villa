import { render, screen } from '@testing-library/react';
import { Mail } from 'lucide-react';
import { ContactCard } from './ContactCard';

const mockProps = {
  testId: 'test-contact-card',
  icon: Mail,
  headline: 'Send a Message',
  subCopy: 'For detailed inquiries',
  href: 'mailto:test@example.com',
  cta: 'Email Us →',
};

describe('ContactCard', () => {
  describe('without target and rel', () => {
    beforeEach(() => {
      render(<ContactCard {...mockProps} />);
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

    it('cta link does not have a target attribute', () => {
      expect(screen.getByText(mockProps.cta)).not.toHaveAttribute('target');
    });
  });

  describe('with target and rel', () => {
    beforeEach(() => {
      render(<ContactCard {...mockProps} target='_blank' rel='noopener noreferrer' />);
    });

    it('cta link opens in a new tab', () => {
      expect(screen.getByText(mockProps.cta)).toHaveAttribute('target', '_blank');
    });

    it('cta link has noopener noreferrer rel', () => {
      expect(screen.getByText(mockProps.cta)).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
