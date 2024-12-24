import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgChevronLeftIcon, SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

@Component({
  selector: 'sc-month-year-header',
  imports: [SvgChevronRightIcon, SvgChevronLeftIcon, ScButton],
  template: `
    <button
      (click)="monthYearChange.emit(-1)"
      aria-label="Previous month"
      sc-button
      variant="outline"
      type="button"
      size="icon"
    >
      <svg-chevron-left-icon />
    </button>

    <button sc-button variant="ghost" type="button">
      {{ monthYear() }}
    </button>

    <button
      (click)="monthYearChange.emit(1)"
      aria-label="Next month"
      sc-button
      variant="outline"
      type="button"
      size="icon"
      type="button"
    >
      <svg-chevron-right-icon />
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
}
