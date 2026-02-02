import { render, screen } from '@testing-library/react';
import { Overview } from './Overview';
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
    span: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLSpanElement> & Record<string, unknown>) => (
      <span {...props}>{children}</span>
    ),
    h2: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement> & Record<string, unknown>) => (
      <h2 {...props}>{children}</h2>
    ),
    p: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement> & Record<string, unknown>) => (
      <p {...props}>{children}</p>
    ),
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, sizes, ...props }: Record<string, unknown>) => (
    <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
}));

describe('Overview', () => {
  beforeEach(() => {
    render(<Overview />);
  });

  it('renders the overview section', () => {
    const section = screen.getByTestId(TEST_ID.OVERVIEW_SECTION);
    expect(section).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const section = screen.getByTestId(TEST_ID.OVERVIEW_SECTION);
    expect(section).toHaveAttribute('id', 'overview');
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByTestId(TEST_ID.OVERVIEW_SUBTITLE);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the title', () => {
    const title = screen.getByTestId(TEST_ID.OVERVIEW_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('renders the description', () => {
    const description = screen.getByTestId(TEST_ID.OVERVIEW_DESCRIPTION);
    expect(description).toBeInTheDocument();
  });

  it('renders the collage', () => {
    const collage = screen.getByTestId(TEST_ID.OVERVIEW_COLLAGE);
    expect(collage).toBeInTheDocument();
  });

  it('has section padding styling', () => {
    const section = screen.getByTestId(TEST_ID.OVERVIEW_SECTION);
    expect(section).toHaveClass('section-padding');
  });
});
