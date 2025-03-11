import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  linkedSignal,
  output,
} from '@angular/core';

@Component({
  selector: 'sc-year-selector',
  imports: [],
  template: `
    <div class="p-2 grid grid-cols-4 gap-1">
      @for (y of years(); track y) {
        <button
          class="p-2 text-sm rounded hover:bg-blue-100"
          [class.bg-blue-500]="y === currentYear()"
          [class.text-white]="y === currentYear()"
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
export class ScYearSelector {
  readonly currentYear = input.required<number>();

  readonly year = linkedSignal(() => {
    return this.currentYear();
  });

  protected readonly years = computed(() => {
    const years: number[] = [];
    // Generate years (current year - 9 to current year + 10)
    for (let year = this.year() - 9; year <= this.year() + 10; year++) {
      years.push(year);
    }

    return years;
  });

  readonly yearSelected = output<number>();

  protected selectYear(year: number): void {
    this.yearSelected.emit(year);
  }
}
