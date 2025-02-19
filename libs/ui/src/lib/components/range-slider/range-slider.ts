import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sc-range-slider',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="w-full max-w-md px-4 py-6">
      <div class="relative h-2">
        <!-- Track background -->
        <div class="absolute w-full h-full bg-gray-200 rounded-full"></div>

        <!-- Selected range track -->
        <div
          class="absolute h-full bg-blue-500 rounded-full"
          [style.left]="minPercentage + '%'"
          [style.right]="100 - maxPercentage + '%'"
        ></div>

        <!-- Min value slider -->
        <input
          class="absolute w-full h-full appearance-none bg-transparent pointer-events-none"
          [(ngModel)]="minValue"
          [min]="min"
          [max]="max"
          (input)="onMinChange($event)"
          type="range"
        />

        <!-- Max value slider -->
        <input
          class="absolute w-full h-full appearance-none bg-transparent pointer-events-none"
          [(ngModel)]="maxValue"
          [min]="min"
          [max]="max"
          (input)="onMaxChange($event)"
          type="range"
        />
      </div>

      <!-- Value display -->
      <div class="mt-4 flex justify-between text-sm text-gray-600">
        <span>Min: {{ minValue }}</span>
        <span>Max: {{ maxValue }}</span>
      </div>
    </div>
  `,
  styles: `
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      width: 16px;
      height: 16px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
      pointer-events: all;
      width: 16px;
      height: 16px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRangeSlider {
  @Input() min = 0;
  @Input() max = 100;
  @Input() minValue = 20;
  @Input() maxValue = 80;

  @Output() minValueChange = new EventEmitter<number>();
  @Output() maxValueChange = new EventEmitter<number>();

  get minPercentage(): number {
    return ((this.minValue - this.min) * 100) / (this.max - this.min);
  }

  get maxPercentage(): number {
    return ((this.maxValue - this.min) * 100) / (this.max - this.min);
  }

  onMinChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (value < this.maxValue) {
      this.minValue = value;
      this.minValueChange.emit(value);
    }
  }

  onMaxChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (value > this.minValue) {
      this.maxValue = value;
      this.maxValueChange.emit(value);
    }
  }
}
