import { screen } from '@testing-library/react';
import { SidebarNav } from '../../components/Sidebar/SidebarNav';
import { renderWithRouter } from '../../utils/testUtils';

describe('SidebarNav component', () => {
  it('renders correctly', () => {
    renderWithRouter(<SidebarNav />);
    expect(screen.getByTestId('sidebar-nav')).toBeInTheDocument();
  });

  it('should active product link when the route is equal to home', () => {
    renderWithRouter(<SidebarNav />);
    const productLink = screen.getByRole('link', { name: /produtos/i });
    const orderLink = screen.getByRole('link', { name: /pedidos/i });

    expect(productLink).toHaveClass('active');
    expect(orderLink).not.toHaveClass('active');
  });

  it('should active product link when pathname includes "/products"', () => {
    renderWithRouter(<SidebarNav />, { route: '/products/new' });
    const productLink = screen.getByRole('link', { name: /produtos/i });
    const orderLink = screen.getByRole('link', { name: /pedidos/i });

    expect(productLink).toHaveClass('active');
    expect(orderLink).not.toHaveClass('active');
  });

  it('should active order link when pathname includes "/orders"', () => {
    renderWithRouter(<SidebarNav />, { route: '/orders' });
    const productLink = screen.getByRole('link', { name: /produtos/i });
    const orderLink = screen.getByRole('link', { name: /pedidos/i });

    expect(orderLink).toHaveClass('active');
    expect(productLink).not.toHaveClass('active');
  });
});
