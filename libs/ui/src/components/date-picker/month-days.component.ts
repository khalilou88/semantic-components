import { CommonModule, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'sc-month-days',
  imports: [NgClass],
  template: `
    <div class="grid w-64 grid-cols-7">
      @for (day of days(); track $index; let index = $index) {
        <button
          class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
          [ngClass]="{
            'col-start-1': index === 0 && firstDayMonth() === 0,
            'col-start-2': index === 0 && firstDayMonth() === 1,
            'col-start-3': index === 0 && firstDayMonth() === 2,
            'col-start-4': index === 0 && firstDayMonth() === 3,
            'col-start-5': index === 0 && firstDayMonth() === 4,
            'col-start-6': index === 0 && firstDayMonth() === 5,
            'col-start-7': index === 0 && firstDayMonth() === 6,
            '!bg-primary-700 dark:!bg-primary-600 !text-white': isSelected(day),
          }"
          [attr.data-sc-day]="day"
          (click)="setSelectedDay($event)"
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
  firstDayMonth = input.required<number>();
  selectedDay = input<string>('');

  selectedDayChange = output<string>();

  isSelected(day: string) {
    return day === this.selectedDay();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedDay(event: any) {
    const selectedDay = event.target.dataset.scDay;
    this.selectedDayChange.emit(selectedDay);
  }
}
