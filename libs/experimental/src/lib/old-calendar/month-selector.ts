import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'sc-month-selector',
  imports: [],
  template: `
    <!-- Month selection -->
    <div class="p-2 grid grid-cols-3 gap-1">
      @for (m of months; track m; let i = $index) {
        <button
          class="p-2 text-sm rounded hover:bg-blue-100"
          [class.bg-blue-500]="i === month()"
          [class.text-white]="i === month()"
          (click)="selectMonth(i); $event.stopPropagation()"
        >
          {{ m.substr(0, 3) }}
        </button>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthSelector {
  month = input.required<number>();

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  readonly monthSelected = output<number>();

  selectMonth(monthIndex: number): void {
    this.monthSelected.emit(monthIndex);
  }
}
