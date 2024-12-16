import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '../../utils';
import { ScRadioGroupState } from './radio-group-state';

@Component({
  selector: 'sc-radio-group',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScRadioGroup),
      multi: true,
    },
    ScRadioGroupState,
  ],
})
export class ScRadioGroup implements ControlValueAccessor {
  state = inject(ScRadioGroupState);
  private readonly _cdr = inject(ChangeDetectorRef);

  class = input<string>('');

  classes = computed(() => cn('grid gap-2', this.class()));

  disabled = input(false, { transform: booleanAttribute });

  name = input<string>('');

  value = model<string | undefined>(undefined);

  constructor() {
    afterNextRender(() => {
      if (this.value !== undefined) {
        this.state.selectedValue.set(this.value());
      }
    });

    effect(() => {
      if (this.disabled() === true || this.disabled() === false) {
        this.state.disabled.set(this.disabled());
      }

      if (this.name()) {
        this.state.name.set(this.name());
      }

      const v = this.state.selectedValue();
      if (v !== undefined) {
        this.setValue(v);
      }
    });
  }

  setValue(newValue: string) {
    this.value.set(newValue);
    this.onChange(newValue);
    this._cdr.markForCheck();
  }

  writeValue(value: string): void {
    this.state.selectedValue.set(value);
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
    this.state.disabled.set(isDisabled);
  }
}
