import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';

export interface WeekDayName {
  narrow: string;
  short: string;
  long: string;
}

@Component({
  selector: 'sc-week-days-names',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-1 grid grid-cols-7">
      @for (weekDayName of weekDaysNames(); track weekDayName.long) {
        <abbr
          class="h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
          [title]="weekDayName.long"
          [attr.aria-label]="weekDayName.long"
        >
          {{ weekDayName.short }}
        </abbr>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekDaysNamesComponent {
  weekDaysNames = input.required<WeekDayName[]>();
}
