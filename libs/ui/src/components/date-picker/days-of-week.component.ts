import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, FormStyle, getLocaleDayNames, TranslationWidth } from '@angular/common';

@Component({
  selector: 'sc-days-of-week',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-1 grid grid-cols-7">
      @for (narrowDayOfWeek of narrowDaysOfWeek; track $index) {
        <abbr
          class="h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
        >
          {{ narrowDayOfWeek }}
        </abbr>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysOfWeekComponent implements OnInit {
  narrowDaysOfWeek!: readonly string[];

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit() {
    this.narrowDaysOfWeek = getLocaleDayNames(
      this.localeId,
      FormStyle.Format,
      TranslationWidth.Narrow,
    );
  }
}
