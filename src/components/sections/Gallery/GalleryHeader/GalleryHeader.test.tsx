import { render, screen } from '@testing-library/react';
import { GalleryHeader } from './GalleryHeader';
import { TEST_ID, GALLERY_CONTENT } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    h2: ({
      children,
      variants,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement> & Record<string, unknown>) => (
      <h2 {...props}>{children}</h2>
    ),
  },
}));

describe('GalleryHeader', () => {
  beforeEach(() => {
    render(<GalleryHeader />);
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByTestId(TEST_ID.GALLERY_SUBTITLE);
    expect(subtitle).toBeInTheDocument();
  });

  it('displays correct text', () => {
    const subtitle = screen.getByTestId(TEST_ID.GALLERY_SUBTITLE);
    expect(subtitle).toHaveTextContent(GALLERY_CONTENT.SUBTITLE);
  });

  it('has heading-section class', () => {
    const subtitle = screen.getByTestId(TEST_ID.GALLERY_SUBTITLE);
    expect(subtitle).toHaveClass('heading-section');
  });
});
