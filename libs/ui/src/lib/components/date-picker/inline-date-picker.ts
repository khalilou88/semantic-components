import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';

import { ScMonthDays } from './month-days';
import { ScMonthYearHeader } from './month-year-header';
import { ScWeekDaysNames, WeekDayName } from './week-days-names';

@Component({
  selector: 'sc-inline-date-picker',
  imports: [ScWeekDaysNames, ScMonthYearHeader, ScMonthDays],
  template: `
    <div class="inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700">
      <div class="bg-white px-2 py-3 text-center font-semibold dark:bg-gray-700 dark:text-white">
        <sc-month-year-header [monthYear]="monthYear()" (monthYearChange)="setMonthYear($event)" />
      </div>

      <sc-week-days-names [weekDaysNames]="weekDaysNames()" />

      <sc-month-days
        [days]="monthDays()"
        [firstDayMonth]="firstDayMonth()"
        [selectedDay]="selectedDay()"
        (selectedDayChange)="setSelectedDay($event)"
      />

      <div class="mt-2 flex space-x-2 rtl:space-x-reverse">
        <button
          class="bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 w-1/2 rounded-lg px-5 py-2 text-center text-sm font-medium text-white focus:ring-4"
          type="button"
        >
          Today
        </button>
        <button
          class="focus:ring-primary-300 w-1/2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          type="button"
        >
          Clear
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInlineDatePicker implements OnInit {
  year = signal<number>(0);
  month = signal<number>(0);
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

  selectedDay = signal<string>('');

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit() {
    this.init();
    this.setLocaleDayNames();
  }

  init() {
    const today = new Date();
    this.year.set(today.getFullYear());
    this.month.set(today.getMonth());
  }

  setSelectedDay(day: string) {
    this.selectedDay.set(day);
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
