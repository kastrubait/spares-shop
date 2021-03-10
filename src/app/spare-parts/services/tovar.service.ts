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
    // Http request to get information about tovars;
    return this.tovars;
  }

  getTovarById(id: number):ITovar {
    this.tovars = this.getAllTovars();
    const indexTovar: number = this.tovars.findIndex((item) => item.id === id);
    if (indexTovar > -1) {
      this.tovarById = this.tovars[indexTovar];
    }
    return this.tovarById;
  }
}

export class MockTovarService extends TovarService {
  tovars: ITovar[] = [];

  getAllTovars (): ITovar[] {
    this.tovars = TOVARS;
    return this.tovars;
  }
}
