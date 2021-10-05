import { Router } from 'express';
import { PizzasController } from '../controllers/PizzasController';

const routes = Router();
const pizzasController = new PizzasController();

routes.post('/pizzas', pizzasController.create);

export { routes };
