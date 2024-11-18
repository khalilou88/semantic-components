import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { addMonths, startOfMonth } from '../date-utils';
import { MonthAndYearPipe } from './month-and-year.pipe';

@Component({
  selector: 'sc-month-header',
  standalone: true,
  imports: [CommonModule, MonthAndYearPipe],
  template: `
    <button
      class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      type="button"
    >
      {{ month | monthAndYear: locale : monthAndYearFormat }}
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthHeaderComponent {
  @Input() month = startOfMonth(new Date());
  @Input() activeMonth?: Date = startOfMonth(new Date());
  @Input() showMonthStepper = true;
  @Input() monthAndYearFormat?: string;
  @Input() locale?: string;

  @Output() activeMonthChange = new EventEmitter<Date>();

  stepMonth<Delta extends number>(delta: Delta) {
    const activeMonth = addMonths(this.activeMonth || new Date(), delta);
    this.activeMonthChange.emit(activeMonth);
  }
  // TODO: get the next month label from CLDR
}
