// src/yuvak/schemas/yuvak.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type YuvakDocument = Yuvak & Document;

@Schema({ timestamps: true })
export class Yuvak {
  @Prop({ required: true })
  name: string;

  @Prop()
  mobileNumber: string;

  @Prop({ unique: true })
  yuvakId: number;
}

export const YuvakSchema = SchemaFactory.createForClass(Yuvak);
