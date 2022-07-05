import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

import { useLocation } from 'react-router-dom';

interface DrawerProviderProps {
  children: ReactNode;
}

type DrawerContextData = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext({} as DrawerContextData);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    closeDrawer();
  }, [location.pathname]);

  return (
    <DrawerContext.Provider value={{ isOpen, closeDrawer, openDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
