import { useContext } from 'react';
import { DrawerContext } from '../contexts/DrawerContext';

export const useDrawer = () => useContext(DrawerContext);
