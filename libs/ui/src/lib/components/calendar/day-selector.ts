import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
  signal,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { isToday } from './calendar-utils';
import { ScDayButton } from './day-button';
import { CalendarDay } from './types';

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
        (keydown)="handleKeydown($event)"
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

  readonly selectedDate = input<Temporal.PlainDate>();
  readonly dateSelected = output<Temporal.PlainDate>();

  protected readonly focusedDate = signal<Temporal.PlainDate | undefined>(undefined);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('grid grid-cols-7 gap-px', this.classInput()));

  readonly date = input.required<Temporal.PlainDate>();
  readonly currentMonth = input.required<Temporal.PlainYearMonth>();
  readonly firstDayOfMonth = input.required<Temporal.PlainDate>();
  readonly lastDayOfMonth = input.required<Temporal.PlainDate>();

  readonly prevMonth = output<void>();
  readonly nextMonth = output<void>();

  protected getVariant(day: CalendarDay) {
    if (this.isSelected(day.date)) {
      return 'primary';
    }

    if (this.isFocused(day.date)) {
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

  isSelected(date: Temporal.PlainDate): boolean {
    return this.selectedDate() ? date.equals(this.selectedDate()!) : false;
  }

  isFocused(date: Temporal.PlainDate): boolean {
    return this.focusedDate() ? date.equals(this.focusedDate()!) : false;
  }

  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.moveFocus(-1);
        event.preventDefault();
        break;
      case 'ArrowRight':
        this.moveFocus(1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.moveFocus(-7);
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.moveFocus(7);
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        if (
          Temporal.PlainDate.compare(this.focusedDate()!, this.calendarDays()[0].date) >= 0 &&
          Temporal.PlainDate.compare(
            this.focusedDate()!,
            this.calendarDays()[this.calendarDays().length - 1].date,
          ) <= 0
        ) {
          this.dateSelected.emit(this.focusedDate()!);
          event.preventDefault();
        }
        break;
      case 'Home':
        // Move to first day of the month

        this.focusedDate.set(this.firstDayOfMonth());

        event.preventDefault();
        break;

      case 'End':
        // Move to last day of the month
        this.focusedDate.set(this.lastDayOfMonth());
        event.preventDefault();
        break;
      case 'PageUp':
        // Previous month
        this.prevMonth.emit();
        event.preventDefault();
        break;
      case 'PageDown':
        // Next month
        this.nextMonth.emit();
        event.preventDefault();
        break;
    }
  }

  // Move focus in the calendar grid with support for month navigation
  private moveFocus(delta: number): void {
    // if date is in the current month else focus first date of the current month
    if (this.focusedDate() === undefined) {
      if (
        this.date()?.year === this.currentMonth().year &&
        this.date()?.month === this.currentMonth().month
      ) {
        this.focusedDate.set(this.date());
        return;
      }
      this.focusedDate.set(
        new Temporal.PlainDate(this.currentMonth().year, this.currentMonth().month, 1),
      );
      return;
    }

    let newDate;

    if (Math.sign(delta) === 1) {
      newDate = this.focusedDate()?.add({ days: delta });
    }

    if (Math.sign(delta) === -1) {
      newDate = this.focusedDate()?.subtract({ days: Math.abs(delta) });
    }

    if (!newDate) {
      return;
    }

    if (Temporal.PlainDate.compare(newDate, this.calendarDays()[0].date) < 0) {
      this.prevMonth.emit();
    }

    if (
      Temporal.PlainDate.compare(
        newDate,
        this.calendarDays()[this.calendarDays().length - 1].date,
      ) > 0
    ) {
      this.nextMonth.emit();
    }

    this.focusedDate.set(newDate);
  }
}
