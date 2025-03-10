import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Temporal } from '@js-temporal/polyfill';
import { ScAccessibleDatepicker } from '@semantic-components/ui';

@Component({
  selector: 'app-installation-page',
  imports: [CommonModule, ScAccessibleDatepicker, ReactiveFormsModule],
  template: `
    <div class="max-w-3xl mx-auto p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-1">Accessible Date Picker</h1>
      <p class="text-gray-600 mb-6">Angular + Temporal API + Tailwind CSS</p>

      <form class="space-y-4" [formGroup]="form" (ngSubmit)="onSubmit()">
        <sc-accessible-datepicker
          id="event-date"
          [required]="true"
          (dateChange)="onDateChange($event)"
          formControlName="eventDate"
          label="Event Date"
          placeholder="MM/DD/YYYY"
          ariaLabel="Event date input"
          ariaDescribedBy="event-date-hint"
        ></sc-accessible-datepicker>

        <div class="text-sm text-gray-600" id="event-date-hint">
          Please select the date of your event in MM/DD/YYYY format
        </div>

        <div
          class="text-red-500 text-sm"
          *ngIf="form.get('eventDate')?.touched && form.get('eventDate')?.errors?.['required']"
          role="alert"
        >
          Event date is required
        </div>

        <div
          class="bg-gray-50 p-4 border-l-4 border-blue-500 rounded-md"
          *ngIf="selectedDateInfo"
          aria-live="polite"
        >
          <h3 class="text-lg font-medium text-gray-800 mb-2">Selected Date Information</h3>
          <pre class="whitespace-pre-wrap text-sm text-gray-700">{{ selectedDateInfo }}</pre>
        </div>

        <button
          class="px-4 py-2 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          [disabled]="form.invalid"
          [class.bg-blue-600]="!form.invalid"
          [class.hover:bg-blue-700]="!form.invalid"
          [class.bg-gray-400]="form.invalid"
          [class.cursor-not-allowed]="form.invalid"
          type="submit"
          aria-label="Submit form"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InstallationPage implements OnInit {
  form: FormGroup;
  selectedDateInfo = '';

  // Example of min/max dates
  minDate = Temporal.Now.plainDateISO().subtract({ years: 1 });
  maxDate = Temporal.Now.plainDateISO().add({ years: 2 });

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      eventDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // Set default date if needed
    const defaultDate = Temporal.Now.plainDateISO();
    this.form.get('eventDate')!.setValue(defaultDate);
  }

  onDateChange(date: Temporal.PlainDate): void {
    if (date) {
      // Example of using Temporal API features
      const today = Temporal.Now.plainDateISO();
      const difference = date.until(today);

      // Month: ${this.months[date.month - 1]}

      this.selectedDateInfo = `Date: ${date.toString()}
Day of week: ${date.dayOfWeek} (${this.getDayName(date.dayOfWeek)})
Days from today: ${Math.abs(today.until(date).days)}

Quarter: Q${Math.ceil(date.month / 3)}
Days in month: ${date.daysInMonth}
Is leap year: ${date.inLeapYear ? 'Yes' : 'No'}`;
    } else {
      this.selectedDateInfo = '';
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted with date:', this.form.value.eventDate.toString());
      // Handle form submission
      alert(`Date submitted: ${this.form.value.eventDate.toString()}`);
    }
  }

  private getDayName(dayOfWeek: number): string {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[dayOfWeek - 1];
  }
}
