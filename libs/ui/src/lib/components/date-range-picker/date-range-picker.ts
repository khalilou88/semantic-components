import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';

@Component({
  selector: 'sc-date-range-picker',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full max-w-2xl">
      <form [formGroup]="dateForm">
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1" for="startDate">
              Start Date
            </label>
            <input
              class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="startDate"
              [ngClass]="{ 'border-red-500 bg-red-50': validationErrors.start }"
              type="date"
              formControlName="startDate"
            />
            <div class="mt-1 text-sm text-red-600" *ngIf="validationErrors.start">
              {{ validationErrors.start }}
            </div>
          </div>

          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1" for="endDate">
              End Date
            </label>
            <input
              class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="endDate"
              [ngClass]="{ 'border-red-500 bg-red-50': validationErrors.end }"
              type="date"
              formControlName="endDate"
            />
            <div class="mt-1 text-sm text-red-600" *ngIf="validationErrors.end">
              {{ validationErrors.end }}
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <button
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors border border-gray-300"
            (click)="setLastWeek()"
            type="button"
          >
            Last 7 days
          </button>
          <button
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors border border-gray-300"
            (click)="setLastMonth()"
            type="button"
          >
            Last month
          </button>
          <button
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors border border-gray-300"
            (click)="setLastThreeMonths()"
            type="button"
          >
            Last 3 months
          </button>
        </div>

        <div class="flex justify-end">
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            [disabled]="f()"
            [ngClass]="{
              'opacity-50 cursor-not-allowed': f(),
            }"
            (click)="applyDateRange()"
            type="button"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDateRangePicker implements OnInit {
  @Input() startDate: Temporal.PlainDate = Temporal.Now.plainDateISO();
  @Input() endDate: Temporal.PlainDate = Temporal.Now.plainDateISO();
  @Input() minDate: Temporal.PlainDate | null = null;
  @Input() maxDate: Temporal.PlainDate | null = null;
  @Output() dateRangeSelected = new EventEmitter<{
    startDate: Temporal.PlainDate;
    endDate: Temporal.PlainDate;
  }>();

  dateForm: FormGroup;
  validationErrors: { start?: string; end?: string } = {};

  constructor(private readonly fb: FormBuilder) {
    this.dateForm = this.fb.group({
      startDate: [''],
      endDate: [''],
    });
  }

  ngOnInit(): void {
    this.dateForm.patchValue({
      startDate: this.formatDateForInput(this.startDate),
      endDate: this.formatDateForInput(this.endDate),
    });

    this.dateForm.valueChanges.subscribe(() => {
      this.validateDates();
    });
  }

  validateDates(): void {
    this.validationErrors = {};
    const startDateValue = this.parseDate(this.dateForm.get('startDate')?.value);
    const endDateValue = this.parseDate(this.dateForm.get('endDate')?.value);

    if (!startDateValue) {
      this.validationErrors.start = 'Please enter a valid start date';
      return;
    }

    if (!endDateValue) {
      this.validationErrors.end = 'Please enter a valid end date';
      return;
    }

    if (this.minDate && Temporal.PlainDate.compare(startDateValue, this.minDate) < 0) {
      this.validationErrors.start = `Date cannot be before ${this.formatDateForInput(this.minDate)}`;
      return;
    }

    if (this.maxDate && Temporal.PlainDate.compare(endDateValue, this.maxDate) > 0) {
      this.validationErrors.end = `Date cannot be after ${this.formatDateForInput(this.maxDate)}`;
      return;
    }

    if (Temporal.PlainDate.compare(startDateValue, endDateValue) > 0) {
      this.validationErrors.end = 'End date must be after start date';
      return;
    }
  }

  applyDateRange(): void {
    if (Object.keys(this.validationErrors).length > 0) {
      return;
    }

    const startDateValue = this.parseDate(this.dateForm.get('startDate')?.value);
    const endDateValue = this.parseDate(this.dateForm.get('endDate')?.value);

    if (startDateValue && endDateValue) {
      this.dateRangeSelected.emit({
        startDate: startDateValue,
        endDate: endDateValue,
      });
    }
  }

  parseDate(dateString: string): Temporal.PlainDate | null {
    if (!dateString) return null;

    try {
      return Temporal.PlainDate.from(dateString);
    } catch (error) {
      return null;
    }
  }

  formatDateForInput(date: Temporal.PlainDate): string {
    if (!date) return '';

    return date.toString();
  }

  // Utility methods for predefined ranges
  setLastWeek(): void {
    const end = Temporal.Now.plainDateISO();
    const start = end.subtract({ days: 7 });

    this.dateForm.patchValue({
      startDate: this.formatDateForInput(start),
      endDate: this.formatDateForInput(end),
    });
    this.validateDates();
  }

  setLastMonth(): void {
    const end = Temporal.Now.plainDateISO();
    const start = end.subtract({ months: 1 });

    this.dateForm.patchValue({
      startDate: this.formatDateForInput(start),
      endDate: this.formatDateForInput(end),
    });
    this.validateDates();
  }

  setLastThreeMonths(): void {
    const end = Temporal.Now.plainDateISO();
    const start = end.subtract({ months: 3 });

    this.dateForm.patchValue({
      startDate: this.formatDateForInput(start),
      endDate: this.formatDateForInput(end),
    });
    this.validateDates();
  }

  f() {
    return Object.keys(this.validationErrors).length > 0;
  }
}
