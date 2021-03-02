import { ITovar } from '../../spare-parts/models/tovar.model';
import { PriceType } from '../../spare-parts/models/categories.model';

export interface ITotalCart {
  tovar: ITovar;
  quantity: number;
  price?: PriceType;
  summ?: number;
}
