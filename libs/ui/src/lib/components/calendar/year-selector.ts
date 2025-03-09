import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-year-selector',
  imports: [CommonModule],
  template: `
    <!-- Year selection -->
    <div class="p-2 grid grid-cols-4 gap-1 max-h-48 overflow-y-auto">
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
  @Output() dateChange = new EventEmitter<Date>();

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

  years: number[] = [];
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();

  isOpen = false;
  showMonths = false;
  showYears = false;

  currentDate: Date = new Date();
  displayValue = '';

  ngOnInit(): void {
    // Generate years (current year - 10 to current year + 10)
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      this.years.push(year);
    }

    this.updateDisplayValue();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.showMonths = true;
      this.showYears = false;
    }
  }

  toggleYearView(): void {
    this.showMonths = false;
    this.showYears = true;
  }

  toggleMonthView(): void {
    this.showMonths = true;
    this.showYears = false;
  }

  selectMonth(monthIndex: number): void {
    this.selectedMonth = monthIndex;
    this.updateDateAndClose();
  }

  selectYear(year: number): void {
    this.selectedYear = year;
    this.toggleMonthView();
  }

  updateDateAndClose(): void {
    const newDate = new Date(this.selectedYear, this.selectedMonth, 1);
    this.currentDate = newDate;
    this.updateDisplayValue();
    this.dateChange.emit(newDate);
    this.isOpen = false;
  }

  updateDisplayValue(): void {
    this.displayValue = `${this.months[this.selectedMonth]} ${this.selectedYear}`;
  }

  nextMonth(): void {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.updateDateAndClose();
  }

  previousMonth(): void {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.updateDateAndClose();
  }
}
