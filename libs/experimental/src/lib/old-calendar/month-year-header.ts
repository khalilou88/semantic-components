import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiChevronLeftIcon, SiChevronRightIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

@Component({
  selector: 'sc-month-year-header',
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
      {{ monthYear() }}
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
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMonthYearHeader {
  class = input<string>('');

  classes = computed(() => cn('flex justify-between', this.class()));

  monthYear = input.required<string>();

  monthYearChange = output<number>();

  readonly viewToggled = output<void>();

  readonly disabled = input.required<boolean>();
}
