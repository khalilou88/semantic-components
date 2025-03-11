import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'sc-year-selector',
  imports: [CommonModule],
  template: `
    <!-- Year selection -->
    <div class="p-2 grid grid-cols-4 gap-1">
      @for (y of years(); track y) {
        <button
          class="p-2 text-sm rounded hover:bg-blue-100"
          [class.bg-blue-500]="y === year()"
          [class.text-white]="y === year()"
          (click)="selectYear(y); $event.stopPropagation()"
        >
          {{ y }}
        </button>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearSelector {
  readonly year = input.required<number>();
  readonly year2 = input.required<number>();

  protected readonly years = computed(() => {
    const years: number[] = [];
    // Generate years (current year - 9 to current year + 10)
    for (let year = this.year2() - 9; year <= this.year2() + 10; year++) {
      years.push(year);
    }

    return years;
  });

  readonly yearSelected = output<number>();

  protected selectYear(year: number): void {
    this.yearSelected.emit(year);
  }
}
