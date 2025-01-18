import { DatePipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-mobile-calendar',
  imports: [NgClass, NgFor, DatePipe],
  template: `
    <div class="flex flex-col items-center w-full h-full max-w-full mx-auto px-4">
      <!-- Calendar Header: Date Navigation -->
      <div class="flex justify-between items-center w-full mb-4">
        <!-- Previous Day Button -->
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          (click)="goToPreviousDay()"
          (keydown)="onKeydown($event, 'previous')"
          tabindex="0"
        >
          &lt;
        </button>

        <span class="text-lg font-semibold text-center flex-grow text-center">
          {{ currentDate | date: 'fullDate' }}
        </span>

        <!-- Next Day Button -->
        <button
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          (click)="goToNextDay()"
          (keydown)="onKeydown($event, 'next')"
          tabindex="0"
        >
          &gt;
        </button>
      </div>

      <!-- Hourly Slots: Display Hours in Mobile-friendly View -->
      <div class="w-full grid gap-2">
        <div
          class="flex flex-col items-start justify-start p-2 border rounded-lg bg-white shadow-md hover:bg-gray-100"
          *ngFor="let hour of hoursInDay"
          [ngClass]="{
            'bg-blue-100': isNow(hour),
            'cursor-pointer': hour !== null,
          }"
          (click)="hour !== null && addEvent(hour)"
        >
          <span class="font-medium">{{ hour }}:00</span>
          <div
            class="mt-1 text-xs sm:text-sm bg-blue-500 text-white rounded px-2 py-1 truncate"
            *ngFor="let event of getEventsForTime(hour)"
          >
            {{ event }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMobileCalendar implements OnInit {
  currentDate: Date;
  hoursInDay: number[];
  events: { [key: string]: string[] } = {}; // Store events by hour

  constructor() {
    this.currentDate = new Date();
    this.hoursInDay = Array.from({ length: 24 }, (_, index) => index); // 0 - 23 hours
    this.events = {};
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Go to the previous day
  goToPreviousDay(): void {
    const newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() - 1);
    this.currentDate = newDate;
  }

  // Go to the next day
  goToNextDay(): void {
    const newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate = newDate;
  }

  // Handle keyboard events for navigation (previous/next day)
  onKeydown(event: KeyboardEvent, direction: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      if (direction === 'previous') {
        this.goToPreviousDay();
      } else if (direction === 'next') {
        this.goToNextDay();
      }
    }
  }

  // Add event to a specific hour
  addEvent(hour: number): void {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      if (!this.events[hour]) {
        this.events[hour] = [];
      }
      this.events[hour].push(eventTitle);
    }
  }

  // Get events for a specific hour
  getEventsForTime(hour: number): string[] {
    return this.events[hour] || [];
  }

  // Check if a specific hour is the current hour
  isNow(hour: number): boolean {
    const now = new Date();
    return now.getHours() === hour && now.getDate() === this.currentDate.getDate();
  }
}
