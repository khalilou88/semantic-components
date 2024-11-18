import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

interface WeekDayName {
  narrow: string;
  short: string;
  long: string;
}

@Component({
  selector: 'sc-days-of-week',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-1 grid grid-cols-7">
      @for (weekDayName of weekDaysNames; track weekDayName.long) {
        <abbr
          class="h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
          [title]="weekDayName.long"
          [attr.aria-label]="weekDayName.long"
        >
          {{ weekDayName.narrow }}
        </abbr>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysOfWeekComponent implements OnInit {
  weekDaysNames: WeekDayName[] = [];

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit(): void {
    this.setLocaleDayNames();
  }

  private setLocaleDayNames() {
    const intlNarrowFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'narrow' });
    const intlShortFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'short' });
    const intlLongFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'long' });
    for (let i = 0; i < 7; i += 1) {
      const date = new Date(Date.UTC(2021, 0, i + 3)); // 3th January 2021 is a Sunday
      this.weekDaysNames.push({
        narrow: intlNarrowFormatter.format(date),
        short: intlShortFormatter.format(date),
        long: intlLongFormatter.format(date),
      });
    }
  }
}
