import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';



export class FilterPockemonDto  extends PaginationDto{
    @IsString()
    @IsOptional()
    search?: string;
}