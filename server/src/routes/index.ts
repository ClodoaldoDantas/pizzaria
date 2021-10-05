import { Router } from 'express';

const routes = Router();

routes.get('/pizzas', (req, res) => {
  return res.send('ok');
});

export { routes };
