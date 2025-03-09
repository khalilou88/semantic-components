import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-year-selector',
  imports: [CommonModule],
  template: `
    <!-- Year selection -->
    <div class="p-2 grid grid-cols-4 gap-1">
      <button
        class="p-2 text-sm rounded hover:bg-blue-100"
        *ngFor="let year of years"
        [class.bg-blue-500]="year === selectedYear"
        [class.text-white]="year === selectedYear"
        (click)="selectYear(year); $event.stopPropagation()"
      >
        {{ year }}
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearSelector implements OnInit {
  years: number[] = [];

  selectedYear: number = new Date().getFullYear();

  ngOnInit(): void {
    // Generate years (current year - 9 to current year + 10)
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 9; year <= currentYear + 10; year++) {
      this.years.push(year);
    }
  }

  selectYear(year: number): void {
    this.selectedYear = year;
    console.log(year);
  }
}
