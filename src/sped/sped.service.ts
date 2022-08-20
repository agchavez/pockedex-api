import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PockeResponse } from '../../dist/sped/interface/pockeapi.interface';
import { Pockemon } from '../pockemon/entities/pockemon.entity';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SpedService {
  constructor(
    @InjectModel(Pockemon.name)
    private readonly pockemonModel: Model<Pockemon>,
    private readonly axios: AxiosAdapter,
  ) {}
  async loadData(limit: number = 10) {
    //Delete all data from pockemon collection
    await this.pockemonModel.deleteMany({});
    const data = await this.axios.get<PockeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
    );
    const listPokemon: any[] = [];
    data.results.forEach((result) => {
      const number: number = +result.url.split('/')[6];
      listPokemon.push({
        number,
        name: result.name,
      });
    });

    await this.pockemonModel.insertMany(listPokemon);
    return `Se cargaron ${listPokemon.length} pokemons`;
  }
}
