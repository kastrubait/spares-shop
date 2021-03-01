import { TovarCategory } from './categories.model';

export interface ITovar {
  id: number;
  vendorCode: string;
  title: string;
  description: string;
  country: string;
  price_ret: number;
  price_opt: number;
  category: TovarCategory;
  weight?: number;
  imgLink: string;
  createDate: number;
  isAvailable: boolean;
}

export interface ITovarInCart extends ITovar {
  quantity: number;
  isOptPrice?: boolean;
}
