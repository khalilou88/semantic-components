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
    <div
      class="flex flex-col items-center justify-start rounded border p-2"
      *ngFor="let day of daysInMonth"
      [ngClass]="{
        'h-20 sm:h-32': currentView === 'month',
        'h-full': currentView === 'week',
        'h-full': currentView === 'day',
      }"
      (click)="day !== null && addEvent(formatDate(day))"
      (keydown.enter)="day !== null && addEvent(formatDate(day))"
      (keydown.space)="day !== null && addEvent(formatDate(day))"
      tabindex="0"
      role="button"
    >
      <span class="font-medium" *ngIf="day !== null">{{ day }}</span>
      <div class="mt-1 w-full" *ngIf="day !== null">
        <div
          class="truncate rounded bg-blue-500 px-1 py-0.5 text-xs text-white sm:text-sm"
          *ngFor="let event of getEventsForDate(day)"
        >
          {{ event.title }}
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
