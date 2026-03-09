import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Gallery } from './Gallery';
import { TEST_ID, GALLERY_CONTENT } from './constants';

jest.mock('framer-motion');

jest.mock('lucide-react', () => ({
  ChevronLeft: () => <span>ChevronLeft</span>,
  ChevronRight: () => <span>ChevronRight</span>,
  X: () => <span>X</span>,
}));

describe('Gallery', () => {
  beforeEach(() => {
    render(<Gallery />);
  });

  it('renders the gallery section', () => {
    const section = screen.getByTestId(TEST_ID.GALLERY_SECTION);
    expect(section).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const section = screen.getByTestId(TEST_ID.GALLERY_SECTION);
    expect(section).toHaveAttribute('id', 'gallery');
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByTestId(TEST_ID.GALLERY_SUBTITLE);
    expect(subtitle).toHaveTextContent(GALLERY_CONTENT.SUBTITLE);
  });

  it('renders filter buttons', () => {
    const filters = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);
    expect(filters).toHaveLength(GALLERY_CONTENT.CATEGORIES.length);
  });

  it('renders all images by default', () => {
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);
    expect(cards).toHaveLength(GALLERY_CONTENT.IMAGES.length);
  });

  it('has section padding styling', () => {
    const section = screen.getByTestId(TEST_ID.GALLERY_SECTION);
    expect(section).toHaveClass('section-padding');
  });

  it('filters images when category is clicked', async () => {
    const user = userEvent.setup();
    const filterButtons = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);
    const categoryIndex = 1;
    const clickedCategory = GALLERY_CONTENT.CATEGORIES[categoryIndex].id;

    await user.click(filterButtons[categoryIndex]);

    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);
    const filteredImages = GALLERY_CONTENT.IMAGES.filter((img) => img.category === clickedCategory);
    expect(cards).toHaveLength(filteredImages.length);
  });

  it('shows all images when All filter is clicked', async () => {
    const user = userEvent.setup();
    const filterButtons = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);

    await user.click(filterButtons[1]);
    await user.click(filterButtons[0]);

    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);
    expect(cards).toHaveLength(GALLERY_CONTENT.IMAGES.length);
  });

  it('opens lightbox when a card is clicked', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);

    const lightbox = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX);
    expect(lightbox).toBeInTheDocument();
  });

  it('closes lightbox when close button is clicked', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);
    const closeButton = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_CLOSE);
    await user.click(closeButton);

    expect(screen.queryByTestId(TEST_ID.GALLERY_LIGHTBOX)).not.toBeInTheDocument();
  });

  it('displays image counter in lightbox', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);

    const counter = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_COUNTER);
    expect(counter).toHaveTextContent(`1 / ${GALLERY_CONTENT.IMAGES.length}`);
  });

  it('navigates to next image in lightbox', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);
    const nextButton = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_NEXT);
    await user.click(nextButton);

    const counter = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_COUNTER);
    expect(counter).toHaveTextContent(`2 / ${GALLERY_CONTENT.IMAGES.length}`);
  });

  it('navigates to previous image in lightbox', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[1]);
    const prevButton = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_PREV);
    await user.click(prevButton);

    const counter = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_COUNTER);
    expect(counter).toHaveTextContent(`1 / ${GALLERY_CONTENT.IMAGES.length}`);
  });

  it('closes lightbox with Escape key', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);
    expect(screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX)).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByTestId(TEST_ID.GALLERY_LIGHTBOX)).not.toBeInTheDocument();
  });

  it('navigates with arrow keys in lightbox', async () => {
    const user = userEvent.setup();
    const cards = screen.getAllByTestId(TEST_ID.GALLERY_CARD);

    await user.click(cards[0]);
    await user.keyboard('{ArrowRight}');

    const counter = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_COUNTER);
    expect(counter).toHaveTextContent(`2 / ${GALLERY_CONTENT.IMAGES.length}`);
  });
});
