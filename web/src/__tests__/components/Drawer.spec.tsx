import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Drawer } from '../../components/Drawer';
import { useDrawer } from '../../hooks/useDrawer';
import { renderWithRouter } from '../../utils/testUtils';

jest.mock('../../hooks/useDrawer');

describe('Drawer component', () => {
  const mockUseDrawer = useDrawer as jest.MockedFunction<typeof useDrawer>;

  it('should hide drawer when "isOpen" is false', () => {
    mockUseDrawer.mockImplementation(() => {
      return {
        isOpen: false,
      } as any;
    });

    renderWithRouter(<Drawer />);
    expect(screen.queryByTestId('drawer')).toBeNull();
  });

  it('should show drawer when "isOpen" is true', async () => {
    mockUseDrawer.mockImplementation(() => {
      return {
        isOpen: true,
      } as any;
    });

    renderWithRouter(<Drawer />);
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
  });

  it('should call "closeDrawer()" when button close is clicked', async () => {
    const closeDrawerFn = jest.fn();

    mockUseDrawer.mockImplementation(() => {
      return {
        isOpen: true,
        closeDrawer: closeDrawerFn,
      } as any;
    });

    renderWithRouter(<Drawer />);

    const buttonClose = screen.getByRole('button', { name: /close/i });
    userEvent.click(buttonClose);

    expect(closeDrawerFn).toHaveBeenCalled();
  });
});
