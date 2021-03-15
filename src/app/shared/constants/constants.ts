import { ITovar } from '../../spare-parts/models/tovar.model';
import { TovarCategory, PriceType } from '../../spare-parts/models/categories.model';

export const IS_DEV_ENVIRONMENT = true;

export const TOVARS_IN_CART = 'cart_tovars';

export const TEMPLATE_TOVAR: ITovar = {
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
