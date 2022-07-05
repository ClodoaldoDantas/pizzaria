import useMedia from 'use-media';
import { Drawer } from '../Drawer';
import { Logo } from '../Logo';
import { SidebarNav } from './SidebarNav';

import './styles.scss';

export function Sidebar() {
  const isTablet = useMedia({ maxWidth: 900 });

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
