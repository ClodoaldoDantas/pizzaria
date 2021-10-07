import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PageHeader } from '../../components/PageHeader';

export function EditProduct() {
  const [active, setActive] = useState(true);

  return (
    <section id="page-products-add">
      <PageHeader title="Editar Produto" />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Imagem</Form.Label>
          <Form.Control type="url" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Check
          checked={active}
          onChange={event => setActive(event.target.checked)}
          type="switch"
          label="Ativo"
          className="mb-3"
        />

        <Button variant="primary" type="submit">
          Salvar Produto
        </Button>
      </Form>
    </section>
  );
}
