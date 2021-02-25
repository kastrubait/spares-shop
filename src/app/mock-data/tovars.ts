import { TovarCategory } from '../spare-parts/models/categories.model';
import { ITovar } from '../spare-parts/models/tovar.model';

export const TOVARS: ITovar[] = [
  {
    id: 1,
    vendorCode: '150.21.024-2',
    title: 'Диск сцепления Т-150 (А)',
    description: '',
    country: 'КНР',
    price_ret: 57.24,
    price_opt: 54.39,
    category: TovarCategory.sparesT150,
    imgLink: '../../assets/img/not-available.png',
    createDate: 1592946866729,
    isAvailable: false
  },
  {
    id: 2,
    vendorCode: 'Т25-1701252',
    title: 'Вал вторичный',
    description: '',
    country: 'Россия',
    price_ret: 214.25,
    price_opt: 203.54,
    category: TovarCategory.sparesT16,
    imgLink: '../../assets/img/Т25-1701252.png',
    createDate: 1592946870954,
    isAvailable: true
  },
  {
    id: 3,
    vendorCode: 'Т30.37.185',
    title: 'Вилка реверса (широкая 38мм) Т-25 (А)',
    description: '',
    country: 'Украина',
    price_ret: 17.44,
    price_opt: 16.57,
    category: TovarCategory.sparesT25,
    imgLink: '../../assets/img/Т30.37.185.png',
    createDate: 1592946878394,
    isAvailable: true,
  },
]
