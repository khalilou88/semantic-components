import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysOfWeekComponent } from './days-of-week.component';

@Component({
  selector: 'sc-date-picker',
  standalone: true,
  imports: [CommonModule, DaysOfWeekComponent],
  template: `
    <div class="flex justify-center dark:bg-gray-900" id="exampleWrapper">
      <div id="datepicker-inline" inline-datepicker="">
        <div class="block">
          <div class="inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700">
            <div class="">
              <div
                class="bg-white px-2 py-3 text-center font-semibold dark:bg-gray-700 dark:text-white"
              ></div>
              <div class="mb-2 flex justify-between">
                <button
                  class="rounded-lg bg-white p-2.5 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                  type="button"
                >
                  <svg
                    class="size-4 text-gray-800 rtl:rotate-180 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    ></path>
                  </svg>
                </button>
                <button
                  class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  type="button"
                >
                  February 2024
                </button>
                <button
                  class="rounded-lg bg-white p-2.5 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                  type="button"
                >
                  <svg
                    class="size-4 text-gray-800 rtl:rotate-180 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-1">
              <div class="flex">
                <div class="">
                  <sc-days-of-week />

                  <div class="grid w-64 grid-cols-7">
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706396400000"
                    >
                      28
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706482800000"
                    >
                      29
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706569200000"
                    >
                      30
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706655600000"
                    >
                      31
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706742000000"
                    >
                      1
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706828400000"
                    >
                      2
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1706914800000"
                    >
                      3
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707001200000"
                    >
                      4
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707087600000"
                    >
                      5
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707174000000"
                    >
                      6
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707260400000"
                    >
                      7
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707346800000"
                    >
                      8
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707433200000"
                    >
                      9
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707519600000"
                    >
                      10
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707606000000"
                    >
                      11
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707692400000"
                    >
                      12
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707778800000"
                    >
                      13
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707865200000"
                    >
                      14
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1707951600000"
                    >
                      15
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708038000000"
                    >
                      16
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708124400000"
                    >
                      17
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708210800000"
                    >
                      18
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708297200000"
                    >
                      19
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708383600000"
                    >
                      20
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708470000000"
                    >
                      21
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708556400000"
                    >
                      22
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708642800000"
                    >
                      23
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708729200000"
                    >
                      24
                    </span>
                    <span
                      class="!bg-primary-700 dark:!bg-primary-600 focused block flex-1 cursor-pointer rounded-lg border-0 bg-blue-700 text-center text-sm font-semibold leading-9 text-white dark:bg-blue-600"
                      data-date="1708815600000"
                    >
                      25
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708902000000"
                    >
                      26
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1708988400000"
                    >
                      27
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709074800000"
                    >
                      28
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709161200000"
                    >
                      29
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709247600000"
                    >
                      1
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709334000000"
                    >
                      2
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709420400000"
                    >
                      3
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709506800000"
                    >
                      4
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709593200000"
                    >
                      5
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709679600000"
                    >
                      6
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709766000000"
                    >
                      7
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709852400000"
                    >
                      8
                    </span>
                    <span
                      class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      data-date="1709938800000"
                    >
                      9
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="mt-2 flex space-x-2 rtl:space-x-reverse">
                <button
                  class="!bg-primary-700 dark:!bg-primary-600 hover:!bg-primary-800 dark:hover:!bg-primary-700 focus:!ring-primary-300 w-1/2 rounded-lg bg-blue-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                  type="button"
                >
                  Today
                </button>
                <button
                  class="focus:!ring-primary-300 w-1/2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {}
