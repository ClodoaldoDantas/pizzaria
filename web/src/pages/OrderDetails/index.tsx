import { FormEvent, useEffect, useState } from 'react';
import { Badge, Button, Card, Form } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { Order } from '../../interfaces/Order';
import { api } from '../../services/api';
import { orderLabels, orderVariants } from '../../utils/orderUtils';
import { Toast } from '../../utils/swal';

type Params = {
  id: string;
};

export function OrderDetails() {
  const history = useHistory();
  const params = useParams<Params>();
  const [order, setOrder] = useState<Order>();
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/orders/${params.id}`).then(response => {
      const order: Order = response.data;
      setOrder(order);
      setStatus(order.status);
    });
  }, [params.id]);

  function handleChange(event: FormEvent<HTMLSelectElement>) {
    setStatus(event.currentTarget.value);
  }

  async function updateStatus() {
    const response = await api.patch(`/orders/${params.id}`, { status });

    setOrder(response.data as Order);

    await Toast.fire({
      icon: 'success',
      title: 'Status do pedido alterado com sucesso',
    });
  }

  if (!order) {
    return null;
  }

  return (
    <section id="page-order-details">
      <PageHeader title={`Pedido #${params.id}`} />

      <Card>
        <Card.Body>
          <div className="fs-6 mb-1">
            <strong>Item:</strong>
            <span className="ms-2">{order.item.name}</span>
          </div>

          <div className="fs-6 mb-1">
            <strong>Descrição:</strong>
            <span className="ms-2">{order.item.description}</span>
          </div>

          <div className="fs-6 mb-1">
            <strong>Quantidade:</strong>
            <span className="ms-2">{order.quantity}</span>
          </div>

          <div className="fs-6 mb-1">
            <strong>Total:</strong>
            <span className="ms-2">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(order.total)}
            </span>
          </div>

          <div className="fs-6 mb-3">
            <strong>Status:</strong>
            <span className="ms-2">
              <Badge bg={orderVariants[order.status]}>
                {orderLabels[order.status]}
              </Badge>
            </span>
          </div>

          <Form.Select value={status} onChange={handleChange}>
            <option>Selecione o status do pedido</option>
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Entregue</option>
            <option value="CANCELLED">Cancelado</option>
          </Form.Select>
        </Card.Body>

        <Card.Footer>
          <Button onClick={() => history.goBack()} variant="secondary">
            Voltar
          </Button>
          <Button onClick={updateStatus} className="ms-2" variant="success">
            Alterar Status do pedido
          </Button>
        </Card.Footer>
      </Card>
    </section>
  );
}
