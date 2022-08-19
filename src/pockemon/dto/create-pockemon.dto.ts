import { IsIn, IsInt, IsString, MinLength } from "class-validator";

export class CreatePockemonDto {
    @IsString({
        message: "El nombe del pockemon debe ser una cadena de texto",
    })
    @MinLength(3, {
        message: "El nombre del pockemon debe tener al menos 3 caracteres",
    })
    name: string;

    @IsString({
        message: "El tipo del pockemon debe ser una cadena de texto",
    })
    @IsIn(["normal", "fighting", "flying", "poison"], {
        message: "El tipo del pockemon debe ser normal, fighting, flying o poison",
    })
    type: string;

    @IsInt({
        message: "El numero del pockemon debe ser un numero entero",
    })
    number: number;
}
