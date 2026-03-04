import { render, screen } from '@testing-library/react';
import { OverviewCollage } from './OverviewCollage';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, sizes, ...props }: Record<string, unknown>) => (
    <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
}));

describe('OverviewCollage', () => {
  beforeEach(() => {
    render(<OverviewCollage />);
  });

  it('renders the collage container', () => {
    const collage = screen.getByTestId(TEST_ID.OVERVIEW_COLLAGE);
    expect(collage).toBeInTheDocument();
  });

  it('renders all four images', () => {
    OVERVIEW_CONTENT.IMAGES.forEach((_, index) => {
      const image = screen.getByTestId(`${TEST_ID.OVERVIEW_IMAGE}-${index}`);
      expect(image).toBeInTheDocument();
    });
  });

  it('has correct image sources', () => {
    OVERVIEW_CONTENT.IMAGES.forEach((image, index) => {
      const imgElement = screen.getByTestId(`${TEST_ID.OVERVIEW_IMAGE}-${index}`);
      expect(imgElement).toHaveAttribute('src', image.src);
    });
  });

  it('has correct alt text for images', () => {
    OVERVIEW_CONTENT.IMAGES.forEach((image, index) => {
      const imgElement = screen.getByTestId(`${TEST_ID.OVERVIEW_IMAGE}-${index}`);
      expect(imgElement).toHaveAttribute('alt', image.alt);
    });
  });

  it('has grid layout styling', () => {
    const collage = screen.getByTestId(TEST_ID.OVERVIEW_COLLAGE);
    expect(collage).toHaveClass('grid', 'grid-cols-2');
  });
});
