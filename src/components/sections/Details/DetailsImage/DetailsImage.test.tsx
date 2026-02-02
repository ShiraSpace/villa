import { render, screen } from '@testing-library/react';
import { DetailsImage } from './DetailsImage';
import { DETAILS_CONTENT, TEST_ID } from '../constants';

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
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, sizes, ...props }: Record<string, unknown>) => (
    <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
}));

describe('DetailsImage', () => {
  beforeEach(() => {
    render(<DetailsImage />);
  });

  it('renders the image', () => {
    const image = screen.getByTestId(TEST_ID.DETAILS_IMAGE);
    expect(image).toBeInTheDocument();
  });

  it('has correct src attribute', () => {
    const image = screen.getByTestId(TEST_ID.DETAILS_IMAGE);
    expect(image).toHaveAttribute('src', DETAILS_CONTENT.IMAGE.src);
  });

  it('has correct alt attribute', () => {
    const image = screen.getByTestId(TEST_ID.DETAILS_IMAGE);
    expect(image).toHaveAttribute('alt', DETAILS_CONTENT.IMAGE.alt);
  });
});
