import { Request, Response } from 'express';
import { OrderModel } from '../models/Order';

export class OrdersController {
  async create(request: Request, response: Response) {
    const { item, quantity = 1, status = 'PENDING' } = request.body;
    const order = await OrderModel.create({ item, quantity });
    await order.populate('item');

    request.io.emit('newOrder', order);
    return response.json(order);
  }

  async findAll(request: Request, response: Response) {
    const orders = await OrderModel.find().populate('item');
    return response.json(orders);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const order = await OrderModel.findById(id).populate('item');
    return response.json(order);
  }

  async updateStatus(request: Request, response: Response) {
    const { id } = request.params;
    const { status } = request.body;

    const order = await OrderModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).populate('item');

    request.io.emit('statusChange', order);
    return response.json(order);
  }
}
