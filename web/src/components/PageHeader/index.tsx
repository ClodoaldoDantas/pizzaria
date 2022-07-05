import { Button } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';

import { useDrawer } from '../../contexts/DrawerContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  const { openDrawer } = useDrawer();
  const isTablet = useMediaQuery('(max-width: 900px)');

  return (
    <>
      <div className="d-flex align-items-center mt-4">
        {isTablet && (
          <Button className="me-2" variant="outline-dark" onClick={openDrawer}>
            <FiMenu />
          </Button>
        )}
        <h4 className="m-0">{title}</h4>
      </div>
      <hr />
    </>
  );
}
