import { TovarCategory, PriceType } from './categories.model';

interface IPrice {
  priceType: PriceType;
  cost: number

}
export interface ITovar {
  id: number;
  vendorCode: string;
  title: string;
  description: string;
  country: string;
  price: IPrice[];
  category: TovarCategory;
  weight?: number;
  imgLink: string;
  createDate: number;
  isAvailable: boolean;
}
