import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { PageHeader } from '../../components/PageHeader';

type IFormInputs = {
  image: string;
  name: string;
  price: number;
  description: string;
};

const schema = yup.object({
  image: yup.string().required('Imagem é obrigatória'),
  name: yup.string().required('Nome é obrigatório'),
  price: yup.string().required('Preço é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
});

export function AddProduct() {
  const [active, setActive] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: IFormInputs) {
    console.log(data);
  }

  return (
    <section id="page-products-add">
      <PageHeader title="Adicionar Produto" />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            isInvalid={!!errors.image}
            {...register('image')}
          />

          <Form.Control.Feedback type="invalid">
            {errors.image?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            isInvalid={!!errors.name}
            {...register('name')}
          />

          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="text"
            isInvalid={!!errors.price}
            {...register('price')}
          />

          <Form.Control.Feedback type="invalid">
            {errors.price?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            isInvalid={!!errors.description}
            {...register('description')}
          />

          <Form.Control.Feedback type="invalid">
            {errors.description?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          checked={active}
          onChange={event => setActive(event.target.checked)}
          type="switch"
          label="Ativo"
          className="mb-3"
        />

        <Button className="mb-3" variant="primary" type="submit">
          Salvar Produto
        </Button>
      </Form>
    </section>
  );
}
