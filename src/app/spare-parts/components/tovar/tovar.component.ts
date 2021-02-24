import { Component } from '@angular/core';

import { TOVARS } from '../../../mock-data/tovars';

@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.scss']
})
export class TovarComponent {
  tovars = TOVARS;
}
