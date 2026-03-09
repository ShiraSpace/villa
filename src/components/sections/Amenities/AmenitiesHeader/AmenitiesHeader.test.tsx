import { render, screen } from '@testing-library/react';
import { AmenitiesHeader } from './AmenitiesHeader';
import { TEST_ID, AMENITIES_CONTENT } from '../constants';

jest.mock('framer-motion');

describe('AmenitiesHeader', () => {
  beforeEach(() => {
    render(<AmenitiesHeader />);
  });

  it('should render the subtitle', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SUBTITLE)).toBeInTheDocument();
  });

  it('should render the subtitle with correct text', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_SUBTITLE)).toHaveTextContent(
      AMENITIES_CONTENT.SUBTITLE
    );
  });

  it('should render the title', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_TITLE)).toBeInTheDocument();
  });

  it('should render the title with correct text', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_TITLE)).toHaveTextContent(AMENITIES_CONTENT.TITLE);
  });

  it('should render the title accent with correct text', () => {
    expect(screen.getByTestId(TEST_ID.AMENITIES_TITLE)).toHaveTextContent(
      AMENITIES_CONTENT.TITLE_ACCENT
    );
  });
});
