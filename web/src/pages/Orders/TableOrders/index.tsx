import { Badge, Table, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaHammer } from 'react-icons/fa';
import { Order } from '../../../interfaces/Order';

type TableOrdersProps = {
  orders: Order[];
};

const orderLabels = {
  PENDING: 'Pendente',
  PREPARING: 'Preparando',
  DONE: 'Entregue',
  CANCELLED: 'Cancelado',
};

const orderVariants = {
  PENDING: 'secondary',
  PREPARING: 'warning',
  DONE: 'success',
  CANCELLED: 'danger',
};

export function TableOrders({ orders }: TableOrdersProps) {
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
            <td>#{order._id.substr(0, 15)}</td>
            <td>{order.item.name}</td>
            <td>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(order.item.price * order.quantity)}
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
                <Button variant="primary" size="sm">
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
