import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

export interface WeekDayName {
  narrow: string;
  short: string;
  long: string;
}

@Component({
  selector: 'sc-week-days-names',
  imports: [],
  template: `
    <div class="grid grid-cols-7">
      @for (weekDayName of weekDaysNames(); track weekDayName.long) {
        <abbr
          class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
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
export class ScWeekDaysNames {
  weekDaysNames = input.required<WeekDayName[]>();
}
