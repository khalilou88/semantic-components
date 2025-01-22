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
    <div class="w-80 rounded-lg bg-white p-5 shadow-lg">
      <div class="mb-5 text-center text-2xl">{{ formattedHour() }}:{{ formattedMinute() }}</div>

      <div class="relative mx-auto mb-5 size-52">
        <!--  Clock face -->
        <div class="absolute size-full rounded-full border-2 border-gray-200 bg-gray-100">
          <!--  Center dot -->
          <div
            class="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800"
          ></div>

          <!--  Clock hand -->
          <div
            class="absolute left-1/2 top-5 h-20 w-0.5 origin-bottom -translate-x-1/2 bg-blue-500"
            [style.transform]="getHandRotation()"
          ></div>

          <!-- Numbers -->

          @for (item of generateClockNumbers(); track $index) {
            <button
              class="absolute flex size-8 items-center justify-center rounded-full text-sm"
              [ngClass]="
                (isHourMode() && item.number === selectedHour()) ||
                (!isHourMode() && item.number * 5 === selectedMinute())
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              "
              [style]="item.style"
              (click)="handleNumberClick(item.number)"
            >
              {{ numToDisplay(item.number) }}
            </button>
          }
        </div>
      </div>

      <!-- Mode switches -->
      <div class="flex justify-center gap-2">
        <button
          class="rounded px-4 py-2 text-white"
          [ngClass]="isHourMode() ? 'bg-blue-600' : 'bg-blue-400'"
          (click)="isHourMode.set(true)"
        >
          Hours
        </button>

        <button
          class="rounded px-4 py-2 text-white"
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
  protected readonly selectedMinute = signal(60);

  protected numToDisplay(number: number) {
    if (this.isHourMode()) {
      return number;
    }
    const minutes = number * 5;
    if (minutes === 60) {
      return 0;
    }
    return minutes;
  }

  protected readonly formattedHour = computed(() => String(this.selectedHour()).padStart(2, '0'));
  protected readonly formattedMinute = computed(() => {
    let minutes = this.selectedMinute();
    if (minutes === 60) {
      minutes = 0;
    }

    return String(minutes).padStart(2, '0');
  });

  // Generate positions for clock numbers
  generateClockNumbers = computed(() => {
    const numbers = this.isHourMode() ? 12 : 60;
    const step = this.isHourMode() ? 1 : 5;
    const items = [];

    for (let i = 1; i <= numbers / step; i++) {
      const angle = i * (360 / (numbers / step)) - 90;
      const radius = 80;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      //86 because the width of div is 204 and the width of the button is 32
      // 86 = (204 - 32 ) / 2
      items.push({
        number: i,
        style: {
          left: `${x + 86}px`,
          top: `${y + 86}px`,
        },
      });
    }

    return items;
  });

  handleNumberClick = (num: number) => {
    if (this.isHourMode()) {
      this.selectedHour.set(num);
    } else {
      this.selectedMinute.set(num * 5);
    }
  };

  getHandRotation = computed(() => {
    const value = this.isHourMode() ? this.selectedHour() : this.selectedMinute() / 5;
    // Calculate angle, ensuring correct rotation and offset
    const angle = (value % 12) * (360 / 12);
    return `rotate(${angle}deg)`;
  });
}
