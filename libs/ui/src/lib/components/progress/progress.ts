import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-progress',
  imports: [],
  template: `
    <div class="size-full flex-1 bg-primary transition-all" [style.transform]="transform()"></div>
  `,
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',
    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value()',
    '[class.sc-progress]': 'true',
  },
  styles: `
    .sc-progress {
      @apply block relative h-4 w-full overflow-hidden rounded-full bg-secondary;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScProgress {
  /** Current value of the progressbar. */
  value = input<number>(0);

  transform = computed(() => {
    return `translateX(-${100 - this.value()}%)`;
  });
}