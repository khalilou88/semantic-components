import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  LOCALE_ID,
  ViewEncapsulation,
} from '@angular/core';
import { MonthAndYearPipe } from './month-and-year.pipe';

@Component({
  selector: 'sc-month-header',
  standalone: true,
  imports: [CommonModule, MonthAndYearPipe],
  template: `
    <div class="mb-2 flex justify-between">
      @if (showMonthStepper) {
        <button
          class="rounded-lg bg-white p-2.5 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
          aria-label="Previous month"
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
      }

      <button
        class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        type="button"
      >
        {{ month() }}
      </button>

      @if (showMonthStepper) {
        <button
          class="rounded-lg bg-white p-2.5 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
          type="button"
          aria-label="Next month"
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
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthHeaderComponent {
  month = input.required<string>();

  showMonthStepper = true;

  constructor(@Inject(LOCALE_ID) readonly localeId: string) {}
}
