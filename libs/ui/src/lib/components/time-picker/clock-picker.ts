import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
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
      <div class="relative size-64 rounded-full border-2 border-gray-200 bg-gray-100" #clockFace>
        <!-- Hour Markers -->
        <div
          class="pointer-events-none absolute size-full"
          *ngFor="let hour of hours"
          [style.transform]="'rotate(' + hour * 30 + 'deg)'"
        >
          <div class="absolute left-1/2 top-0 h-full -translate-x-1/2">
            <span class="absolute top-2 -translate-x-1/2 font-medium">
              {{ hour === 0 ? 12 : hour }}
            </span>
          </div>
        </div>

        <!-- Clickable Areas -->
        <div
          class="absolute inset-0"
          (mousedown)="startMinuteDrag($event)"
          (touchstart)="startMinuteDrag($event)"
        >
          <div
            class="absolute inset-8"
            (mousedown)="startHourDrag($event)"
            (touchstart)="startHourDrag($event)"
          ></div>
        </div>

        <!-- Hour Hand -->
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-16 w-1 origin-top rounded-full bg-blue-600"
          [style.transform]="'rotate(' + getHourDegrees() + 'deg) translateX(-50%)'"
        ></div>

        <!-- Minute Hand -->
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-24 w-0.5 origin-top rounded-full bg-blue-400"
          [style.transform]="'rotate(' + getMinuteDegrees() + 'deg) translateX(-50%)'"
        ></div>

        <!-- Center Dot -->
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600"
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
  @ViewChild('clockFace') clockFace!: ElementRef;
  @Input() initialTime?: string;
  @Output() timeSelected = new EventEmitter<string>();

  hours = Array.from({ length: 12 }, (_, i) => i);
  periods = ['AM', 'PM'];

  selectedHour = 12;
  selectedMinute = 0;
  selectedPeriod = 'AM';

  isDragging = false;
  isHourMode = true;

  private readonly moveHandler: (event: MouseEvent | TouchEvent) => void;
  private readonly endHandler: () => void;

  constructor() {
    this.moveHandler = (event: MouseEvent | TouchEvent) => this.handleMove(event);
    this.endHandler = () => this.stopDrag();
  }

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

  startHourDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isHourMode = true;
    this.startDrag(event);
  }

  startMinuteDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isHourMode = false;
    this.startDrag(event);
  }

  private startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    document.addEventListener('mousemove', this.moveHandler);
    document.addEventListener('touchmove', this.moveHandler);
    document.addEventListener('mouseup', this.endHandler);
    document.addEventListener('touchend', this.endHandler);
    this.handleMove(event);
  }

  private handleMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    const rect = this.clockFace.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let clientX: number, clientY: number;

    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    const angle = (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI + 90;

    if (this.isHourMode) {
      this.selectedHour = Math.round(((angle + 360) % 360) / 30) % 12 || 12;
    } else {
      this.selectedMinute = Math.round(((angle + 360) % 360) / 6) % 60;
    }

    this.emitTimeChange();
  }

  private stopDrag() {
    if (!this.isDragging) return;

    this.isDragging = false;
    document.removeEventListener('mousemove', this.moveHandler);
    document.removeEventListener('touchmove', this.moveHandler);
    document.removeEventListener('mouseup', this.endHandler);
    document.removeEventListener('touchend', this.endHandler);

    this.emitTimeChange();
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
