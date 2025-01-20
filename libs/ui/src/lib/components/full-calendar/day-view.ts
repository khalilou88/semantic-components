import { DatePipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-day-view',
  imports: [NgClass, DatePipe],
  template: `
    <div class="rounded-lg border bg-white p-4 shadow-md hover:bg-gray-100">
      <div class="text-center font-medium">{{ date | date: 'fullDate' }}</div>

      <!-- Display hours for the day -->
      @for (hour of hoursInDay; track hour) {
        <div class="flex items-center justify-between p-2">
          <span>{{ hour }}:00</span>
          <button
            class="rounded px-2 py-1 hover:bg-blue-400"
            [ngClass]="{ 'bg-blue-500 text-white': isNow(hour) }"
            (click)="addEvent(hour)"
            (keydown)="onKeydown($event, hour)"
            tabindex="0"
          >
            Add Event
          </button>
        </div>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDayView implements OnInit {
  @Input() date!: Date; // Receive the date for each day
  hoursInDay: number[];

  constructor() {
    this.hoursInDay = Array.from({ length: 24 }, (_, index) => index); // 0 - 23 hours
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Method to add events for a specific hour
  addEvent(hour: number): void {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      alert(`Event "${eventTitle}" added to ${this.date.toDateString()} at ${hour}:00`);
    }
  }

  // Method to check if the current hour is now
  isNow(hour: number): boolean {
    const now = new Date();
    return now.getHours() === hour && now.getDate() === this.date.getDate();
  }

  // Handle keyboard events for accessibility
  onKeydown(event: KeyboardEvent, hour: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.addEvent(hour);
    }
  }
}
