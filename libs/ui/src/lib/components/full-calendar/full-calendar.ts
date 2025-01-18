import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-full-calendar',
  imports: [NgClass, NgFor, NgIf],
  template: `
    <div class="flex flex-col items-center w-full max-w-md mx-auto mt-8">
      <!-- Calendar Header -->
      <div class="flex justify-between items-center w-full mb-4">
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          (click)="goToPreviousMonth()"
        >
          &lt;
        </button>
        <span class="text-lg font-semibold">
          {{ currentDate.toLocaleString('default', { month: 'long' }) }} {{ currentYear }}
        </span>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded" (click)="goToNextMonth()">
          &gt;
        </button>
      </div>

      <!-- Weekdays -->
      <div class="grid grid-cols-7 gap-2 w-full text-center font-semibold">
        <div class="text-gray-600" *ngFor="let day of weekdays">{{ day }}</div>
      </div>

      <!-- Days -->
      <div class="grid grid-cols-7 gap-2 w-full mt-2">
        <div
          class="flex flex-col items-center justify-start p-2 border rounded h-20"
          *ngFor="let day of daysInMonth; let i = index"
          [ngClass]="{ 'bg-gray-100': day === null }"
        >
          <div *ngIf="day !== null">
            <span class="font-medium">{{ day }}</span>
            <div class="mt-1 w-full">
              <div
                class="text-sm bg-blue-500 text-white rounded px-1 py-0.5"
                *ngFor="let event of getEventsForDate(day)"
              >
                {{ event.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFullCalendar implements OnInit {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  currentDate = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();
  daysInMonth: number[] = [];
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  events: { date: string; title: string }[] = [{ date: '2025-01-18', title: 'Sample Event' }];

  ngOnInit() {
    this.generateCalendar();
  }

  // Generate days for the calendar
  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.daysInMonth = Array(firstDayOfMonth)
      .fill(null)
      .concat(Array.from({ length: totalDays }, (_, i) => i + 1));
  }

  // Go to the previous month
  goToPreviousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  // Go to the next month
  goToNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  // Format the date to YYYY-MM-DD
  formatDate(day: number | null): string {
    if (day === null) return '';
    const month = String(this.currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${this.currentYear}-${month}-${dayStr}`;
  }

  // Get events for a specific date
  getEventsForDate(day: number | null): { date: string; title: string }[] {
    const dateStr = this.formatDate(day);
    return this.events.filter((event) => event.date === dateStr);
  }
}
