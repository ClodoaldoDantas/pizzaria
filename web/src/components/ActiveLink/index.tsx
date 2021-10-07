import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';

type ActiveLinkProps = {
  link: string;
  label: string;
  icon: JSX.Element;
  shouldMatchExactHref: boolean;
};

export function ActiveLink({
  link,
  label,
  icon,
  shouldMatchExactHref,
}: ActiveLinkProps) {
  const { pathname } = useLocation();
  let isActive = false;

  if (shouldMatchExactHref && pathname === link) {
    isActive = true;
  }

  if (!shouldMatchExactHref && pathname.includes(link)) {
    isActive = true;
  }

  return (
    <Link
      to={link}
      className={cx('nav-link', 'text-white', {
        active: isActive,
      })}
    >
      {icon}
      <span className="ms-2">{label}</span>
    </Link>
  );
}
