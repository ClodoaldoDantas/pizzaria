import { Link } from 'react-router-dom';
import { MdLocalPizza, MdRestaurantMenu } from 'react-icons/md';

import { FaClipboardList } from 'react-icons/fa';
import { ActiveLink } from '../../ActiveLink';
import './styles.scss';

const navItems = [
  {
    label: 'Produtos',
    link: '/',
    icon: <MdRestaurantMenu size={20} />,
  },
  {
    label: 'Pedidos',
    link: '/orders',
    icon: <FaClipboardList size={20} />,
  },
];

export function SidebarNav() {
  return (
    <>
      <Link to="/" className="text-white text-decoration-none logo">
        <MdLocalPizza size={28} />
        <span className="fs-4 ms-1">Pizzas</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column">
        {navItems.map(navItem => (
          <li key={navItem.label} className="nav-item">
            <ActiveLink
              label={navItem.label}
              link={navItem.link}
              icon={navItem.icon}
              shouldMatchExactHref={navItem.label === 'Produtos'}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
