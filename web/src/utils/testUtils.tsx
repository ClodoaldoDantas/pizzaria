import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'test page', route);
  render(ui, { wrapper: BrowserRouter });
};

export const setupMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: () => {
      return {
        matches,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    },
  });
};
