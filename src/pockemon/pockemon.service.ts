import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePockemonDto } from './dto/create-pockemon.dto';
import { UpdatePockemonDto } from './dto/update-pockemon.dto';
import { Pockemon } from './entities/pockemon.entity';
import { FilterPockemonDto } from './dto/filter-pockemon.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PockemonService {
  constructor(
    @InjectModel(Pockemon.name)
    private readonly pockemonModel: Model<Pockemon>,
    private readonly configService: ConfigService
  ) {}

  private limitDefault: number = this.configService.get<number>('DEFAULT_LIMIT'); 
  async create(createPockemonDto: CreatePockemonDto) {
    if (await this.findOneByName(createPockemonDto.name)) {
      throw new BadRequestException('El nombre de pockemon ya existe');
    }
    try {
      const pockemon = await this.pockemonModel.create(createPockemonDto);
      return pockemon;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error al crear pockemon, notifique al administrador',
      );
    }
  }

  async findAll({ limit = this.limitDefault, offset = 0, search }: FilterPockemonDto) {
    const [results, count] = await Promise.all([
      this.pockemonModel.find().skip(offset).limit(limit)
      .where({
        name: {
          $regex: search,
        },
      })
      .sort({ number: 1 }),
      this.pockemonModel.countDocuments().where({
        name: {
          $regex: search,
        },
      }),
    ]);
    return {
      results,
      count,
    };
  }

  async findOne(id: string) {
    //bUSCAR POR ID
    if (!isNaN(+id)) {
      let pockemonValue = await this.pockemonModel.findOne({ number: +id });
      if (pockemonValue) {
        return pockemonValue;
      }
      throw new BadRequestException('El pockemon no existe');
    }
    //MONGO ID
    else if (!isValidObjectId(id)) {
      throw new BadRequestException('El id no es valido');
    }
    let pockemon = await this.pockemonModel.findById(id);
    if (!pockemon) {
      throw new BadRequestException('El pockemon no existe');
    }

    return pockemon;
  }

  async findOneByName(name: string) {
    return await this.pockemonModel.findOne({ name });
  }

  async update(id: string, updatePockemonDto: UpdatePockemonDto) {
    let pockemon = await this.findOne(id);
    if (!pockemon) {
      throw new BadRequestException('El pockemon no existe');
    }
    if (
      updatePockemonDto.name &&
      (await this.findOneByName(updatePockemonDto.name))
    ) {
      throw new BadRequestException('El nombre de pockemon ya existe');
    }
    try {
      await pockemon.updateOne(updatePockemonDto);
      return { ...pockemon.toJSON(), ...updatePockemonDto };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error al actualizar pockemon, notifique al administrador',
      );
    }
  }

  async remove(id: string) {
    const pockemon = await this.findOne(id);
    try {
      await pockemon.remove();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error al eliminar pockemon, notifique al administrador',
      );
    }
  }
}
