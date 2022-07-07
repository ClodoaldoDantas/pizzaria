import { screen } from '@testing-library/react';
import { Sidebar } from '../../components/Sidebar';
import { setupMatchMedia, renderWithRouter } from '../../utils/testUtils';

jest.mock('../../hooks/useDrawer.ts', () => ({
  useDrawer: () => ({ isOpen: true }),
}));

describe('Sidebar component', () => {
  it('renders correctly', () => {
    setupMatchMedia();
    renderWithRouter(<Sidebar />);

    expect(screen.queryByTestId('drawer')).toBeNull();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should show drawer on smaller devices', () => {
    setupMatchMedia(true);
    renderWithRouter(<Sidebar />);

    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    expect(screen.queryByTestId('sidebar')).toBeNull();
  });
});
