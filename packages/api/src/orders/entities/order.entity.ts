import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  user_id: string;

  @Prop()
  category_id: string;

  @Prop()
  product_id: string;

  @Prop()
  quantity: string;

  @Prop()
  address: string;

  @Prop()
  notes: string;

  @Prop()
  created_date: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
