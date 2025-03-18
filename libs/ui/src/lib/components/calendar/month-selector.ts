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

import { ScButton } from '../button';
import { getLocalizedMonthNames } from './utils';

@Component({
  selector: 'sc-month-selector',
  imports: [ScButton],
  template: `
    @for (m of months; track m; let i = $index) {
      <button
        [variant]="getVariant(i)"
        (click)="selectMonth(i); $event.stopPropagation()"
        sc-button
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

  protected getVariant(i: number) {
    if (i === this.currentMonth().month - 1) {
      return 'primary';
    }

    // if (this.isFocused(day.date)) {
    //   return 'secondary';
    // }

    // if (isToday(day.date)) {
    //   return 'outline';
    // }

    return 'ghost';
  }
}
