import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { Order } from '../../interfaces/Order';
import { api } from '../../services/api';
import { TableOrders } from './TableOrders';

export function Orders() {
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  function navigateToOrderDetails(orderId: string) {
    history.push(`/orders/${orderId}`);
  }

  return (
    <section id="page-orders">
      <PageHeader title="Pedidos" />

      <TableOrders orders={orders} onNavigate={navigateToOrderDetails} />
    </section>
  );
}
