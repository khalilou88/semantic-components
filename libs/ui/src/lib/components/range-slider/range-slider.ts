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
          class="absolute w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer"
          [(ngModel)]="minValue"
          [min]="min"
          [max]="max"
          (input)="onMinChange($event)"
          type="range"
        />

        <!-- Max value slider -->
        <input
          class="absolute w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer"
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
  styles: ``,
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
