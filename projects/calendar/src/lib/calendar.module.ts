import { CalendarModule, DatePickerModule } from '@syncfusion/ej2-angular-calendars'

import { CalendarComponent } from './calendar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule,
    CalendarModule,
    DatePickerModule
  ],
  exports: [CalendarComponent]
})
export class UiCalendarModule { }
