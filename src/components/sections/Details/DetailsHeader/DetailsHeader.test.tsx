import { render, screen } from '@testing-library/react';
import { DetailsHeader } from './DetailsHeader';
import { DETAILS_CONTENT, TEST_ID } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    p: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement> & Record<string, unknown>) => (
      <p {...props}>{children}</p>
    ),
    h2: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement> & Record<string, unknown>) => (
      <h2 {...props}>{children}</h2>
    ),
  },
}));

describe('DetailsHeader', () => {
  beforeEach(() => {
    render(<DetailsHeader />);
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByTestId(TEST_ID.DETAILS_SUBTITLE);
    expect(subtitle).toBeInTheDocument();
  });

  it('displays correct subtitle text', () => {
    const subtitle = screen.getByTestId(TEST_ID.DETAILS_SUBTITLE);
    expect(subtitle).toHaveTextContent(DETAILS_CONTENT.SUBTITLE);
  });

  it('renders the title', () => {
    const title = screen.getByTestId(TEST_ID.DETAILS_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('displays correct title text', () => {
    const title = screen.getByTestId(TEST_ID.DETAILS_TITLE);
    expect(title).toHaveTextContent(DETAILS_CONTENT.TITLE);
  });
});
