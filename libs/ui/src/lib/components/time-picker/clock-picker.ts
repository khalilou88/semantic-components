import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-clock-picker',
  imports: [NgFor],
  template: `
    <div class="inline-block">
      <!-- Time Display -->
      <div class="mb-4 text-center">
        <span class="text-3xl font-bold">
          {{ formatTime(selectedHour, selectedMinute, selectedPeriod) }}
        </span>
      </div>

      <!-- Clock Face -->
      <div
        class="relative size-64 rounded-full border-2 border-gray-200 bg-gray-100"
        #clockFace
        (mousedown)="startDrag($event)"
        (mousemove)="drag($event)"
        (mouseup)="stopDrag()"
        (mouseleave)="stopDrag()"
      >
        <!-- Hour Markers -->
        <div
          class="absolute size-full"
          *ngFor="let hour of hours"
          [style.transform]="'rotate(' + hour * 30 + 'deg)'"
        >
          <div class="absolute left-1/2 top-0 h-full -translate-x-1/2">
            <span class="absolute top-2 -translate-x-1/2 font-medium">
              {{ hour === 0 ? 12 : hour }}
            </span>
          </div>
        </div>

        <!-- Hour Hand -->
        <div
          class="absolute left-1/2 top-1/2 h-16 w-1 origin-top rounded-full bg-blue-600"
          [style.transform]="'rotate(' + getHourDegrees() + 'deg)'"
        ></div>

        <!-- Minute Hand -->
        <div
          class="absolute left-1/2 top-1/2 h-24 w-0.5 origin-top rounded-full bg-blue-400"
          [style.transform]="'rotate(' + getMinuteDegrees() + 'deg)'"
        ></div>

        <!-- Center Dot -->
        <div
          class="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600"
        ></div>
      </div>

      <!-- AM/PM Toggle -->
      <div class="mt-4 flex justify-center gap-2">
        <button
          *ngFor="let period of periods"
          [class]="
            'px-4 py-2 rounded-lg ' +
            (selectedPeriod === period ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200')
          "
          (click)="selectPeriod(period)"
        >
          {{ period }}
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScClockPicker implements OnInit {
  @Input() initialTime?: string;
  @Output() timeSelected = new EventEmitter<string>();

  hours = Array.from({ length: 12 }, (_, i) => i);
  periods = ['AM', 'PM'];

  selectedHour = 12;
  selectedMinute = 0;
  selectedPeriod = 'AM';

  isDragging = false;
  isHourDrag = true; // true for hour hand, false for minute hand

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    if (this.initialTime) {
      this.parseInitialTime(this.initialTime);
    }
  }

  parseInitialTime(time: string) {
    const [timeStr, period] = time.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);

    this.selectedHour = hours % 12 || 12;
    this.selectedMinute = minutes;
    this.selectedPeriod = period;
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    // Determine if click is closer to hour or minute hand
    const rect = (this.elementRef.nativeElement as HTMLElement)
      .querySelector('#clockFace')
      ?.getBoundingClientRect();

    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2),
      );

      this.isHourDrag = distance < rect.width / 3;
    }

    this.updateHandPosition(event);
  }

  drag(event: MouseEvent) {
    if (this.isDragging) {
      this.updateHandPosition(event);
    }
  }

  stopDrag() {
    this.isDragging = false;
    this.emitTimeChange();
  }

  updateHandPosition(event: MouseEvent) {
    const rect = (this.elementRef.nativeElement as HTMLElement)
      .querySelector('#clockFace')
      ?.getBoundingClientRect();

    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle =
        (Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) / Math.PI + 90;

      if (this.isHourDrag) {
        this.selectedHour = Math.round(((angle + 360) % 360) / 30) % 12 || 12;
      } else {
        this.selectedMinute = Math.round(((angle + 360) % 360) / 6) % 60;
      }
    }
  }

  getHourDegrees(): number {
    return (this.selectedHour % 12) * 30 + (this.selectedMinute / 60) * 30;
  }

  getMinuteDegrees(): number {
    return this.selectedMinute * 6;
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
    this.emitTimeChange();
  }

  formatTime(hour: number, minute: number, period: string): string {
    return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
  }

  emitTimeChange() {
    const formattedTime = this.formatTime(
      this.selectedHour,
      this.selectedMinute,
      this.selectedPeriod,
    );
    this.timeSelected.emit(formattedTime);
  }
}
