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
    <div class="slider-container">
      <label *ngIf="label">{{ label }}</label>
      <div class="slider-controls">
        <input
          class="range-input"
          [(ngModel)]="value"
          [min]="min"
          [max]="max"
          [step]="step"
          (input)="onInput($event)"
          type="range"
        />
        <div class="value-display">{{ value }}{{ unit }}</div>
      </div>
      <div class="range-marks" *ngIf="showMarks">
        <span>{{ min }}{{ unit }}</span>
        <span>{{ max }}{{ unit }}</span>
      </div>
    </div>
  `,
  styles: `
    .slider-container {
      width: 100%;
      max-width: 300px;
      margin: 15px 0;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .slider-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .range-input {
      flex: 1;
      -webkit-appearance: none;
      height: 4px;
      background: #e2e8f0;
      border-radius: 2px;
      outline: none;
    }

    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      background: #3b82f6;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s;
    }

    .range-input::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: #3b82f6;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s;
    }

    .range-input::-webkit-slider-thumb:hover {
      background: #2563eb;
    }

    .range-input::-moz-range-thumb:hover {
      background: #2563eb;
    }

    .value-display {
      min-width: 40px;
      padding: 4px 8px;
      background: #f1f5f9;
      border-radius: 4px;
      text-align: center;
      font-size: 14px;
    }

    .range-marks {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      font-size: 12px;
      color: #64748b;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRangeSlider {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: number = 50;
  @Input() label: string = '';
  @Input() unit: string = '';
  @Input() showMarks: boolean = true;

  @Output() valueChange = new EventEmitter<number>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = Number(input.value);
    this.valueChange.emit(this.value);
  }
}
