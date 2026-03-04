import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GalleryScroll } from './GalleryScroll';
import { TEST_ID, GALLERY_CONTENT } from '../constants';

jest.mock('framer-motion');

jest.mock('lucide-react', () => ({
  ChevronLeft: () => <span>ChevronLeft</span>,
  ChevronRight: () => <span>ChevronRight</span>,
}));

describe('GalleryScroll', () => {
  const mockOnImageClick = jest.fn();
  const images = GALLERY_CONTENT.IMAGES.slice(0, 5);

  beforeEach(() => {
    mockOnImageClick.mockClear();
    render(<GalleryScroll images={images} onImageClick={mockOnImageClick} />);
  });

  it('renders the scroll container', () => {
    const scroll = screen.getByTestId(TEST_ID.GALLERY_SCROLL);
    expect(scroll).toBeInTheDocument();
  });

  it('renders all provided images', () => {
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);
    expect(cards).toHaveLength(images.length);
  });

  it('renders scroll left button', () => {
    const leftBtn = screen.getByTestId(TEST_ID.GALLERY_SCROLL_LEFT);
    expect(leftBtn).toBeInTheDocument();
  });

  it('renders scroll right button', () => {
    const rightBtn = screen.getByTestId(TEST_ID.GALLERY_SCROLL_RIGHT);
    expect(rightBtn).toBeInTheDocument();
  });

  it('calls onImageClick when a card is clicked', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);
    expect(mockOnImageClick).toHaveBeenCalledWith(0);
  });

  it('scrolls left when left button is clicked', async () => {
    const user = userEvent.setup();
    const scroll = screen.getByTestId(TEST_ID.GALLERY_SCROLL);
    const scrollBySpy = jest.fn();
    scroll.scrollBy = scrollBySpy;

    const leftBtn = screen.getByTestId(TEST_ID.GALLERY_SCROLL_LEFT);
    await user.click(leftBtn);

    expect(scrollBySpy).toHaveBeenCalledWith({ left: -400, behavior: 'smooth' });
  });

  it('scrolls right when right button is clicked', async () => {
    const user = userEvent.setup();
    const scroll = screen.getByTestId(TEST_ID.GALLERY_SCROLL);
    const scrollBySpy = jest.fn();
    scroll.scrollBy = scrollBySpy;

    const rightBtn = screen.getByTestId(TEST_ID.GALLERY_SCROLL_RIGHT);
    await user.click(rightBtn);

    expect(scrollBySpy).toHaveBeenCalledWith({ left: 400, behavior: 'smooth' });
  });
});
