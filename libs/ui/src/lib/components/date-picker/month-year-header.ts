import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
  signal,
} from '@angular/core';

import { SvgChevronLeftIcon, SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

@Component({
  selector: 'sc-month-year-header',
  imports: [SvgChevronRightIcon, SvgChevronLeftIcon, ScButton],
  template: `
    <button
      [attr.aria-label]="'Previous month'"
      (click)="monthYearChange.emit(-1)"
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
      [attr.aria-label]="'Next month'"
      (click)="monthYearChange.emit(1)"
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
  classes = signal<string>('flex justify-between');

  monthYear = input.required<string>();

  monthYearChange = output<number>();
}
