import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PageHeader } from '../../components/PageHeader';
import { setupMatchMedia, renderWithRouter } from '../../utils/testUtils';

const title = 'Produtos';
const mockOpenDrawer = jest.fn();

jest.mock('../../hooks/useDrawer.ts', () => ({
  useDrawer: () => ({ openDrawer: mockOpenDrawer }),
}));

describe('PageHeader component', () => {
  it('renders correctly', () => {
    setupMatchMedia();
    renderWithRouter(<PageHeader title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('should show open button on smaller devices', () => {
    setupMatchMedia(true);
    renderWithRouter(<PageHeader title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call "openDrawer()" when button is clicked', () => {
    setupMatchMedia(true);
    renderWithRouter(<PageHeader title={title} />);

    const openDrawerButton = screen.getByRole('button');
    userEvent.click(openDrawerButton);

    expect(mockOpenDrawer).toHaveBeenCalled();
    expect(mockOpenDrawer).toHaveBeenCalledTimes(1);
  });
});
