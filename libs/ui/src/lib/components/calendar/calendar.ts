import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';
import { LOCALE_ID, OnInit, inject, signal } from '@angular/core';

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
          [selectedDay]="selectedDay()"
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
})
export class ScCalendar implements OnInit {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  private readonly localeId = inject(LOCALE_ID);

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
