import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { MonthDaysComponent } from './month-days.component';
import { MonthHeaderComponent } from './month-header.component';
import { WeekDaysNamesComponent } from './week-days-names.component';

@Component({
  selector: 'sc-date-picker',
  standalone: true,
  imports: [CommonModule, WeekDaysNamesComponent, MonthHeaderComponent, MonthDaysComponent],
  template: `
    <div class="flex justify-center dark:bg-gray-900" id="exampleWrapper">
      <div id="datepicker-inline" inline-datepicker="">
        <div class="block">
          <div class="inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700">
            <div class="">
              <div
                class="bg-white px-2 py-3 text-center font-semibold dark:bg-gray-700 dark:text-white"
              >
                <sc-month-header [month]="month()" />
              </div>
              <div class="p-1">
                <div class="flex">
                  <div class="">
                    <sc-week-days-names />

                    <sc-month-days
                      [days]="monthDays()"
                      [firstDayOfMonthIndex]="firstDayOfMonthIndex()"
                    />
                  </div>
                </div>
              </div>
              <div class="">
                <div class="mt-2 flex space-x-2 rtl:space-x-reverse">
                  <button
                    class="bg-primary-700 dark:bg-primary-600 hover:bg-primary-800 dark:hover:bg-primary-700 focus:ring-primary-300 w-1/2 rounded-lg px-5 py-2 text-center text-sm font-medium text-white focus:ring-4"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnInit {
  month = signal<string>('');
  monthDays = signal<string[]>([]);
  firstDayOfMonthIndex = signal<number>(0);

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit() {
    this.init();
  }

  init() {
    const today = new Date();

    const options = {
      month: 'long',
      year: 'numeric',
    } as any;

    const a = new Intl.DateTimeFormat(this.localeId, options).format(today);
    console.log();
    this.month.set(a);

    const year = today.getFullYear();
    const month = today.getMonth();

    // Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
    // but by using 0 as the day it will give us the last day of the prior
    // month. So passing in 1 as the month number will return the last day
    // of January, not February
    const numOfDays = new Date(year, month - 1, 0).getDate();

    const days = [];

    for (let i = 1; i <= numOfDays; i++) {
      const date = new Date(year, month, i);

      if (i === 1) {
        //TODO check french calender
        this.firstDayOfMonthIndex.set(date.getDay());
      }

      days.push(
        `${date.getFullYear()}-${this.twoDigits(date.getMonth() + 1)}-${this.twoDigits(date.getDate())}`,
      );
    }

    console.log(days);

    this.monthDays.set(days);
  }

  twoDigits(n: number) {
    return n.toLocaleString(this.localeId, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }
}
