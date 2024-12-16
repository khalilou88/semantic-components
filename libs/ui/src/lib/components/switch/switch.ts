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

import { cn } from '../../utils';

@Component({
  selector: 'sc-switch',
  imports: [],
  template: `
    <input
      [class]="classes()"
      [id]="id()"
      [checked]="checked()"
      [attr.data-state]="state()"
      type="checkbox"
      role="switch"
    />
    <span
      class="absolute top-0 left-0 pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      [attr.data-state]="state()"
    ></span>
  `,
  host: {
    '[class]': 'hostClasses()',
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

  hostClass = input<string>('');

  hostClasses = computed(() => cn('relative inline-block h-6 w-11', this.hostClass()));

  class = input<string>('');

  classes = computed(() =>
    cn(
      'peer appearance-none inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      this.class(),
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
