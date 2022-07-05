import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Drawer } from '../Drawer';
import { Logo } from '../Logo';
import { SidebarNav } from './SidebarNav';

import './styles.scss';

export function Sidebar() {
  const isTablet = useMediaQuery('(max-width: 900px)');

  if (isTablet) {
    return <Drawer />;
  }

  return (
    <div className="sidebar bg-dark text-white p-3">
      <Logo />
      <hr />
      <SidebarNav />
    </div>
  );
}
