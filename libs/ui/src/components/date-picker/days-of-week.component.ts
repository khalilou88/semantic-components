import { CommonModule, FormStyle, getLocaleDayNames, TranslationWidth } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-days-of-week',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-1 grid grid-cols-7">
      @for (dayOfWeek of daysOfWeek; track $index; let index = $index) {
        <abbr
          class="h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
          [title]="dayOfWeek"
          [attr.aria-label]="dayOfWeek"
        >
          {{ narrowDaysOfWeek[index] }}
        </abbr>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysOfWeekComponent implements OnInit {
  daysOfWeek!: readonly string[];
  narrowDaysOfWeek!: readonly string[];

  private _locale?: string;

  @Input()
  get locale() {
    return this._locale;
  }

  set locale(locale: string | undefined) {
    this._locale = locale || this.localeId;
    this.daysOfWeek = this.getDaysOfWeek();
    this.narrowDaysOfWeek = this.getNarrowDaysOfWeek();
  }

  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit(): void {
    if (!this.locale) {
      this.locale = this.localeId;
    }
  }

  private getDaysOfWeek() {
    return getLocaleDayNames(this.locale!, FormStyle.Format, TranslationWidth.Wide);
  }

  private getNarrowDaysOfWeek() {
    return getLocaleDayNames(this.locale!, FormStyle.Format, TranslationWidth.Narrow);
  }
}
