import { CalendarModule, DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { CalendarComponent } from 'projects/calendar/src/lib/calendar.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Libraries/Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      declarations: [CalendarComponent],
      imports: [CommonModule, CalendarModule, DatePickerModule],
    }),
  ],
} as Meta;

const Template: Story<CalendarComponent> = args => ({
  props: {
    ...args
  },
});


export const Default = Template.bind({});
Default.args = {
  datePickerValue: "Fri Jun 25 2021 16:00:00 GMT+0",
};
