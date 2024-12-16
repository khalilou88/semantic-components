import { BooleanInput } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  output,
} from '@angular/core';

import { SvgCircleIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { ScRadioGroupState } from './radio-group-state';

@Component({
  selector: 'sc-radio-group-item',
  imports: [SvgCircleIcon],
  template: `
    <div class="grid grid-cols-[1fr]">
      <input [id]="id()" [class]="classes()" [disabled]="disabled()" [name]="name()" type="radio" />

      @if (checked() === true) {
        <svg-circle-icon [hostClass]="circleHostClass()" [class]="circleClasses()" />
      }
    </div>

    <label [for]="id()" sc-label><ng-content /></label>
  `,
  host: {
    '[class]': 'hostClasses()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupItem {
  state = inject(ScRadioGroupState);

  id = input.required<string>();
  name = input<string>('');

  value = input.required<string>();

  checked = computed(() => {
    return this.value() === this.state.selectedValue();
  });

  disabled = input<BooleanInput>(false);

  class = input<string>('row-start-1 col-start-1');

  classes = computed(() =>
    cn(
      'appearance-none aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.class(),
    ),
  );

  hostClass = input<string>('');

  hostClasses = computed(() => cn('flex items-center space-x-2', this.hostClass()));

  circleHostClass = input<string>(
    'row-start-1 col-start-1 h-4 w-4 flex items-center justify-center',
  );

  circleClass = input<string>('');

  circleClasses = computed(() => cn('h-2.5 w-2.5 fill-primary text-primary', this.circleClass()));

  radioChecked = output<void>();

  toggle() {
    if (this.disabled()) {
      return;
    }

    this.state.selectedValue.set(this.value());
  }
}
