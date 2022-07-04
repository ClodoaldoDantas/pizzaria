import { Link } from 'react-router-dom';
import { MdLocalPizza } from 'react-icons/md';

import './styles.scss';

export function Logo() {
  return (
    <Link to="/" className="text-white text-decoration-none logo">
      <MdLocalPizza size={28} />
      <span className="fs-4 ms-1">Pizzaria</span>
    </Link>
  );
}
