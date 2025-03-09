import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-month-selector',
  imports: [CommonModule],
  template: `
    <!-- Month selection -->
    <div class="p-2 grid grid-cols-3 gap-1">
      <button
        class="p-2 text-sm rounded hover:bg-blue-100"
        *ngFor="let month of months; let i = index"
        [class.bg-blue-500]="i === selectedMonth"
        [class.text-white]="i === selectedMonth"
        (click)="selectMonth(i); $event.stopPropagation()"
      >
        {{ month.substr(0, 3) }}
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthSelector {
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

  selectedMonth: number = new Date().getMonth();

  selectMonth(monthIndex: number): void {
    this.selectedMonth = monthIndex;
    console.log(monthIndex);
  }
}
