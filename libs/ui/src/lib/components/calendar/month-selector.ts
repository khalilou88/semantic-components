import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  ViewEncapsulation,
  inject,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';

import { getLocalizedMonthNames } from './utils';

@Component({
  selector: 'sc-month-selector',
  imports: [],
  template: `
    <div class="grid grid-cols-3 gap-1 w-full">
      @for (m of months; track m; let i = $index) {
        <button
          class="p-2 text-sm rounded hover:bg-blue-100"
          [class.bg-blue-500]="i === currentMonth().month - 1"
          [class.text-white]="i === currentMonth().month - 1"
          (click)="selectMonth(i); $event.stopPropagation()"
        >
          {{ m.substr(0, 3) }}
        </button>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMonthSelector {
  readonly currentMonth = input.required<Temporal.PlainYearMonth>();

  protected months: string[] = [];

  private readonly localeId = inject(LOCALE_ID);

  constructor() {
    this.months = getLocalizedMonthNames(this.localeId);
  }

  readonly monthSelected = output<Temporal.PlainYearMonth>();

  protected selectMonth(monthIndex: number): void {
    this.monthSelected.emit(
      Temporal.PlainYearMonth.from({ year: this.currentMonth().year, month: monthIndex + 1 }),
    );
  }
}
