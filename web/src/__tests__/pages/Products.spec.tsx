import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useProducts } from '../../hooks/useProducts';
import { Products } from '../../pages/Products';
import { renderWithRouter, setupMatchMedia } from '../../utils/testUtils';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../hooks/useProducts.ts');
const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;

const renderProductsPage = () => {
  mockUseProducts.mockImplementationOnce(() => {
    return {
      products: [],
    } as any;
  });

  setupMatchMedia();
  renderWithRouter(<Products />);
};

describe('Products page', () => {
  it('renders correctly', () => {
    renderProductsPage();

    expect(screen.getByTestId('page-products')).toBeInTheDocument();
  });

  it('should redirect to product add page', () => {
    renderProductsPage();

    const button = screen.getByRole('button', { name: /adicionar produto/i });
    userEvent.click(button);

    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith('/products/new');
  });
});
