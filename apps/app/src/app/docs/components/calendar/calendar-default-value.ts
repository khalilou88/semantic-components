import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-calendar-default-value',
  imports: [ScCalendar, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="calendarForm">
      <sc-calendar formControlName="date" />
    </form>

    <div class="mt-10">
      {{ calendarForm.value | json }}
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDefaultValue {
  calendarForm = new FormGroup({
    date: new FormControl(Temporal.PlainDate.from('1988-06-25')),
  });
}
