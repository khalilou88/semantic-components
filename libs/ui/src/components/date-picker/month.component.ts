import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CommonModule, WeekDay } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import {
  addDays,
  areDatesInSameMonth,
  getDaysOfMonth,
  isDateAfter,
  isSameDate,
  isValidDate,
  startOfDay,
} from '../date-utils';
import { DayStepDelta } from './day-step-delta.model';

export const keyCodesToDaySteps = new Map<number, DayStepDelta>([
  [RIGHT_ARROW, 1],
  [LEFT_ARROW, -1],
  [DOWN_ARROW, 7],
  [UP_ARROW, -7],
]);

@Component({
  selector: 'sc-month',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid w-64 grid-cols-7">
      @for (dayOfMonth of daysOfMonth; track $index) {
        <span
          class="block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
        >
          {{ dayOfMonth | date: 'd' }}
        </span>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthComponent implements AfterViewInit, OnChanges {
  daysOfMonth!: readonly Date[];
  firstDayOfMonth!: string;
  currentDate = startOfDay(new Date());

  private readonly dateSelector = 'time.month__date';

  @Input() selectedDate?: Date;
  @Input() min?: Date | null;
  @Input() locale?: string;
  @Input() activeDate!: Date;

  private _month!: Date;

  @Input()
  get month() {
    return this._month;
  }
  set month(month: Date) {
    if (!this._month || !areDatesInSameMonth(this._month, month)) {
      this._month = month;
      this.daysOfMonth = getDaysOfMonth(this._month);
      this.firstDayOfMonth = WeekDay[this.daysOfMonth[0].getDay()].toLowerCase();
    }
  }

  @Output() selectedDateChange = new EventEmitter<Date>();
  @Output() activeDateChange = new EventEmitter<Date>();

  constructor(public changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      Object.entries(changes).some(([input, change]) => input !== 'month' && !change.firstChange)
    ) {
      this.changeDetectorRef.detectChanges();
    }
  }

  isSelected(dayOfMonth: Date) {
    return !!this.selectedDate && isSameDate(dayOfMonth, this.selectedDate);
  }

  isDisabled(dayOfMonth: Date) {
    return !!this.min && isDateAfter(this.min, dayOfMonth);
  }

  isActive(dayOfMonth: Date) {
    return !!this.activeDate && isSameDate(dayOfMonth, this.activeDate);
  }

  isCurrent(dayOfMonth: Date) {
    return !!this.currentDate && isSameDate(dayOfMonth, this.currentDate);
  }

  onKeydown(event: KeyboardEvent) {
    const dayStepDelta = keyCodesToDaySteps.get(event.keyCode);

    if (dayStepDelta) {
      event.preventDefault();
      const activeDate = addDays(this.activeDate, dayStepDelta);
      this.activeDateChange.emit(activeDate);
    }
  }

  onMonthClick(event: MouseEvent | Event) {
    // should be MouseEvent | KeyboardEvent, but $event type for keyup.enter is not inferred correctly
    const target = event.target as HTMLElement;

    if (this.isTimeElement(target)) {
      this.onDateClick(target);
    }
  }

  private onDateClick(timeElement: HTMLTimeElement) {
    const selectedDate = new Date(timeElement.dateTime + 'T00:00');

    if (isValidDate(selectedDate)) {
      this.selectDate(selectedDate);
    }
  }

  private selectDate(date: Date) {
    if (!this.isSelected(date) && !this.isDisabled(date)) {
      this.selectedDateChange.emit(date);
    }
  }

  private isTimeElement(element: HTMLElement): element is HTMLTimeElement {
    return !!element && element.matches(this.dateSelector);
  }
}
