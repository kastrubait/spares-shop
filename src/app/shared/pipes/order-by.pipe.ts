import { Pipe, PipeTransform } from '@angular/core';

import { Sort } from '../models/sort.model';
import { ITotalCart } from '../../cart/models/total-card.model';

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  public transform(allTovars: ITotalCart[], sort: Sort): ITotalCart[] {
    const data: ITotalCart[] = allTovars.slice();
    if (!sort.active || sort.direction === '') {
      return allTovars;
    }
    // eslint-disable-next-line no-param-reassign
    allTovars = data.sort((a: ITotalCart, b: ITotalCart) => {
      const isAsc: boolean = sort.direction === 'asc';
      switch (sort.active) {
        case 'cost': {
          const costA = a.tovar.price[0].cost;
          const costB = b.tovar.price[0].cost;
          return compare(costA, costB, isAsc);
        }
        case 'totalSumm': {
          const totalSummA = a.quantity;
          const totalSummB = b.quantity;
          return compare(totalSummA, totalSummB, isAsc);
        }
        case 'quantity': {
          const quantityA = a.summ;
          const quantityB = b.summ;
          return compare(quantityA, quantityB, isAsc);
        }
        case 'title': {
          const titleA = a.tovar.title;
          const titleB = b.tovar.title;
          return compare(titleA, titleB, isAsc);
        }
        default: {
          return 0
        }
      }
    });
    return allTovars;
  }
}
