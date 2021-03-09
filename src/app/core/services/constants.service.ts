import { InjectionToken, Injectable } from '@angular/core';

import { ITovar } from '../../spare-parts/models/tovar.model';
import { TovarCategory, PriceType } from '../../spare-parts/models/categories.model';

export interface IAppConstants {
  App: string;
  Ver: string;
}

@Injectable()

export class ConstantsService {
taskManagesConst: IAppConstants = {
  App: 'TaskManager',
  Ver: '1.0',
};

templateTovar: ITovar = {
  id: 0,
  vendorCode: '',
  title: '',
  description: '',
  country: '',
  price: [
    {
      priceType: PriceType.retail,
      cost: 0
    },
    {
      priceType: PriceType.opt1,
      cost: 0
    },
  ],
  category: TovarCategory.sparesT150,
  imgLink: '',
  createDate: 1592946866729,
  isAvailable: false
};
}

export const TEST_CONSTANTS = new InjectionToken<IAppConstants>('test.constants');
export const TEST_DI_CONSTANTS = new ConstantsService().taskManagesConst;
export const TEMPLATE_TOVAR = new ConstantsService().templateTovar;
