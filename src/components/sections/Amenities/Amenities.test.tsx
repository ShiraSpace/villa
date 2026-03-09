import { render, screen } from '@testing-library/react';
import { Amenities } from './Amenities';
import { TEST_ID, AMENITIES_CONTENT } from './constants';

jest.mock('framer-motion');

jest.mock('lucide-react', () => ({
  Waves: () => <span>Waves</span>,
  Sunrise: () => <span>Sunrise</span>,
  Trees: () => <span>Trees</span>,
  ChefHat: () => <span>ChefHat</span>,
  Wifi: () => <span>Wifi</span>,
  AirVent: () => <span>AirVent</span>,
  Droplets: () => <span>Droplets</span>,
  Tv: () => <span>Tv</span>,
  Laptop: () => <span>Laptop</span>,
  Bubbles: () => <span>Bubbles</span>,
  WashingMachine: () => <span>WashingMachine</span>,
  Fan: () => <span>Fan</span>,
  CarFront: () => <span>CarFront</span>,
  Shield: () => <span>Shield</span>,
  Bed: () => <span>Bed</span>,
  Sparkles: () => <span>Sparkles</span>,
  Lock: () => <span>Lock</span>,
  Coffee: () => <span>Coffee</span>,
}));

describe('Amenities', () => {
  beforeEach(() => {
    render(<Amenities />);
  });

  it('should render the amenities section', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SECTION)).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SECTION)).toHaveAttribute('id', 'amenities');
  });

  it('should have section padding styling', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SECTION)).toHaveClass('section-padding');
  });

  it('should render the subtitle', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SUBTITLE)).toHaveTextContent(
      AMENITIES_CONTENT.SUBTITLE
    );
  });

  it('should render the title', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_TITLE)).toBeInTheDocument();
  });

  it('should render the grid', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_GRID)).toBeInTheDocument();
  });

  it('should render all amenity items', () => {
    const items = screen.getAllByTestId(TEST_ID.AMENITY_ITEM);
    expect(items).toHaveLength(AMENITIES_CONTENT.AMENITIES.length);
  });
});
