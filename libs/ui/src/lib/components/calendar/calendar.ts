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

import { cn } from '@semantic-components/utils';

import { ScCard, ScCardContent, ScCardHeader } from '../card';
import { ScDaySelector } from './day-selector';
import { MonthSelector } from './month-selector';
import { ScMonthYearHeader } from './month-year-header';
import { WeekDayName } from './util';
import { YearSelector } from './year-selector';

@Component({
  selector: 'sc-calendar',
  imports: [
    ScMonthYearHeader,
    ScCard,
    ScCardHeader,
    // ScButton,
    // ScCardFooter,
    ScCardContent,
    MonthSelector,
    YearSelector,
    ScDaySelector,
  ],
  template: `
    <div sc-card>
      <div sc-card-header>
        <sc-month-year-header
          [monthYear]="monthYear()"
          [disabled]="view() === 'months'"
          (monthYearChange)="setMonthYear($event)"
          (viewToggled)="toggleView()"
        />
      </div>

      <div sc-card-content>
        @switch (view()) {
          @case ('years') {
            <sc-year-selector
              [year]="year()"
              [year2]="year2()"
              (yearSelected)="selectYear($event)"
            />
          }
          @case ('months') {
            <sc-month-selector [month]="month()" (monthSelected)="selectMonth($event)" />
          }
          @default {
            <sc-day-selector
              [weekDaysNames]="weekDaysNames()"
              [days]="monthDays()"
              [firstDayMonth]="firstDayMonth()"
              [selectedDay]="value()"
              [focusedDate]="focusedDate()"
              (selectedDayChange)="setValue($event)"
            />
          }
        }
      </div>

      <!--div class="justify-between" sc-card-footer>
        <button sc-button variant="outline" type="button">Cancel</button>
        <button sc-button type="button">Done</button>
      </div-->
    </div>
  `,
  host: {
    '[class]': 'class()',
    '(keydown)': 'handleKeydown($event)',
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
  protected readonly view = signal<'days' | 'years' | 'months'>('days');

  protected toggleView(): void {
    if (this.view() === 'days') {
      this.view.set('years');
    } else if (this.view() === 'years') {
      this.view.set('months');
    } else {
      this.view.set('days');
    }
  }

  protected selectYear(year: number) {
    this.year.set(year);
    this.setValue('');
    this.toggleView();
  }

  protected selectMonth(monthIndex: number) {
    this.month.set(monthIndex);
    this.setValue('');
    this.toggleView();
  }

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  private readonly localeId = inject(LOCALE_ID);

  readonly date = computed(() => {
    if (this.value()) {
      return new Date(this.value());
    }
    return new Date();
  });

  readonly year = linkedSignal(() => this.date().getFullYear());
  readonly year2 = linkedSignal(() => this.year());

  readonly month = linkedSignal(() => this.date().getMonth());

  readonly weekDaysNames = signal<WeekDayName[]>([]);

  readonly monthYear = computed(() => {
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

  readonly monthDays = computed(() => {
    // Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
    // but by using 0 as the day it will give us the last day of the prior
    // month. So passing in 1 as the month number will return the last day
    // of January, not February
    const numOfDays = new Date(this.year(), this.month() + 1, 0).getDate();

    const days = [];

    for (let i = 1; i <= numOfDays; i++) {
      const date = new Date(this.year(), this.month(), i);

      days.push(this.getDateString(date));
    }

    return days;
  });

  readonly firstDayMonth = computed(() => {
    const date = new Date(this.year(), this.month(), 1);
    const intlLongFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'long' });

    const dayName = intlLongFormatter.format(date);
    return this.weekDaysNames()
      .map((e) => e.long)
      .indexOf(dayName);
  });

  readonly value = model<string>('');

  readonly focusedDate = signal('');

  protected setValue(day: string) {
    this.value.set(day);

    this.onChange(day);
    this.changeDetectorRef.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private readonly disabledByCva = signal(false);
  setDisabledState?(isDisabled: boolean): void {
    this.disabledByCva.set(isDisabled);
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
    if (this.view() === 'years') {
      if (n === 1) {
        this.year2.update((value) => value + 20);
      }

      if (n === -1) {
        this.year2.update((value) => value - 20);
      }
    }

    if (this.view() === 'days') {
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
  }

  twoDigits(n: number) {
    return n.toLocaleString(this.localeId, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  handleKeydown(event: KeyboardEvent) {
    const key = event.key;
    let newDate;
    if (key === 'ArrowLeft') {
      newDate = this.addDays(-1);
    } else if (key === 'ArrowRight') {
      newDate = this.addDays(+1);
    } else if (key === 'ArrowUp') {
      newDate = this.addDays(-7);
    } else if (key === 'ArrowDown') {
      newDate = this.addDays(+7);
    } else if (key === 'Enter') {
      if (event.target) {
        newDate = (event.target as HTMLElement).dataset['scDay'];
      }

      if (newDate) {
        this.setValue(newDate);
      }

      return;
    }
    if (newDate) {
      //TODO we need to define active date and selected date
      this.setValue(newDate);
      this.focusedDate.set(newDate);
    }
  }

  getDateString(date: Date) {
    return `${date.getFullYear()}-${this.twoDigits(date.getMonth() + 1)}-${this.twoDigits(date.getDate())}`;
  }

  addDays(days: number) {
    const date = new Date(this.value());
    date.setDate(date.getDate() + days);

    return this.getDateString(date);
  }
}
