import useMedia from 'use-media';
import { Button } from 'react-bootstrap';
import { useDrawer } from '../../contexts/DrawerContext';
import { FiMenu } from 'react-icons/fi';

type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  const { openDrawer } = useDrawer();
  const isTablet = useMedia({ maxWidth: 900 });

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
