import { Offcanvas } from 'react-bootstrap';
import { useDrawer } from '../../hooks/useDrawer';
import { Logo } from '../Logo';
import { SidebarNav } from '../Sidebar/SidebarNav';

export function Drawer() {
  const { isOpen, closeDrawer } = useDrawer();

  return (
    <Offcanvas
      className="bg-dark text-white"
      show={isOpen}
      onHide={closeDrawer}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Logo />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SidebarNav />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
