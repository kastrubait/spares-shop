import { Component, Output, EventEmitter } from '@angular/core';

import { ISort } from '../../models/sort.model';
import { SORT_KEY, SORT_DIRECTION } from '../../constants/constants';

interface IndicatorStyle {
  indicator__none: boolean;
  indicator__asc: boolean;
  indicator__desc: boolean;
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
  sortActiveName = SORT_KEY[0].value;
  clickCount = 0;
  indicatorStyle: IndicatorStyle = {
    indicator__none: true,
    indicator__asc: false,
    indicator__desc: false
  };

  changeSortActive(el: HTMLElement): void {
    this.sortOptions.active = el.getAttribute('data-sortBy') || SORT_KEY[0].active;
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
      indicator__none: clickCount % 3 === 0,
      indicator__asc: clickCount % 3 === 1,
      indicator__desc: clickCount % 3 === 2
    };
  }
}
