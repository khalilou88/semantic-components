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
import { SiChevronLeftIcon, SiChevronRightIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { getMonthName } from './utils';

@Component({
  selector: 'sc-calendar-header',
  imports: [SiChevronRightIcon, SiChevronLeftIcon, ScButton],
  template: `
    <button
      [disabled]="disabled()"
      (click)="monthYearChange.emit(-1)"
      aria-label="Previous month"
      sc-button
      variant="outline"
      type="button"
      size="icon"
    >
      <svg si-chevron-left-icon></svg>
    </button>

    <button (click)="viewToggled.emit()" sc-button variant="ghost" type="button">
      {{ monthName() }} {{ currentMonth().year }}
    </button>

    <button
      [disabled]="disabled()"
      (click)="monthYearChange.emit(1)"
      aria-label="Next month"
      sc-button
      variant="outline"
      type="button"
      size="icon"
      type="button"
    >
      <svg si-chevron-right-icon></svg>
    </button>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCalendarHeader {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('flex justify-between', this.classInput()));

  readonly currentMonth = input.required<Temporal.PlainYearMonth>();
  readonly disabled = input.required<boolean>();

  readonly monthYearChange = output<number>();
  readonly viewToggled = output<void>();

  private readonly localeId = inject(LOCALE_ID);

  protected readonly monthName = computed(() => getMonthName(this.localeId, this.currentMonth()));
}
