import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GalleryLightbox } from './GalleryLightbox';
import { TEST_ID, GALLERY_CONTENT } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      variants,
      initial,
      animate,
      exit,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('lucide-react', () => ({
  X: () => <span>X</span>,
  ChevronLeft: () => <span>ChevronLeft</span>,
  ChevronRight: () => <span>ChevronRight</span>,
}));

const images = GALLERY_CONTENT.IMAGES.slice(0, 5);

describe('GalleryLightbox', () => {
  const mockOnClose = jest.fn();
  const mockOnPrev = jest.fn();
  const mockOnNext = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnPrev.mockClear();
    mockOnNext.mockClear();
  });

  it('does not render when currentIndex is null', () => {
    render(
      <GalleryLightbox
        images={images}
        currentIndex={null}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    expect(screen.queryByTestId(TEST_ID.GALLERY_LIGHTBOX)).not.toBeInTheDocument();
  });

  it('renders when currentIndex is provided', () => {
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    expect(screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX)).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    const img = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_IMAGE);
    expect(img).toHaveAttribute('src', images[0].src);
    expect(img).toHaveAttribute('alt', images[0].alt);
  });

  it('displays the image counter', () => {
    render(
      <GalleryLightbox
        images={images}
        currentIndex={2}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    const counter = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_COUNTER);
    expect(counter).toHaveTextContent('3 / 5');
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    const closeBtn = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_CLOSE);
    await user.click(closeBtn);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onPrev when prev button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={1}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    const prevBtn = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_PREV);
    await user.click(prevBtn);
    expect(mockOnPrev).toHaveBeenCalled();
  });

  it('calls onNext when next button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    const nextBtn = screen.getByTestId(TEST_ID.GALLERY_LIGHTBOX_NEXT);
    await user.click(nextBtn);
    expect(mockOnNext).toHaveBeenCalled();
  });

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    await user.keyboard('{Escape}');
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onPrev on ArrowLeft key', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={1}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    await user.keyboard('{ArrowLeft}');
    expect(mockOnPrev).toHaveBeenCalled();
  });

  it('calls onNext on ArrowRight key', async () => {
    const user = userEvent.setup();
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    await user.keyboard('{ArrowRight}');
    expect(mockOnNext).toHaveBeenCalled();
  });

  it('locks body scroll when open', () => {
    render(
      <GalleryLightbox
        images={images}
        currentIndex={0}
        onClose={mockOnClose}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    );
    expect(document.body.style.overflow).toBe('hidden');
  });
});
