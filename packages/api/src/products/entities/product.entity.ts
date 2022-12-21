import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productname: string;

  @Prop()
  category_id: string;

  @Prop()
  description: string;

  @Prop()
  ingredients: string;

  @Prop()
  recipe: string;

  @Prop()
  price: string;

  @Prop()
  active: string;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
