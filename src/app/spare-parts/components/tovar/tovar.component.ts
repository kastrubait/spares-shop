import {
 Component, Input, Output, EventEmitter
} from '@angular/core';

import { ITovar } from '../../models/tovar.model';

@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.scss']
})
export class TovarComponent {
  @Input() tovar!: ITovar;

  @Output() tovarSelected: EventEmitter<ITovar> = new EventEmitter<ITovar>();

  selectTovar(tovar: ITovar): void {
    this.tovarSelected.emit(tovar);
  }
}
