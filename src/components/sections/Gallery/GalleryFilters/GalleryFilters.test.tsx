import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GalleryFilters } from './GalleryFilters';
import { TEST_ID, GALLERY_CONTENT } from '../constants';

jest.mock('framer-motion');

describe('GalleryFilters', () => {
  const mockOnCategoryChange = jest.fn();

  beforeEach(() => {
    mockOnCategoryChange.mockClear();
    render(<GalleryFilters activeCategory='all' onCategoryChange={mockOnCategoryChange} />);
  });

  it('renders the filters container', () => {
    const filters = screen.getByTestId(TEST_ID.GALLERY_FILTERS);
    expect(filters).toBeInTheDocument();
  });

  it('renders all category buttons', () => {
    const buttons = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);
    expect(buttons).toHaveLength(GALLERY_CONTENT.CATEGORIES.length);
  });

  it('displays correct category labels', () => {
    GALLERY_CONTENT.CATEGORIES.forEach((category) => {
      expect(screen.getByText(category.label)).toBeInTheDocument();
    });
  });

  it('calls onCategoryChange when button is clicked', async () => {
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);

    await user.click(buttons[1]);
    expect(mockOnCategoryChange).toHaveBeenCalledWith('exterior');
  });

  it('applies active styling to selected category', () => {
    const buttons = screen.getAllByTestId(TEST_ID.GALLERY_FILTER_BUTTON);
    expect(buttons[0]).toHaveClass('text-white');
    expect(buttons[0]).toHaveClass('border-gold-500');
  });
});
