import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  forwardRef,
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
      class="peer relative appearance-none h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      [disabled]="disabled()"
      [attr.data-state]="state()"
      type="checkbox"
    />

    @if (checked() === true) {
      <svg-check-icon
        class="absolute w-4 h-4 outline-none cursor-pointer text-primary-foreground"
      />
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
  class = input<string>('');

  classes = computed(() => cn('flex', this.class()));

  checked = model<boolean>(false);

  disabled = model(false);

  state = computed(() => {
    return this.checked() ? 'checked' : '';
  });

  toggle() {
    this.checked.update((v) => !v);
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
