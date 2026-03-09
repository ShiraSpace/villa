import { render, screen } from '@testing-library/react';
import { AmenitiesGrid } from './AmenitiesGrid';
import { TEST_ID, AMENITIES_CONTENT } from '../constants';

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

describe('AmenitiesGrid', () => {
  beforeEach(() => {
    render(<AmenitiesGrid />);
  });

  it('should render the grid', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_GRID)).toBeInTheDocument();
  });

  it('should render the correct number of amenity items', () => {
    const items = screen.getAllByTestId(TEST_ID.AMENITY_ITEM);
    expect(items).toHaveLength(AMENITIES_CONTENT.AMENITIES.length);
  });

  it('should render each amenity name', () => {
    AMENITIES_CONTENT.AMENITIES.forEach((amenity) => {
      expect(screen.getByText(amenity.name)).toBeInTheDocument();
    });
  });
});
