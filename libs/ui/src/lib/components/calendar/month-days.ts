import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButton } from '../button';
import { WeekDayName } from './util';

@Component({
  selector: 'sc-month-days',
  imports: [NgClass, ScButton],
  template: `
    @for (weekDayName of weekDaysNames(); track weekDayName.long) {
      <abbr
        class="size-10 text-center text-muted-foreground"
        [title]="weekDayName.long"
        [attr.aria-label]="weekDayName.long"
      >
        {{ weekDayName.short }}
      </abbr>
    }

    @for (day of days(); track $index; let index = $index) {
      <button
        [ngClass]="{
          'col-start-1': index === 0 && firstDayMonth() === 0,
          'col-start-2': index === 0 && firstDayMonth() === 1,
          'col-start-3': index === 0 && firstDayMonth() === 2,
          'col-start-4': index === 0 && firstDayMonth() === 3,
          'col-start-5': index === 0 && firstDayMonth() === 4,
          'col-start-6': index === 0 && firstDayMonth() === 5,
          'col-start-7': index === 0 && firstDayMonth() === 6,
        }"
        [attr.data-sc-day]="day"
        [variant]="isSelected(day) ? 'primary' : 'ghost'"
        (click)="setSelectedDay($event)"
        sc-button
        size="icon"
      >
        {{ day.slice(-2) }}
      </button>
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMonthDays {
  class = input<string>('');

  classes = computed(() => cn('grid grid-cols-7 place-items-center', this.class()));

  weekDaysNames = input.required<WeekDayName[]>();

  days = input.required<string[]>();
  firstDayMonth = input.required<number>();
  selectedDay = input<string>('');

  selectedDayChange = output<string>();

  isSelected(day: string) {
    return day === this.selectedDay();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedDay(event: any) {
    const selectedDay = event.target.dataset.scDay;
    this.selectedDayChange.emit(selectedDay);
  }
}
