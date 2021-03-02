import { Injectable } from '@angular/core';

import { TOVARS } from '../../mock-data/tovars';
import { ITovar } from '../models/tovar.model';

@Injectable({
  providedIn: 'root'
})
export class TovarService {
  tovars: ITovar[] = [];
  tovarById!: ITovar;

  getAllTovars (): ITovar[] {
    this.tovars = TOVARS;
    return this.tovars;
  }

  getTovarById(id: number):ITovar {
    const indexTovar: number = this.tovars.findIndex((item) => item.id === id);
    if (indexTovar > -1) {
      this.tovarById = this.tovars[indexTovar];
    }
    return this.tovarById;
  }
}
