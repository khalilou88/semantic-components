import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-switch]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    type: 'checkbox',
    '[checked]': 'checked()',
    '[attr.data-state]': 'state()',
    '[class]': 'class()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScSwitch),
      multi: true,
    },
  ],
})
export class ScSwitch implements ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'appearance-none',
      'w-11 h-6 relative cursor-pointer inline-block',
      'focus:outline-0 dark:focus:outline-0',
      'border-0 dark:border-0',
      'focus:ring-offset-transparent dark:focus:ring-offset-transparent',
      'focus:ring-transparent dark:focus:ring-transparent',
      'focus-within:ring-0 dark:focus-within:ring-0',
      'focus:shadow-none dark:focus:shadow-none',

      'after:absolute before:absolute',
      'after:top-0 before:top-0',
      'after:block before:inline-block',
      'before:rounded-full after:rounded-full',

      "after:content-[''] after:w-5 after:h-5 after:mt-0.5 after:ml-0.5",
      'after:shadow-md after:duration-100',

      "before:content-[''] before:w-10 before:h-full",
      'before:shadow-[inset_0_0_#000]',

      'after:bg-white dark:after:bg-gray-50',
      'before:bg-gray-300 dark:before:bg-gray-600',
      'before:checked:bg-lime-500 dark:before:checked:bg-lime-500',
      'checked:after:duration-300 checked:after:translate-x-4',

      'disabled:after:bg-opacity-75 disabled:cursor-not-allowed',
      'disabled:checked:before:bg-opacity-40',

      this.classInput(),
    ),
  );

  id = input('');

  checked = model<BooleanInput>(false);

  disabled = model<BooleanInput>(false);

  state = computed(() => {
    return this.checked() ? 'checked' : 'unchecked';
  });

  constructor() {
    effect(() => {
      if (this.checked() !== true && this.checked() !== false) {
        this.checked.update((v) => coerceBooleanProperty(v));
      }

      if (this.disabled() !== true && this.disabled() !== false) {
        this.disabled.update((v) => coerceBooleanProperty(v));
      }
    });
  }

  toggle() {
    if (this.disabled()) {
      return;
    }

    const v = !this.checked();
    this.checked.set(v);

    this.onChange(v);
    this._cdr.markForCheck();
  }

  writeValue(value: boolean): void {
    this.checked.set(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
