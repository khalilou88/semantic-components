import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { isToday } from './calendar-utils';
import { ScDayButton } from './day-button';
import { CalendarDay, ScActiveDate } from './types';

@Component({
  selector: 'sc-day-selector',
  imports: [ScDayButton],
  template: `
    @for (weekday of weekdays(); track weekday) {
      <abbr class="size-10 text-center text-muted-foreground">
        {{ weekday }}
      </abbr>
    }

    @for (day of calendarDays(); track day.date) {
      <button
        [variant]="getVariant(day)"
        [isFocused]="isFocused(day.date)"
        (click)="selectDay(day); $event.stopPropagation()"
        sc-day-button
        size="icon"
      >
        {{ day.dayOfMonth }}
      </button>
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDaySelector {
  readonly calendarDays = input.required<CalendarDay[]>();
  readonly weekdays = input.required<string[]>();
  readonly dateSelected = output<Temporal.PlainDate>();

  readonly selectedDate = input<Temporal.PlainDate>();
  readonly activeDate = input.required<ScActiveDate>();

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('grid grid-cols-7 gap-px', this.classInput()));

  protected getVariant(day: CalendarDay) {
    if (this.isSelected(day.date)) {
      return 'primary';
    }

    if (this.isActive(day.date)) {
      return 'secondary';
    }

    if (isToday(day.date)) {
      return 'outline';
    }

    return 'ghost';
  }

  protected selectDay(day: CalendarDay) {
    this.dateSelected.emit(day.date);
  }

  private isSelected(date: Temporal.PlainDate): boolean {
    return this.selectedDate() ? date.equals(this.selectedDate()!) : false;
  }

  private isActive(date: Temporal.PlainDate): boolean {
    return this.activeDate() ? date.equals(this.activeDate().value) : false;
  }

  protected isFocused(date: Temporal.PlainDate): boolean {
    return this.isActive(date) && !!this.activeDate()?.focus;
  }
}
