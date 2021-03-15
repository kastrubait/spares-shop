import { Component, Output, EventEmitter } from '@angular/core';

import { ISort } from '../../models/sort.model';
import { SORT_KEY, SORT_DIRECTION, DEFAULT_SORT_ACTIVE_INDEX } from '../../constants/constants';

interface IndicatorStyle {
  'indicator--none': boolean;
  'indicator--asc': boolean;
  'indicator--desc': boolean;
}

@Component({
  selector: 'app-filters-block',
  templateUrl: './filters-block.component.html',
  styleUrls: ['./filters-block.component.scss']
})
export class FiltersBlockComponent {
  sortOptions: ISort = {
    active: SORT_KEY[0].active,
    direction: ''
  }

  @Output() sortChanged: EventEmitter<ISort> = new EventEmitter<ISort>();
  sortActiveName = SORT_KEY[DEFAULT_SORT_ACTIVE_INDEX].value
  clickCount = 0;
  indicatorStyle: IndicatorStyle = {
    'indicator--none': true,
    'indicator--asc': false,
    'indicator--desc': false
  };

  changeSortActive(el: HTMLElement): void {
    this.sortOptions.active = el.getAttribute('data-sortBy') || SORT_KEY[DEFAULT_SORT_ACTIVE_INDEX].active;
    this.sortActiveName = el.innerHTML;
    this.indicatorStyle = this.setIndicatorStyle(this.clickCount);
    this.sortChanged.emit(this.sortOptions);
  }

  changeSortDitection(): void {
    this.clickCount += 1;
    this.sortOptions.direction = SORT_DIRECTION[this.clickCount % 3];
    this.indicatorStyle = this.setIndicatorStyle(this.clickCount);
    this.sortChanged.emit(this.sortOptions);
  }

  setIndicatorStyle(clickCount: number): IndicatorStyle {
    return {
      'indicator--none': clickCount % 3 === 0,
      'indicator--asc': clickCount % 3 === 1,
      'indicator--desc': clickCount % 3 === 2
    };
  }
}
