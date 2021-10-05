import { Request, Response } from 'express';
import { OrderModel } from '../models/Order';

export class OrdersController {
  async create(request: Request, response: Response) {
    const { item, quantity = 1, status = 'PENDING' } = request.body;
    const order = await OrderModel.create({ item, quantity });
    await order.populate('item');

    return response.json(order);
  }

  async findAll(request: Request, response: Response) {
    const orders = await OrderModel.find();
    return response.json(orders);
  }
}
