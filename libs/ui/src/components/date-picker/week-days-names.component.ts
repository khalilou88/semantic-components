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
  selector: 'sc-week-days-names',
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
          {{ weekDayName.short }}
        </abbr>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekDaysNamesComponent implements OnInit {
  weekDaysNames: WeekDayName[] = [];

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit(): void {
    this.setLocaleDayNames();
  }

  //https://github.com/angular/angular/issues/57193
  private setLocaleDayNames() {
    const intlNarrowFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'narrow' });
    const intlShortFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'short' });
    const intlLongFormatter = new Intl.DateTimeFormat(this.localeId, { weekday: 'long' });

    let k = 0;
    const firstDayOfWeek = this.getFirstDayOfWeek();
    if (firstDayOfWeek === 7) {
      // First day of the week is Sunday
      k = 3; // 3th January 2021 is a Sunday
    }
    if (firstDayOfWeek === 1) {
      // First day of the week is Monday
      k = 4; // 4th January 2021 is a Monday
    }

    for (let i = 0; i < 7; i += 1) {
      const date = new Date(Date.UTC(2021, 0, i + k));
      this.weekDaysNames.push({
        narrow: intlNarrowFormatter.format(date),
        short: intlShortFormatter.format(date),
        long: intlLongFormatter.format(date),
      });
    }
  }

  private getFirstDayOfWeek(): number {
    const locale = new Intl.Locale(this.localeId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (locale as any).getWeekInfo().firstDay;
  }
}
