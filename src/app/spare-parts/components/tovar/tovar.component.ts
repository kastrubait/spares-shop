import {
 Component, Input, Output, EventEmitter
} from '@angular/core';

import { ITovar } from '../../models/tovar.model';
import { TEMPLATE_TOVAR } from '../../../core/services/constants.service';

@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.scss']
})
export class TovarComponent {
  @Input() tovar: ITovar = TEMPLATE_TOVAR;

  @Output() tovarSelected: EventEmitter<ITovar> = new EventEmitter<ITovar>();

  selectTovar(tovar: ITovar): void {
    this.tovarSelected.emit(tovar);
  }
}
