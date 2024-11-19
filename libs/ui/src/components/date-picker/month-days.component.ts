import { CommonModule, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-month-days',
  standalone: true,
  imports: [CommonModule, NgClass],
  template: `
    <div class="grid w-64 grid-cols-7">
      @for (day of days(); track $index; let index = $index) {
        <button
          class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
          [ngClass]="{
            'col-start-1': index === 0 && firstDayOfMonthIndex() === 0,
            'col-start-2': index === 0 && firstDayOfMonthIndex() === 1,
            'col-start-3': index === 0 && firstDayOfMonthIndex() === 2,
            'col-start-4': index === 0 && firstDayOfMonthIndex() === 3,
            'col-start-5': index === 0 && firstDayOfMonthIndex() === 4,
            'col-start-6': index === 0 && firstDayOfMonthIndex() === 5,
            'col-start-7': index === 0 && firstDayOfMonthIndex() === 6,
            '!bg-primary-700 dark:!bg-primary-600 !text-white': isSelected(day),
          }"
          [attr.data-sc-date]="day"
          (click)="selectDay($event)"
        >
          {{ day.slice(-2) }}
        </button>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthDaysComponent {
  days = input.required<string[]>();
  selectedDay = signal<string>('');
  firstDayOfMonthIndex = input<number>(0);

  isSelected(day: string) {
    return day === this.selectedDay();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectDay(event: any) {
    const selectedDate = event.target.dataset.scDate;
    this.selectedDay.set(selectedDate);
  }
}
