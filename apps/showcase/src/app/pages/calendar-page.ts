import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-calendar-page',
  imports: [ScCalendar, ReactiveFormsModule, JsonPipe],
  template: `
    <div class="m-10">
      <form [formGroup]="calendarForm">
        <sc-calendar formControlName="date" />
      </form>

      <br />
      <br />
      <br />
      <br />
      {{ calendarForm.value | json }}
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {
  calendarForm = new FormGroup({
    date: new FormControl('1988/06/25'),
  });
}
