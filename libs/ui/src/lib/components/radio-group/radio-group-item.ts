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

import { SvgCircleIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-radio-group-item',
  imports: [SvgCircleIcon],
  template: `
    <input id="id()" [class]="classes()" [disabled]="disabled()" type="radio" name="name()" />

    @if (checked() === true) {
      <svg-circle-icon [hostClass]="circleHostClass()" [class]="circleClasses()" />
    }
  `,
  host: {
    '[class]': 'hostClasses()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScRadioGroupItem),
      multi: true,
    },
  ],
})
export class ScRadioGroupItem implements ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  id = input<string>('');
  name = input<string>('');
  checked = model<BooleanInput>(false);

  disabled = model<BooleanInput>(false);

  class = input<string>('row-start-1 col-start-1');

  classes = computed(() =>
    cn(
      'appearance-none aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.class(),
    ),
  );

  hostClass = input<string>('grid grid-cols-[1fr]');

  hostClasses = computed(() => cn('', this.hostClass()));

  circleHostClass = input<string>(
    'row-start-1 col-start-1  h-4 w-4 flex items-center justify-center',
  );

  circleClass = input<string>('');

  circleClasses = computed(() => cn('h-2.5 w-2.5 fill-primary text-primary', this.circleClass()));

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
