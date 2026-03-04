import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GalleryCard } from './GalleryCard';
import { TEST_ID, GalleryImage } from '../constants';

const regularImage: GalleryImage = {
  src: '/images/gallery/exterior/exterior-1.jpg',
  alt: 'Villa exterior view',
  category: 'exterior',
};

const tallImage: GalleryImage = {
  src: '/images/gallery/pool/pool-1.jpg',
  alt: 'Swimming pool',
  category: 'pool-views',
  tall: true,
};

describe('GalleryCard', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders the card', () => {
    render(<GalleryCard image={regularImage} onClick={mockOnClick} />);
    const card = screen.getByTestId(TEST_ID.GALLERY_CARD);
    expect(card).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<GalleryCard image={regularImage} onClick={mockOnClick} />);
    const img = screen.getByAltText(regularImage.alt);
    expect(img).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    render(<GalleryCard image={regularImage} onClick={mockOnClick} />);
    const card = screen.getByTestId(TEST_ID.GALLERY_CARD);

    await user.click(card);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies regular aspect ratio for non-tall images', () => {
    render(<GalleryCard image={regularImage} onClick={mockOnClick} />);
    const card = screen.getByTestId(TEST_ID.GALLERY_CARD);
    expect(card).toHaveClass('aspect-[4/3]');
  });

  it('applies tall styling for tall images', () => {
    render(<GalleryCard image={tallImage} onClick={mockOnClick} />);
    const card = screen.getByTestId(TEST_ID.GALLERY_CARD);
    expect(card).toHaveClass('row-span-2');
    expect(card).toHaveClass('aspect-[3/4]');
  });
});
