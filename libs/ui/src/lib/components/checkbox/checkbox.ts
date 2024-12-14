import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-checkbox',
  imports: [SvgCheckIcon],
  template: `
    <input
      [class]="checkboxClasses()"
      [disabled]="isDisabled()"
      [attr.data-state]="state()"
      type="checkbox"
    />

    @if (isChecked() === true) {
      <svg-check-icon [class]="svgClasses()" />
    }
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCheckbox),
      multi: true,
    },
  ],
})
export class ScCheckbox implements ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  class = input<string>('');

  classes = computed(() => cn('flex relative', this.class()));

  checkboxClass = input<string>('');

  checkboxClasses = computed(() =>
    cn(
      'peer appearance-none h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.checkboxClass(),
    ),
  );

  svgClass = input<string>('');

  svgClasses = computed(() =>
    cn(
      'absolute top-0 left-0 w-4 h-4 outline-none cursor-pointer text-primary-foreground',
      this.svgClass(),
    ),
  );

  checked = model<BooleanInput>(false);

  isChecked = computed(() => {
    return coerceBooleanProperty(this.checked());
  });

  disabled = model<BooleanInput>(false);

  isDisabled = computed(() => {
    return coerceBooleanProperty(this.disabled());
  });

  state = computed(() => {
    return this.isChecked() ? 'checked' : '';
  });

  toggle() {
    if (this.isDisabled()) {
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
