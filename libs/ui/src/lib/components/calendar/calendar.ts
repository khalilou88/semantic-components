import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { ScCard, ScCardContent, ScCardHeader } from '../card';
import { ScCalendarHeader } from './calendar-header';
import { generateCalendarDays } from './calendar-utils';
import { CalendarService } from './calendar.service';
import { ScDaySelector } from './day-selector';
import { ScMonthSelector } from './month-selector';
import { View } from './types';
import { getLocalizedDayNames } from './utils';
import { ScYearSelector } from './year-selector';

@Component({
  selector: 'sc-calendar',
  imports: [
    ScYearSelector,
    ScMonthSelector,
    ScDaySelector,
    ScCard,
    ScCardHeader,
    ScCardContent,
    ScCalendarHeader,
  ],
  template: `
    <div sc-card>
      <div sc-card-header>
        <sc-calendar-header
          [currentMonth]="currentMonth()"
          [view]="view()"
          (monthYearChange)="setMonthYear($event)"
          (viewToggled)="toggleView()"
        />
      </div>
      <div sc-card-content>
        @switch (view()) {
          @case ('years') {
            <sc-year-selector
              [currentYear]="currentYear()"
              [previewYear]="previewYear()"
              (yearSelected)="selectYear($event)"
            />
          }
          @case ('months') {
            <sc-month-selector
              [currentMonth]="currentMonth()"
              (monthSelected)="selectMonth($event)"
            />
          }
          @default {
            <sc-day-selector
              [weekdays]="weekdays"
              [selectedDate]="value()"
              [calendarDays]="calendarDays()"
              [date]="date()"
              [currentMonth]="currentMonth()"
              [firstDayOfMonth]="firstDayOfMonth()"
              [lastDayOfMonth]="lastDayOfMonth()"
              (dateSelected)="setValue($event)"
              (nextMonth)="nextMonth()"
              (prevMonth)="prevMonth()"
            />
          }
        }
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCalendar),
      multi: true,
    },
    CalendarService,
  ],
})
export class ScCalendar implements ControlValueAccessor {
  readonly value = model<Temporal.PlainDate>();
  readonly min = input<Temporal.PlainDate>();
  readonly max = input<Temporal.PlainDate>();

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block w-84', this.classInput()));

  private readonly today = signal(Temporal.Now.plainDateISO());

  protected readonly date = computed(() => {
    const v = this.value();
    if (v) {
      return v;
    } else {
      return this.today();
    }
  });

  protected readonly currentYear = linkedSignal(() => {
    return this.date()!.year;
  });

  protected readonly previewYear = linkedSignal(() => {
    return this.currentYear();
  });

  protected readonly currentMonth = linkedSignal(() => {
    return this.date()!.toPlainYearMonth();
  });

  protected readonly firstDayOfMonth = computed(() =>
    this.currentMonth().toPlainDate({
      day: 1,
    }),
  );

  protected readonly lastDayOfMonth = computed(() =>
    this.currentMonth().toPlainDate({
      day: this.currentMonth().daysInMonth,
    }),
  );

  private readonly localeId = inject(LOCALE_ID);

  protected readonly calendarDays = generateCalendarDays(this.localeId, this.currentMonth);

  // Helper methods
  isToday(date: Temporal.PlainDate): boolean {
    const today = Temporal.Now.plainDateISO();
    return date.equals(today);
  }

  isDateDisabled(date: Temporal.PlainDate): boolean {
    if (this.min() && Temporal.PlainDate.compare(date, this.min()!) < 0) {
      return true;
    }
    if (this.max() && Temporal.PlainDate.compare(date, this.max()!) > 0) {
      return true;
    }
    return false;
  }

  protected setValue(date: Temporal.PlainDate): void {
    if (this.isDateDisabled(date)) return;

    this.value.set(date);

    this.onChange(date);
    this.onTouched();
  }

  // Navigation methods
  protected prevMonth(): void {
    if (this.currentMonth()) {
      this.currentMonth.update((currentMonth) => currentMonth.subtract({ months: 1 }));
    }
  }

  protected nextMonth(): void {
    if (this.currentMonth()) {
      this.currentMonth.update((currentMonth) => currentMonth.add({ months: 1 }));
    }
  }

  protected readonly view = signal<View>('days');

  protected toggleView(): void {
    if (this.view() === 'days') {
      this.view.set('years');
    } else if (this.view() === 'years') {
      this.view.set('months');
    } else {
      this.view.set('days');
    }
  }

  weekdays: string[] = getLocalizedDayNames(this.localeId);

  protected setMonthYear(n: number) {
    if (this.view() === 'years') {
      this.previewYear.update((value) => value + n * 20);
    }

    if (this.view() === 'days') {
      if (n === 1) {
        this.nextMonth();
      }

      if (n === -1) {
        this.prevMonth();
      }
    }
  }

  protected selectYear(year: number) {
    this.currentYear.set(year);
    this.currentMonth.update((month) =>
      Temporal.PlainYearMonth.from({ year: year, month: month.month }),
    );
    this.toggleView();
  }

  protected selectMonth(month: Temporal.PlainYearMonth) {
    this.currentMonth.set(month);
    this.toggleView();
  }

  //CVA
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: Temporal.PlainDate) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: Temporal.PlainDate): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: Temporal.PlainDate) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = linkedSignal(() => this.disabledInput());

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
