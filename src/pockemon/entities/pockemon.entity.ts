import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pockemon extends Document{
    @Prop({
        unique: true,
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    type: string;

    @Prop({
        unique: true,
        required: true,
    })
    number: number;
    
}


export const PockemonSchema = SchemaFactory.createForClass(Pockemon);