import { render, screen } from '@testing-library/react';
import { OverviewDescription } from './OverviewDescription';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
  },
}));

describe('OverviewDescription', () => {
  beforeEach(() => {
    render(<OverviewDescription />);
  });

  it('renders the description element', () => {
    const description = screen.getByTestId(TEST_ID.OVERVIEW_DESCRIPTION);
    expect(description).toBeInTheDocument();
  });

  it('displays the correct description text', () => {
    const description = screen.getByTestId(TEST_ID.OVERVIEW_DESCRIPTION);
    expect(description).toHaveTextContent(OVERVIEW_CONTENT.DESCRIPTION);
  });

  it('has correct styling classes', () => {
    const description = screen.getByTestId(TEST_ID.OVERVIEW_DESCRIPTION);
    expect(description).toHaveClass('text-stone-600', 'text-lg', 'leading-relaxed');
  });
});
