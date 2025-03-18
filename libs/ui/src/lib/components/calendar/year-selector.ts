import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButton } from '../button';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'sc-year-selector',
  imports: [ScButton],
  template: `
    @for (year of years(); track $index) {
      <button
        [variant]="getVariant(year)"
        (click)="selectYear(year); $event.stopPropagation()"
        sc-button
      >
        {{ year }}
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
export class ScYearSelector {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('grid grid-cols-4 gap-1 w-full', this.classInput()));

  readonly currentYear = input.required<number>();

  readonly previewYear = input.required<number>();

  private readonly firstYear = computed(() => this.calendarService.firstYear());

  private readonly lastYear = computed(() => this.calendarService.lastYear());

  protected readonly years = computed(() => {
    const years: number[] = [];

    for (let year = this.firstYear(); year <= this.lastYear(); year++) {
      years.push(year);
    }

    return years;
  });

  readonly yearSelected = output<number>();

  protected selectYear(year: number): void {
    this.yearSelected.emit(year);
  }

  private readonly calendarService = inject(CalendarService);

  constructor() {
    effect(() => {
      this.calendarService.firstYear.set(this.previewYear() - 9);

      this.calendarService.lastYear.set(this.previewYear() + 10);
    });
  }

  protected getVariant(y: number) {
    if (y === this.currentYear()) {
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
