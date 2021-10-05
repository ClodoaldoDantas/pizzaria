import { Request, Response } from 'express';
import { PizzaModel } from '../models/Pizza';

export class PizzasController {
  async create(request: Request, response: Response) {
    const { name, description, price, active, image } = request.body;

    const pizza = await PizzaModel.create({
      name,
      description,
      price,
      active,
      image,
    });

    return response.json(pizza);
  }
}
