import { DecimalPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-clock-time-picker',
  imports: [NgFor, NgClass, DecimalPipe],
  template: `
    <div class="flex flex-col items-center justify-center space-y-6">
      <!-- Selected Time Display -->
      <div class="text-4xl font-bold text-gray-800">
        {{ currentHour | number: '2.0' }} : {{ currentMinute | number: '2.0' }}
      </div>

      <!-- Clock Container -->
      <div
        class="relative flex size-64 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md"
        (click)="selectTime($event)"
      >
        <!-- Clock Numbers -->
        <div
          class="absolute -translate-x-1/2 -translate-y-1/2 font-medium text-gray-600"
          *ngFor="
            let num of isHourSelection
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
              : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            let i = index
          "
          [style.top]="50 - Math.cos(((i * 30 - 90) * Math.PI) / 180) * 40 + '%'"
          [style.left]="50 + Math.sin(((i * 30 - 90) * Math.PI) / 180) * 40 + '%'"
          [ngClass]="{
            'text-blue-500': isHourSelection ? currentHour === num : currentMinute === num,
          }"
        >
          {{ num }}
        </div>

        <!-- Clock Hand -->
        <div
          class="absolute h-20 w-0.5 origin-bottom bg-blue-500"
          [style.transform]="
            'rotate(' + (isHourSelection ? (currentHour % 12) * 30 : currentMinute * 6) + 'deg)'
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
  currentHour = 12; // Default hour
  currentMinute = 0; // Default minute
  isHourSelection = true; // Toggle between hours and minutes

  //TODO remove this
  Math: any;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Method to select hour or minute based on clock click
  selectTime(event: MouseEvent): void {
    const clock = event.target as HTMLElement;
    const clockRect = clock.getBoundingClientRect();
    const centerX = clockRect.left + clockRect.width / 2;
    const centerY = clockRect.top + clockRect.height / 2;

    // Calculate angle
    const deltaX = event.clientX - centerX;
    const deltaY = centerY - event.clientY; // Invert Y-axis for proper angle calculation
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    const adjustedAngle = (angle + 360) % 360; // Normalize to 0–360 degrees

    if (this.isHourSelection) {
      // Map angle to hours (12-hour clock)
      this.currentHour = Math.round(adjustedAngle / 30) || 12;
    } else {
      // Map angle to minutes
      this.currentMinute = Math.round(adjustedAngle / 6) % 60;
    }
  }

  // Toggle between hour and minute selection
  toggleSelection(): void {
    this.isHourSelection = !this.isHourSelection;
  }
}
