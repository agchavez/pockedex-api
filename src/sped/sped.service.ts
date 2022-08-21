import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pockemon } from '../pockemon/entities/pockemon.entity';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import {
  InfoPockeResponse,
  PockeResponse,
} from './interface/pockeapi.interface';

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
    
    //Obtener los datos de cada pockemon
    const pockemons = await Promise.all(
      data.results.map(async (pockemon) => {
        const number: number = +pockemon.url.split('/')[6];
        const {sprites} = await this.axios.get<InfoPockeResponse>(
          pockemon.url,
        );
        return {
          name: pockemon.name,
          urlImage: sprites.front_default,
          dream_world: sprites.other?.dream_world.front_default,
          number,
        };
      }),
    );
    // const listPokemon: any[] = [];
    // data.results.forEach((result) => {
    //   const number: number = +result.url.split('/')[6];
    //   const { sprites } = await this.axios.get<InfoPockeResponse>(
    //     'https://pokeapi.co/api/v2/pokemon/' + number,
    //   );
    //   listPokemon.push({
    //     number,
    //     name: result.name,
    //     urlImage: sprites.front_default,
    //   });
    // });
    await this.pockemonModel.insertMany(pockemons);
    return `Se cargaron ${pockemons.length} pokemons`;
  }
}
