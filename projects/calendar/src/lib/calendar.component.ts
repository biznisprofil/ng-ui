import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {

  @Input() datePickerValue: string

  constructor(
  ) {}

}
