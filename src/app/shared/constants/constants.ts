import { SortDirection } from "../models/sort.model";

export const TOVARS_IN_CART = 'cart_tovars';

export const HELP = '☎';

export const SORT_DIRECTION: SortDirection[] = ['', 'asc', 'desc'];

export const SORT_KEY = [
  { active: 'title', value: 'Наименованию' },
  { active: 'quantity', value: 'Количеству' },
  { active: 'summ', value: 'Общей сумме' },
  { active: 'popularity', value: 'Популярности' },
  { active: 'price', value: 'Цене' }
]
