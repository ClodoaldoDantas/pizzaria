import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import {
  MdLocalPizza,
  MdOutlineDashboard,
  MdRestaurantMenu,
} from 'react-icons/md';

import { FaClipboardList } from 'react-icons/fa';
import './styles.scss';

const navItems = [
  {
    label: 'Dashboard',
    link: '/',
    icon: <MdOutlineDashboard size={20} />,
  },
  {
    label: 'Produtos',
    link: '/products',
    icon: <MdRestaurantMenu size={20} />,
  },
  {
    label: 'Pedidos',
    link: '/orders',
    icon: <FaClipboardList size={20} />,
  },
];

export function SidebarNav() {
  const { pathname } = useLocation();

  return (
    <>
      <Link to="/" className="text-white text-decoration-none logo">
        <MdLocalPizza size={28} />
        <span className="fs-4 ms-1">Pizzas</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column">
        {navItems.map(({ label, link, icon }) => (
          <li key={label} className="nav-item">
            <Link
              to={link}
              className={cx('nav-link', 'text-white', {
                active: link === pathname,
              })}
            >
              {icon}
              <span className="ms-2">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
