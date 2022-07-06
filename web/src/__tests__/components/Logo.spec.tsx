import { screen } from '@testing-library/react';
import { Logo } from '../../components/Logo';
import { renderWithRouter } from '../../utils/testUtils';

describe('Logo component', () => {
  it('renders correctly', () => {
    renderWithRouter(<Logo />);
    expect(screen.getByText('Pizzaria')).toBeInTheDocument();
  });
});
