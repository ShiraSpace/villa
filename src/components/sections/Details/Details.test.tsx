import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { TEST_ID } from './constants';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      variants,
      initial,
      whileInView,
      viewport,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
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
    h3: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement> & Record<string, unknown>) => (
      <h3 {...props}>{children}</h3>
    ),
  },
}));

describe('Details', () => {
  beforeEach(() => {
    render(<Details />);
  });

  it('renders the details section', () => {
    const section = screen.getByTestId(TEST_ID.DETAILS_SECTION);
    expect(section).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const section = screen.getByTestId(TEST_ID.DETAILS_SECTION);
    expect(section).toHaveAttribute('id', 'details');
  });

  it('renders the image', () => {
    const image = screen.getByTestId(TEST_ID.DETAILS_IMAGE);
    expect(image).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByTestId(TEST_ID.DETAILS_SUBTITLE);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the title', () => {
    const title = screen.getByTestId(TEST_ID.DETAILS_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('renders the facts grid', () => {
    const grid = screen.getByTestId(TEST_ID.DETAILS_GRID);
    expect(grid).toBeInTheDocument();
  });

  it('renders all 6 fact cards', () => {
    const facts = screen.getAllByTestId(TEST_ID.DETAILS_FACT);
    expect(facts).toHaveLength(6);
  });

  it('has section padding styling', () => {
    const section = screen.getByTestId(TEST_ID.DETAILS_SECTION);
    expect(section).toHaveClass('section-padding');
  });
});
