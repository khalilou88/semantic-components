import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { Temporal } from '@js-temporal/polyfill';
import { ScDateRangePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-date-range-picker-page',
  imports: [ScDateRangePicker, CommonModule],
  template: `
    <div class="container mx-auto max-w-4xl px-4 py-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Date Range Picker with Calendar</h1>

      <div class="mb-8">
        <sc-date-range-picker
          [startDate]="defaultStartDate"
          [endDate]="defaultEndDate"
          [minDate]="minAllowedDate"
          [maxDate]="maxAllowedDate"
          (dateRangeSelected)="onDateRangeSelected($event)"
        ></sc-date-range-picker>
      </div>

      <div class="bg-gray-50 p-4 rounded-md border-l-4 border-blue-500" *ngIf="selectedRange">
        <h3 class="text-lg font-medium text-gray-800 mb-2">Selected Date Range:</h3>
        <p class="text-gray-700">Start Date: {{ formatDate(selectedRange.startDate) }}</p>
        <p class="text-gray-700">End Date: {{ formatDate(selectedRange.endDate) }}</p>
        <p class="text-gray-700">
          Duration: {{ calculateDuration(selectedRange.startDate, selectedRange.endDate) }} days
        </p>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DateRangePickerPage {
  defaultStartDate: Temporal.PlainDate;
  defaultEndDate: Temporal.PlainDate;
  minAllowedDate: Temporal.PlainDate;
  maxAllowedDate: Temporal.PlainDate;

  selectedRange: { startDate: Temporal.PlainDate; endDate: Temporal.PlainDate } | null = null;

  constructor() {
    // Current date
    this.defaultEndDate = Temporal.Now.plainDateISO();

    // Set default start date to 30 days ago
    this.defaultStartDate = this.defaultEndDate.subtract({ days: 30 });

    // Set min/max date constraints
    this.minAllowedDate = Temporal.PlainDate.from({ year: 2020, month: 1, day: 1 });
    this.maxAllowedDate = Temporal.PlainDate.from({ year: 2030, month: 12, day: 31 });
  }

  onDateRangeSelected(range: { startDate: Temporal.PlainDate; endDate: Temporal.PlainDate }): void {
    this.selectedRange = range;
    console.log('Selected range:', {
      startDate: range.startDate.toString(),
      endDate: range.endDate.toString(),
    });

    // Here you could make API calls with the selected date range
    // this.dataService.fetchData(range.startDate.toString(), range.endDate.toString());
  }

  formatDate(date: Temporal.PlainDate): string {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  calculateDuration(start: Temporal.PlainDate, end: Temporal.PlainDate): number {
    // Calculate the duration in days using Temporal
    return start.until(end, { largestUnit: 'days' }).days + 1; // Include end date
  }
}
