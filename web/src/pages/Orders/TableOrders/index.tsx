import {
  Badge,
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from 'react-bootstrap';

import { FaHammer } from 'react-icons/fa';
import { Order } from '../../../interfaces/Order';
import { orderLabels, orderVariants } from '../../../utils/orderUtils';

type TableOrdersProps = {
  orders: Order[];
  onNavigate: (orderId: string) => void;
};

export function TableOrders({ orders, onNavigate }: TableOrdersProps) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>ID do pedido</th>
          <th>Item</th>
          <th>Total</th>
          <th>Status</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>

      <tbody>
        {orders.map(order => (
          <tr key={order._id}>
            <td>
              #{order._id}
              {order.status === 'PENDING' && (
                <Spinner
                  className="ms-2"
                  variant="primary"
                  animation="grow"
                  size="sm"
                />
              )}
            </td>
            <td>{order.item.name}</td>
            <td>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(order.total)}
            </td>
            <td>
              <Badge bg={orderVariants[order.status]}>
                {orderLabels[order.status]}
              </Badge>
            </td>
            <td className="text-center">
              <OverlayTrigger
                placement="top-end"
                overlay={<Tooltip>Detalhes do pedido</Tooltip>}
              >
                <Button
                  onClick={() => onNavigate(order._id)}
                  variant="primary"
                  size="sm"
                >
                  <FaHammer size={18} />
                </Button>
              </OverlayTrigger>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
