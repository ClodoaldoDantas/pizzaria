import { Schema, model } from 'mongoose';
import { Order } from '../interfaces/Order';

const schema = new Schema<Order>({
  item: { type: Schema.Types.ObjectId, ref: 'Pizza', required: true },
  quantity: { type: Number, default: 1 },
});

export const OrderModel = model<Order>('Order', schema);
