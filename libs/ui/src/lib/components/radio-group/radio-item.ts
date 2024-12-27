import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-radio-item',
  imports: [SvgCircleIcon],
  template: `
    <div class="grid grid-cols-[1fr]">
      <input
        [id]="id()"
        [class]="_inputClass()"
        [disabled]="disabled()"
        [name]="name()"
        type="radio"
      />

      @if (isChecked() === true) {
        <span [class]="svgWrapperClass()">
          <svg-circle-icon [class]="_svgClass()" />
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
  protected id = signal<string>(inject(_IdGenerator).getId('sc-radio-item-'));
  name = signal('');
  value = input.required<string | undefined>();
  selectedValue = signal<string | undefined>(undefined);
  checked = output<string | undefined>();

  readonly radioGroupDisabled = signal(false);
  readonly disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = computed(() => this.disabledByInput() || this.radioGroupDisabled());

  protected readonly isChecked = computed(() => {
    return this.value() === this.selectedValue();
  });

  readonly inputClass = input<string>('');
  protected readonly _inputClass = computed(() =>
    cn(
      'row-start-1 col-start-1',
      'appearance-none aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.inputClass(),
    ),
  );

  readonly class = input<string>('');
  protected readonly _class = computed(() => cn('flex items-center space-x-2', this.class()));

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

    this.checked.emit(this.value());
  }
}
