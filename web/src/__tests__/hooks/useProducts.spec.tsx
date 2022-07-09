import { ReactNode } from 'react';
import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import { makeServer } from '../../miragejs/server';
import { useProducts } from '../../hooks/useProducts';
import { ProductsProvider } from '../../contexts/ProductsContext';
import { Toast } from '../../utils/swal';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

type WrapperProps = {
  children: ReactNode;
};

const wrapper = ({ children }: WrapperProps) => (
  <BrowserRouter>
    <ProductsProvider>{children}</ProductsProvider>
  </BrowserRouter>
);

describe('useProducts hook', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should return 2 products', async () => {
    server.createList('product', 2);
    const { result } = renderHook(() => useProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.products).toHaveLength(2);
    });
  });

  it('should add new product', async () => {
    const { result } = renderHook(() => useProducts(), { wrapper });

    act(() => {
      result.current.addProduct({
        image: faker.image.food(),
        name: 'Pizza de carne do sol',
        description: 'pizza de carne do sol',
        price: 40,
        active: true,
      });
    });

    const spy = jest.spyOn(Toast, 'fire');

    await waitFor(() => {
      expect(result.current.products).toHaveLength(1);
      expect(mockHistoryPush).toHaveBeenCalled();
      expect(mockHistoryPush).toHaveBeenCalledWith('/');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({
        icon: 'success',
        title: 'Produto adicionado com sucesso',
      });
    });
  });

  it('should update a product', async () => {
    const productId = '1';
    const productData = {
      image: faker.image.food(),
      name: 'Pizza de carne do sol',
      description: 'pizza de carne do sol',
      price: 40,
      active: true,
    };

    server.create('product', { id: productId, ...productData });

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      result.current.updateProduct(
        productId,
        Object.assign(productData, { active: false })
      );
    });

    const spy = jest.spyOn(Toast, 'fire');

    await waitFor(() => {
      expect(result.current.products).toHaveLength(1);
      expect(result.current.products[0].active).toBe(false);
      expect(mockHistoryPush).toHaveBeenCalled();
      expect(mockHistoryPush).toHaveBeenCalledWith('/');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({
        icon: 'success',
        title: 'Produto editado com sucesso',
      });
    });
  });

  it('should remove a product', async () => {
    const productId = '1';
    server.create('product', { _id: productId });

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper,
    });

    await waitForNextUpdate();
    expect(result.current.products).toHaveLength(1);

    act(() => {
      result.current.removeProduct(productId);
    });

    await waitForNextUpdate();

    const spy = jest.spyOn(Toast, 'fire');

    expect(result.current.products).toHaveLength(0);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      icon: 'success',
      title: 'Produto removido com sucesso',
    });
  });
});
