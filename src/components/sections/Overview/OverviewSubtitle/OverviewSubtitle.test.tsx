import { render, screen } from '@testing-library/react';
import { OverviewSubtitle } from './OverviewSubtitle';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
      <span {...props}>{children}</span>
    ),
  },
}));

describe('OverviewSubtitle', () => {
  beforeEach(() => {
    render(<OverviewSubtitle />);
  });

  it('renders the subtitle element', () => {
    const subtitle = screen.getByTestId(TEST_ID.OVERVIEW_SUBTITLE);
    expect(subtitle).toBeInTheDocument();
  });

  it('displays the correct subtitle text', () => {
    const subtitle = screen.getByTestId(TEST_ID.OVERVIEW_SUBTITLE);
    expect(subtitle).toHaveTextContent(OVERVIEW_CONTENT.SUBTITLE);
  });

  it('has correct styling classes', () => {
    const subtitle = screen.getByTestId(TEST_ID.OVERVIEW_SUBTITLE);
    expect(subtitle).toHaveClass('text-gold-500', 'uppercase', 'tracking-wider');
  });
});
