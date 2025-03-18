import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  ViewEncapsulation,
  computed,
  inject,
  input,
  output,
} from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { cn } from '@semantic-components/utils';

import { getLocalizedMonthNames } from './utils';

@Component({
  selector: 'sc-month-selector',
  imports: [],
  template: `
    @for (m of months; track m; let i = $index) {
      <button
        class="p-2 text-sm rounded hover:bg-blue-100"
        [class.bg-blue-500]="i === currentMonth().month - 1"
        [class.text-white]="i === currentMonth().month - 1"
        (click)="selectMonth(i); $event.stopPropagation()"
      >
        {{ m }}
      </button>
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMonthSelector {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('grid grid-cols-3 gap-1 w-full', this.classInput()));

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
