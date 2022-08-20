import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PockeResponse } from '../../dist/sped/interface/pockeapi.interface';

@Injectable()
export class SpedService {
  
  private readonly axios: AxiosInstance = axios;
  async loadData() {
      const { data } = await this.axios.get<PockeResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      data.results.forEach(result => {
        const number:number = +result.url.split('/').pop();

        console.log(result.name);
      })
      return data.results;
  }
}
