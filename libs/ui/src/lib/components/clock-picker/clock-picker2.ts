import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-clock-picker2',
  imports: [NgClass],
  template: `
    <div class="w-80 p-5 bg-white rounded-lg shadow-lg">
      <div class="text-center text-2xl mb-5">{{ formattedHour() }}:{{ formattedMinute() }}</div>

      <div class="relative w-52 h-52 mx-auto mb-5">
        <!--  Clock face -->
        <div class="absolute w-full h-full rounded-full bg-gray-100 border-2 border-gray-200">
          <!--  Center dot -->
          <div
            class="absolute w-3 h-3 bg-gray-800 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>

          <!--  Clock hand -->
          <div
            class="absolute w-0.5 h-20 bg-blue-500 top-5 left-1/2 -translate-x-1/2 origin-bottom"
            [style]="myStyle()"
          ></div>
        </div>
      </div>

      <!-- Mode switches -->
      <div class="flex justify-center gap-2">
        <button
          class="px-4 py-2 rounded text-white"
          [ngClass]="isHourMode() ? 'bg-blue-600' : 'bg-blue-400'"
          (click)="isHourMode.set(true)"
        >
          Hours
        </button>

        <button
          class="px-4 py-2 rounded text-white"
          [ngClass]="!isHourMode() ? 'bg-blue-600' : 'bg-blue-400'"
          (click)="isHourMode.set(false)"
        >
          Minutes
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScClockPicker2 {
  protected readonly isHourMode = signal(true);
  protected readonly selectedHour = signal(12);
  protected readonly selectedMinute = signal(0);

  protected readonly formattedHour = computed(() => String(this.selectedHour()).padStart(2, '0'));
  protected readonly formattedMinute = computed(() =>
    String(this.selectedMinute()).padStart(2, '0'),
  );

  // Generate positions for clock numbers
  generateClockNumbers = () => {
    const numbers = this.isHourMode() ? 12 : 60;
    const step = this.isHourMode() ? 1 : 5;
    const items = [];

    for (let i = 1; i <= numbers / step; i++) {
      const angle = i * (360 / (numbers / step)) - 90;
      const radius = 80;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      items.push({
        number: i,
        style: {
          left: `${x + 100}px`,
          top: `${y + 100}px`,
        },
      });
    }

    return items;
  };

  handleNumberClick = (num: number) => {
    if (this.isHourMode()) {
      this.selectedHour.set(num);
    } else {
      this.selectedMinute.set(num * 5);
    }
  };

  getHandRotation = computed(() => {
    const value = this.isHourMode() ? this.selectedHour() : this.selectedMinute() / 5;
    const angle = value * (360 / (this.isHourMode() ? 12 : 60 / 5)) - 90;
    return `rotate(${angle}deg)`;
  });

  myStyle = computed(() => `transform: ${this.getHandRotation()}`);
}
