import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';

import './styles.scss';

export function SidebarNav() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const productLinkIsActive = isHome || pathname.includes('/products');
  const ordersLinkIsActive = pathname.includes('/orders');

  return (
    <ul data-testid="sidebar-nav" className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link
          to="/"
          className={cx('nav-link text-white', {
            active: productLinkIsActive,
          })}
        >
          <MdRestaurantMenu size={20} />
          <span className="ms-2">Produtos</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/orders"
          className={cx('nav-link text-white', {
            active: ordersLinkIsActive,
          })}
        >
          <FaClipboardList size={20} />
          <span className="ms-2">Pedidos</span>
        </Link>
      </li>
    </ul>
  );
}
