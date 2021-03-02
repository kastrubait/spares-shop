import { TovarCategory, PriceType } from '../spare-parts/models/categories.model';
import { ITovar } from '../spare-parts/models/tovar.model';

export const TOVARS: ITovar[] = [
  {
    id: 1,
    vendorCode: '150.21.024-2',
    title: 'Диск сцепления Т-150 (А)',
    description: '',
    country: 'КНР',
    price: [
      {
        priceType: PriceType.retail,
        cost: 57.24
      },
      {
        priceType: PriceType.opt1,
        cost: 54.39
      },
    ],
    category: TovarCategory.sparesT150,
    imgLink: '../../assets/img/not-available.png',
    createDate: 1592946866729,
    isAvailable: true
  },
  {
    id: 2,
    vendorCode: 'Т25-1701252',
    title: 'Вал вторичный',
    description: '',
    country: 'Россия',
    price: [
      {
        priceType: PriceType.retail,
        cost: 214.25
      },
      {
        priceType: PriceType.opt1,
        cost: 203.54
      }
    ],
    category: TovarCategory.sparesT16,
    imgLink: '../../assets/img/Т25-1701252.png',
    createDate: 1592946870954,
    isAvailable: false
  },
  {
    id: 3,
    vendorCode: 'Т30.37.185',
    title: 'Вилка реверса (широкая 38мм) Т-25 (А)',
    description: '',
    country: 'Украина',
    price: [
      {
        priceType: PriceType.retail,
        cost: 17.44
      },
      {
        priceType: PriceType.opt1,
        cost: 16.57
      }
    ],
    category: TovarCategory.sparesT25,
    imgLink: '../../assets/img/Т30.37.185.png',
    createDate: 1592946878394,
    isAvailable: true,
  },
  {
    id: 4,
    vendorCode: 'Т30.37.085',
    title: 'Колонка с блокировкой Т-25 (А) (Т30.37.085)',
    description: '',
    country: 'КНР',
    price: [
      {
        priceType: PriceType.retail,
        cost: 129.96
      },
      {
        priceType: PriceType.opt1,
        cost: 123.46
      }
    ],
    category: TovarCategory.sparesT25,
    imgLink: '../../assets/img/Т30.37.085.png',
    createDate: 1592946878394,
    isAvailable: true,
  },
]
