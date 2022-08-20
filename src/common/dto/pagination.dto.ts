import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsNumber()
    offset: number;
}