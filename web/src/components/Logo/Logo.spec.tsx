import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testUtils';
import { Logo } from '.';

describe('Logo component', () => {
  it('renders correctly', () => {
    renderWithRouter(<Logo />);
    expect(screen.getByText('Pizzaria')).toBeInTheDocument();
  });
});
