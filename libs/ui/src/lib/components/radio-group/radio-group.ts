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
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-radio-group',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': '_class()',
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
  ],
})
export class ScRadioGroup implements ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('grid gap-2', this.class()));

  private readonly disabledByCva = signal(false);
  readonly disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  disabled = computed(() => this.disabledByInput() || this.disabledByCva());

  name = input<string>('');

  value = model<string | undefined>(undefined);

  constructor() {
    afterNextRender(() => {
      if (this.value !== undefined) {
        this.value.set(this.value());
      }
    });

    effect(() => {});
  }

  setValue(newValue: string) {
    this.value.set(newValue);
    this.onChange(newValue);
    this._cdr.markForCheck();
  }

  writeValue(value: string): void {
    this.value.set(value);
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
    this.disabledByCva.set(isDisabled);
  }
}
