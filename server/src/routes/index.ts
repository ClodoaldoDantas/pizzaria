import { Router } from 'express';
import { PizzasController } from '../controllers/PizzasController';

const routes = Router();
const pizzasController = new PizzasController();

routes.post('/pizzas', pizzasController.create);
routes.get('/pizzas', pizzasController.findAll);
routes.get('/pizzas/:id', pizzasController.findById);
routes.put('/pizzas/:id', pizzasController.update);
routes.delete('/pizzas/:id', pizzasController.delete);

export { routes };
