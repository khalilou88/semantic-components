import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'sc-time-picker2',
  imports: [],
  template: `
    <div class="relative">
      <!-- Time Input Field -->
      <input
        class="w-full cursor-pointer rounded-lg border px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        [value]="formatTime(selectedHour, selectedMinute, selectedPeriod)"
        (click)="toggleDropdown()"
        type="text"
        readonly
        placeholder="Select time"
      />

      <!-- Dropdown Panel -->
      @if (isOpen) {
        <div class="absolute z-50 mt-1 w-64 rounded-lg border bg-white shadow-lg">
          <!-- Time Selection Grid -->
          <div class="p-4">
            <!-- Hour Selection -->
            <div class="mb-4">
              <span class="mb-2 block text-sm font-medium text-gray-700">Hour</span>
              <div class="grid grid-cols-4 gap-2">
                @for (hour of hours; track hour) {
                  <button
                    [class]="
                      'px-2 py-1 text-sm rounded-md ' +
                      (selectedHour === hour ? 'bg-blue-500 text-white' : 'hover:bg-gray-100')
                    "
                    (click)="selectHour(hour)"
                  >
                    {{ hour }}
                  </button>
                }
              </div>
            </div>
            <!-- Minute Selection -->
            <div class="mb-4">
              <span class="mb-2 block text-sm font-medium text-gray-700">Minute</span>
              <div class="grid grid-cols-4 gap-2">
                @for (minute of minutes; track minute) {
                  <button
                    [class]="
                      'px-2 py-1 text-sm rounded-md ' +
                      (selectedMinute === minute ? 'bg-blue-500 text-white' : 'hover:bg-gray-100')
                    "
                    (click)="selectMinute(minute)"
                  >
                    {{ minute.toString().padStart(2, '0') }}
                  </button>
                }
              </div>
            </div>
            <!-- AM/PM Selection -->
            <div>
              <span class="mb-2 block text-sm font-medium text-gray-700">Period</span>
              <div class="grid grid-cols-2 gap-2">
                @for (period of periods; track period) {
                  <button
                    [class]="
                      'px-4 py-2 text-sm rounded-md ' +
                      (selectedPeriod === period ? 'bg-blue-500 text-white' : 'hover:bg-gray-100')
                    "
                    (click)="selectPeriod(period)"
                  >
                    {{ period }}
                  </button>
                }
              </div>
            </div>
          </div>
          <!-- Done Button -->
          <div class="border-t p-4">
            <button
              class="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              (click)="confirmSelection()"
            >
              Done
            </button>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePicker2 implements OnInit {
  readonly initialTime = input<string>();
  readonly timeSelected = output<string>();

  isOpen = false;
  hours = Array.from({ length: 12 }, (_, i) => i + 1);
  minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  periods = ['AM', 'PM'];

  selectedHour = 12;
  selectedMinute = 0;
  selectedPeriod = 'AM';

  ngOnInit() {
    const initialTime = this.initialTime();
    if (initialTime) {
      this.parseInitialTime(initialTime);
    }
  }

  parseInitialTime(time: string) {
    const [timeStr, period] = time.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);

    this.selectedHour = hours % 12 || 12;
    this.selectedMinute = minutes;
    this.selectedPeriod = period;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectHour(hour: number) {
    this.selectedHour = hour;
  }

  selectMinute(minute: number) {
    this.selectedMinute = minute;
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }

  formatTime(hour: number, minute: number, period: string): string {
    return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
  }

  confirmSelection() {
    const formattedTime = this.formatTime(
      this.selectedHour,
      this.selectedMinute,
      this.selectedPeriod,
    );
    this.timeSelected.emit(formattedTime);
    this.isOpen = false;
  }
}
