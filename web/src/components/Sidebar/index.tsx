import { SidebarNav } from './SidebarNav';
import './styles.scss';

export function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <SidebarNav />
    </div>
  );
}
