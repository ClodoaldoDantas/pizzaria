import { useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { Order } from '../../interfaces/Order';
import { api } from '../../services/api';
import { TableOrders } from './TableOrders';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  return (
    <section id="page-orders">
      <PageHeader title="Pedidos" />

      <TableOrders orders={orders} />
    </section>
  );
}
