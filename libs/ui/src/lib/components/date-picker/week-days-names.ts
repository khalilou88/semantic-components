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
          class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
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
