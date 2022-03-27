import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

import { Order } from '../../interfaces/Order';
import { api } from '../../services/api';
import { Toast } from '../../utils/swal';
import { PageHeader } from '../../components/PageHeader';
import { TableOrders } from './TableOrders';

export function Orders() {
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('orders').then(response => {
      setOrders(response.data);
    });

    const socket = io('https://pizzariaserver.herokuapp.com/');

    socket.on('newOrder', async data => {
      const newOrder: Order = data;
      setOrders(prevState => [newOrder, ...prevState]);

      new Audio(`${process.env.PUBLIC_URL}/notification.mp3`).play();

      await Toast.fire({
        icon: 'info',
        title: 'Novo pedido adicionado',
      });
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
