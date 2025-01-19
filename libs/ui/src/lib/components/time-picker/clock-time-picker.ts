import { DecimalPipe, NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-clock-time-picker',
  imports: [NgFor, NgClass, DecimalPipe],
  template: `
    <div class="flex flex-col items-center justify-center space-y-6">
      <!-- Selected Time Display -->
      <div class="text-4xl font-bold text-gray-800">
        {{ currentHour() | number: '2.0' }} : {{ currentMinute() | number: '2.0' }}
      </div>

      <!-- Clock Container -->
      <div
        class="relative flex size-64 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md"
        aria-label="Clock Time Picker"
      >
        <!-- Clock Numbers for Hour or Minute -->
        <div
          class="absolute -translate-x-1/2 -translate-y-1/2 font-medium text-gray-600"
          *ngFor="
            let num of isHourSelection
              ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
              : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            let i = index
          "
          [style.top]="hourPositions[i]?.top + '%' || minutePositions[i]?.top + '%'"
          [style.left]="hourPositions[i]?.left + '%' || minutePositions[i]?.left + '%'"
          [ngClass]="{
            'text-blue-500': isHourSelection ? currentHour() === num : currentMinute() === num,
          }"
          [attr.aria-label]="'Select ' + (isHourSelection ? 'hour' : 'minute') + ' ' + num"
          (click)="selectTime($event, isHourSelection ? 'hour' : 'minute', num)"
          (keydown)="handleKeyPress($event, num)"
          tabindex="0"
          role="button"
        >
          {{ num }}
        </div>

        <!-- Clock Hand -->
        <div
          class="absolute h-20 w-0.5 bg-primary"
          [style.transform]="
            'rotate(' + (isHourSelection ? (currentHour() % 12) * 30 : currentMinute() * 6) + 'deg)'
          "
        ></div>
      </div>

      <!-- Toggle Button -->
      <button
        class="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none"
        (click)="toggleSelection()"
      >
        Switch to {{ isHourSelection ? 'Minutes' : 'Hours' }}
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScClockTimePicker implements OnInit {
  currentHour = signal(12); // Default hour
  currentMinute = signal(0); // Default minute

  isHourSelection = true; // Toggle between hours and minutes
  hourPositions: any[] = [];
  minutePositions: any[] = [];

  ngOnInit(): void {
    // Pre-calculate positions for hours and minutes
    this.calculateClockPositions();
  }

  // Method to calculate the positions of the numbers for hours and minutes
  calculateClockPositions(): void {
    // Calculate the positions for hours (12-hour clock)
    // Calculate the positions for minutes (0-55, every 5 minutes)
    this.hourPositions = [];
    this.minutePositions = [];
    for (let i = 0; i < 12; i++) {
      // Convert angle to radians (30° per hour and 30° per 5-minute increment)
      const angle = i * 30 * (Math.PI / 180); // Start at 0 minutes (adjust by -90°)
      const top = 50 - Math.cos(angle) * 40; // Y position
      const left = 50 + Math.sin(angle) * 40; // X position
      this.hourPositions.push({ top, left });
      this.minutePositions.push({ top, left });
    }
  }

  // Method to select hour or minute based on clock click
  selectTime(event: MouseEvent, a: 'hour' | 'minute', num: number): void {
    if (a === 'hour') {
      this.currentHour.set(num);
    }

    if (a === 'minute') {
      this.currentMinute.set(num);
    }
  }

  // Toggle between hour and minute selection
  toggleSelection(): void {
    this.isHourSelection = !this.isHourSelection;
  }

  // Handle keyboard navigation for accessibility
  handleKeyPress(event: KeyboardEvent, num: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      if (this.isHourSelection) {
        this.currentHour.set(num); // Update hour
      } else {
        this.currentMinute.set(num); // Update minute
      }
      event.preventDefault(); // Prevent default scroll behavior for the Space key
    }
  }
}
