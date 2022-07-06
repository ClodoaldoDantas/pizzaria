import { renderHook, act } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DrawerProvider } from '../../contexts/DrawerContext';
import { useDrawer } from '../../hooks/useDrawer';

type WrapperProps = {
  children: ReactNode;
};

const wrapper = ({ children }: WrapperProps) => (
  <BrowserRouter>
    <DrawerProvider>{children}</DrawerProvider>
  </BrowserRouter>
);

describe('useDrawer hook', () => {
  it('should return isOpen false on initial state', async () => {
    const { result } = renderHook(() => useDrawer(), { wrapper });
    expect(result.current.isOpen).toBe(false);
  });

  it('should be able open the drawer', () => {
    const { result } = renderHook(() => useDrawer(), { wrapper });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.openDrawer();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should be able close the drawer', () => {
    const { result } = renderHook(() => useDrawer(), { wrapper });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.openDrawer();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeDrawer();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
