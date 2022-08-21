import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

enum Types {
    nomral = 'nomral',
    fighting = 'fighting',
    flying = 'flying',
    poison = 'poison',
  }

@Schema()
export class Pockemon extends Document{
    @Prop({
        unique: true,
        required: true,
    })
    name: string;

    @Prop({
        required: true,
        default: Types.nomral,
        enum: Types
    })
    type: string;

    @Prop({
        unique: true,
        required: true,
    })
    number: number;

    @Prop({
        required: false,
        default: "",
    })
    urlImage: string;
    
    @Prop({
        required: false,
        default: "",
    })
    dream_world: string;
    
}


export const PockemonSchema = SchemaFactory.createForClass(Pockemon);