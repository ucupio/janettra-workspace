import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;
export class Category {
  @Prop()
  categoryname: string;
  @Prop()
  description: string;
  @Prop()
  thumbnail: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
