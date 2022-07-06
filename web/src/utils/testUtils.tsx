import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (children: ReactNode) => {
  render(<BrowserRouter>{children}</BrowserRouter>);
};
