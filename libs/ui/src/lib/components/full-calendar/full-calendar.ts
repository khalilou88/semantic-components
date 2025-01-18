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
    <div class="flex flex-col items-center w-full h-full max-w-full mx-auto px-4">
      <!-- Calendar Controls -->
      <div class="flex justify-around gap-2 w-full mb-4">
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded w-full sm:w-auto"
          (click)="setView('month')"
        >
          Month
        </button>
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded w-full sm:w-auto"
          (click)="setView('week')"
        >
          Week
        </button>
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded w-full sm:w-auto"
          (click)="setView('day')"
        >
          Day
        </button>
      </div>

      <!-- Calendar Header -->
      <div class="flex justify-between items-center w-full mb-4">
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          (click)="goToPreviousMonth()"
        >
          &lt;
        </button>
        <span class="text-lg font-semibold text-center flex-grow text-center">
          {{ currentDate.toLocaleString('default', { month: 'long' }) }} {{ currentYear }}
        </span>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded" (click)="goToNextMonth()">
          &gt;
        </button>
      </div>

      <!-- Weekdays -->
      <div class="grid grid-cols-7 gap-2 w-full text-center font-semibold text-sm sm:text-base">
        <div class="text-gray-600" *ngFor="let day of weekdays">{{ day }}</div>
      </div>

      <!-- Days -->
      <div
        class="grid w-full gap-2 flex-grow"
        [ngClass]="{
          'grid-cols-7': currentView === 'month',
          'grid-cols-1 sm:grid-cols-7': currentView === 'week',
          'grid-cols-1': currentView === 'day',
        }"
      >
        <div
          class="flex flex-col items-center justify-start p-2 border rounded"
          *ngFor="let day of daysInMonth"
          [ngClass]="{
            'h-20 sm:h-32': currentView === 'month',
            'h-full': currentView === 'week',
            'h-full': currentView === 'day',
          }"
          (click)="day !== null && addEvent(formatDate(day))"
        >
          <span class="font-medium" *ngIf="day !== null">{{ day }}</span>
          <div class="mt-1 w-full" *ngIf="day !== null">
            <div
              class="text-xs sm:text-sm bg-blue-500 text-white rounded px-1 py-0.5 truncate"
              *ngFor="let event of getEventsForDate(day)"
            >
              {{ event.title }}
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
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  currentView: 'month' | 'week' | 'day' = 'month';
  daysInMonth: number[] = [];
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  events: { date: string; title: string }[] = [{ date: '2025-01-18', title: 'Sample Event' }];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    if (this.currentView === 'month') {
      // Generate days for the entire month
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      this.daysInMonth = Array(firstDayOfMonth)
        .fill(null)
        .concat(Array.from({ length: totalDays }, (_, i) => i + 1));
    } else if (this.currentView === 'week') {
      // Generate dates for the current week
      const today = new Date();
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      this.daysInMonth = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date.getDate();
      });
    } else if (this.currentView === 'day') {
      // Show only today
      this.daysInMonth = [this.currentDate.getDate()];
    }
  }

  goToPreviousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  goToNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  setView(view: 'month' | 'week' | 'day') {
    this.currentView = view;
    this.generateCalendar();
  }

  formatDate(day: number | null): string {
    if (day === null) return '';
    const month = String(this.currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${this.currentYear}-${month}-${dayStr}`;
  }

  addEvent(date: string) {
    const title = prompt('Enter the event title:');
    if (title) {
      this.events.push({ date, title });
    }
  }

  isToday(day: number | null): boolean {
    if (day === null) return false;
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === this.currentMonth &&
      today.getFullYear() === this.currentYear
    );
  }

  getEventsForDate(day: number | null): { date: string; title: string }[] {
    const dateStr = this.formatDate(day);
    return this.events.filter((event) => event.date === dateStr);
  }
}
