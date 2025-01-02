import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';

import { ScRadioGroupState } from './radio-group-state';

@Component({
  selector: 'sc-radio-item',
  imports: [SiCircleIcon],
  template: `
    <div class="grid grid-cols-[1fr]">
      <input
        [id]="id()"
        [class]="_inputClass()"
        [disabled]="disabled()"
        [name]="name()"
        type="radio"
      />

      @if (checked() === true) {
        <span [class]="svgWrapperClass()">
          <svg [class]="_svgClass()" si-circle-icon></svg>
        </span>
      }
    </div>

    <label [for]="id()" sc-label><ng-content /></label>
  `,
  host: {
    '[class]': '_class()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioItem {
  private readonly state = inject(ScRadioGroupState);

  protected readonly id = signal<string>(inject(_IdGenerator).getId('sc-radio-item-'));

  protected readonly name = computed(() => {
    return this.state.name();
  });

  readonly value = input.required<string>();

  protected readonly checked = computed(() => {
    return this.value() === this.state.selectedValue();
  });

  readonly disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = computed(() => this.disabledByInput() || this.state.disabled());

  readonly class = input<string>('');
  protected readonly _class = computed(() => cn('flex items-center space-x-2', this.class()));

  readonly inputClass = input<string>('');
  protected readonly _inputClass = computed(() =>
    cn(
      'row-start-1 col-start-1',
      'appearance-none aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.inputClass(),
    ),
  );

  protected readonly svgWrapperClass = input<string>(
    'row-start-1 col-start-1 h-4 w-4 flex items-center justify-center',
  );

  readonly svgClass = input<string>('');
  protected readonly _svgClass = computed(() =>
    cn('h-2.5 w-2.5 fill-primary text-primary', this.svgClass()),
  );

  toggle() {
    if (this.disabled()) {
      return;
    }

    this.state.selectedValue.set(this.value());
  }
}
