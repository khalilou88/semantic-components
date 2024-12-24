import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '../../utils';
import { ScButton } from '../button';
import { ScCard, ScCardContent, ScCardFooter, ScCardHeader } from '../card';
import { ScMonthDays } from './month-days';
import { ScMonthYearHeader } from './month-year-header';
import { WeekDayName } from './util';

@Component({
  selector: 'sc-calendar',
  imports: [
    ScMonthYearHeader,
    ScMonthDays,
    ScCard,
    ScCardHeader,
    ScButton,
    ScCardFooter,
    ScCardContent,
  ],
  template: `
    <div sc-card>
      <div sc-card-header>
        <sc-month-year-header [monthYear]="monthYear()" (monthYearChange)="setMonthYear($event)" />
      </div>

      <div sc-card-content>
        <sc-month-days
          [weekDaysNames]="weekDaysNames()"
          [days]="monthDays()"
          [firstDayMonth]="firstDayMonth()"
          [selectedDay]="value()"
          (selectedDayChange)="setSelectedDay($event)"
        />
      </div>

      <div class="justify-between" sc-card-footer>
        <button sc-button variant="outline" type="button">Cancel</button>
        <button sc-button type="button">Done</button>
      </div>
    </div>
  `,
  host: {
    '[class]': 'classes()',
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
  ],
})
export class ScCalendar implements OnInit, ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  private readonly localeId = inject(LOCALE_ID);

  date = computed(() => {
    console.log(this.value());

    if (this.value()) {
      return new Date(this.value());
    }
    return new Date();
  });

  year = linkedSignal(() => this.date().getFullYear());

  month = linkedSignal(() => this.date().getMonth());

  weekDaysNames = signal<WeekDayName[]>([]);

  monthYear = computed(() => {
    const options = {
      month: 'long',
      year: 'numeric',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    const s = new Intl.DateTimeFormat(this.localeId, options).format(
      new Date(this.year(), this.month(), 1),
    );

    return s;
  });

  monthDays = computed(() => {
    // Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
    // but by using 0 as the day it will give us the last day of the prior
    // month. So passing in 1 as the month number will return the last day
    // of January, not February
    const numOfDays = new Date(this.year(), this.month() + 1, 0).getDate();

    const days = [];

    for (let i = 1; i <= numOfDays; i++) {
      const date = new Date(this.year(), this.month(), i);

      days.push(
        `${date.getFullYear()}-${this.twoDigits(date.getMonth() + 1)}-${this.twoDigits(date.getDate())}`,
      );
    }

    return days;
  });

  firstDayMonth = computed(() => {
    const date = new Date(this.year(), this.month(), 1);
    const intlLongFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'long' });

    const dayName = intlLongFormatter.format(date);
    return this.weekDaysNames()
      .map((e) => e.long)
      .indexOf(dayName);
  });

  value = model<string>('');

  setSelectedDay(day: string) {
    this.value.set(day);

    this._onChange(day);
    this._cdr.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  private readonly _disabledByCva = signal(false);
  setDisabledState?(isDisabled: boolean): void {
    this._disabledByCva.set(isDisabled);
  }

  ngOnInit() {
    this.setLocaleDayNames();
  }

  //https://github.com/angular/angular/issues/57193
  private setLocaleDayNames() {
    const weekDaysNames = [];
    const intlNarrowFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'narrow' });
    const intlShortFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'short' });
    const intlLongFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'long' });

    let k = 0;
    const firstDayOfWeek = this.getFirstDayOfWeek();
    if (firstDayOfWeek === 7) {
      // First day of the week is Sunday
      k = 3; // 3th January 2021 is a Sunday
    }
    if (firstDayOfWeek === 1) {
      // First day of the week is Monday
      k = 4; // 4th January 2021 is a Monday
    }

    for (let i = 0; i < 7; i += 1) {
      const date = new Date(Date.UTC(2021, 0, i + k));
      weekDaysNames.push({
        narrow: intlNarrowFormatter.format(date),
        short: intlShortFormatter.format(date),
        long: intlLongFormatter.format(date),
      });
    }

    this.weekDaysNames.set(weekDaysNames);
  }

  private getFirstDayOfWeek(): number {
    const locale = new Intl.Locale(this.localeId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (locale as any).getWeekInfo().firstDay;
  }

  setMonthYear(n: number) {
    if (n === 1) {
      if (this.month() < 11) {
        this.month.update((value) => value + 1);
      } else {
        this.month.set(0);
        this.year.update((value) => value + 1);
      }
    }

    if (n === -1) {
      if (this.month() > 0) {
        this.month.update((value) => value - 1);
      } else {
        this.month.set(11);
        this.year.update((value) => value - 1);
      }
    }
  }

  twoDigits(n: number) {
    return n.toLocaleString(this.localeId, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }
}
