import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  effect,
  input,
  output,
  viewChildren,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButton } from '../button';
import { WeekDayName } from './util';

@Component({
  selector: 'sc-day-selector',
  imports: [NgClass, ScButton],
  template: `
    @for (weekDayName of weekDaysNames(); track weekDayName.long) {
      <abbr
        class="size-10 text-center text-muted-foreground"
        [title]="weekDayName.long"
        [attr.aria-label]="weekDayName.long"
      >
        {{ weekDayName.short }}
      </abbr>
    }

    @for (day of days(); track $index; let index = $index) {
      <button
        [ngClass]="{
          'col-start-1': index === 0 && firstDayMonth() === 0,
          'col-start-2': index === 0 && firstDayMonth() === 1,
          'col-start-3': index === 0 && firstDayMonth() === 2,
          'col-start-4': index === 0 && firstDayMonth() === 3,
          'col-start-5': index === 0 && firstDayMonth() === 4,
          'col-start-6': index === 0 && firstDayMonth() === 5,
          'col-start-7': index === 0 && firstDayMonth() === 6,
        }"
        [attr.data-sc-day]="day"
        [variant]="getVariant(day)"
        (click)="setSelectedDay($event)"
        sc-button
        size="icon"
      >
        {{ day.slice(-2) }}
      </button>
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDaySelector {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('grid grid-cols-7 place-items-center', this.classInput()),
  );

  weekDaysNames = input.required<WeekDayName[]>();

  days = input.required<string[]>();
  firstDayMonth = input.required<number>();
  selectedDay = input<string>('');

  selectedDayChange = output<string>();

  isSelected(day: string) {
    return day === this.selectedDay();
  }

  setSelectedDay(event: Event): void {
    const target = event.target as HTMLElement;
    const selectedDay = target.dataset['scDay'] as string;
    this.selectedDayChange.emit(selectedDay);
  }

  focusedDate = input<string>('');
  btns = viewChildren(ScButton, { read: ElementRef });

  constructor() {
    effect(() => {
      if (this.focusedDate()) {
        const b = this.btns().find(
          (item) => item.nativeElement.getAttribute('data-sc-day') === this.selectedDay(),
        );
        b?.nativeElement.focus();
      }
    });
  }

  getVariant(day: string) {
    if (this.isSelected(day)) {
      return 'primary';
    }

    if (this.isToday(day)) {
      return 'outline';
    }

    return 'ghost';
  }

  readonly today = input.required<string>();

  protected isToday(date: string): boolean {
    return date === this.today();
  }
}
