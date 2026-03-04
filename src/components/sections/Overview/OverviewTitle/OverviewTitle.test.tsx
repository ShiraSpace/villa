import { render, screen } from '@testing-library/react';
import { OverviewTitle } from './OverviewTitle';
import { OVERVIEW_CONTENT, TEST_ID } from '../constants';

describe('OverviewTitle', () => {
  beforeEach(() => {
    render(<OverviewTitle />);
  });

  it('renders the title element', () => {
    const title = screen.getByTestId(TEST_ID.OVERVIEW_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('displays the correct title text', () => {
    const title = screen.getByTestId(TEST_ID.OVERVIEW_TITLE);
    expect(title).toHaveTextContent(OVERVIEW_CONTENT.TITLE);
  });

  it('has correct styling classes', () => {
    const title = screen.getByTestId(TEST_ID.OVERVIEW_TITLE);
    expect(title).toHaveClass('font-serif', 'font-bold', 'text-stone-900');
  });
});
