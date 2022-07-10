import { render, screen } from '@testing-library/react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { makeServer } from '../../miragejs/server';
import { TableProducts } from '../../pages/Products/TableProducts';

describe('TableProducts component', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  const renderTableProducts = (numRows: number = 0) => {
    server.createList('product', numRows);

    const dbCollections = server.db.dump();
    const products = dbCollections.products.map((product: any) => {
      return {
        ...product,
        _id: product.id,
      };
    });

    render(
      <ProductsContext.Provider value={{ products } as any}>
        <TableProducts />
      </ProductsContext.Provider>
    );
  };

  it('renders correctly', async () => {
    renderTableProducts();
    expect(screen.getByTestId('table-products')).toBeInTheDocument();
  });

  it('should show message when products is empty', () => {
    renderTableProducts();
    expect(screen.getByText(/nenhum produto cadastrado/i)).toBeInTheDocument();
  });

  it('should render 2 ProductItem components', () => {
    renderTableProducts(2);
    expect(screen.getAllByTestId('product-item')).toHaveLength(2);
    expect(screen.queryByText(/nenhum produto cadastrado/i)).toBeNull();
  });
});
