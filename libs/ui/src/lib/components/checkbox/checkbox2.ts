import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-checkbox2]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCheckbox2),
      multi: true,
    },
  ],
})
export class ScCheckbox2 implements ControlValueAccessor {
  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-checkbox-'), {
    alias: 'id',
  });

  readonly id = linkedSignal(() => this.idInput());

  private readonly hostRef = inject(ElementRef);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'appearance-none',
      'w-6',
      'h-6',
      'border-2',
      'border-gray-300',
      'rounded',
      'bg-white',
      'cursor-pointer',
      'outline-none',
      'transition-all',
      'duration-200',

      'hover:border-gray-600',

      'focus:border-blue-500',
      'focus:ring-2',
      'focus:ring-blue-500',
      'focus:ring-opacity-20',

      'checked:bg-blue-500',
      'checked:border-blue-500',
      'checked:hover:bg-blue-600',
      'checked:hover:border-blue-600',

      'disabled:bg-gray-100',
      'disabled:border-gray-300',
      'disabled:cursor-not-allowed',
      'disabled:checked:bg-gray-300',
      'disabled:checked:border-gray-300',

      "[&:checked]:bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 12l4 4l8-8' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E')]",
      'checked:bg-no-repeat',
      'checked:bg-center',
      'checked:bg-contain',

      this.classInput(),
    ),
  );

  readonly ariaLabel = input<string | null>(null, { alias: 'aria-label' });

  readonly indeterminateInput = input<boolean, unknown>(false, {
    alias: 'indeterminate',
    transform: booleanAttribute,
  });
  protected readonly indeterminate = linkedSignal(() => this.indeterminateInput());

  readonly checkedInput = input<boolean, unknown>(false, {
    alias: 'checked',
    transform: booleanAttribute,
  });
  protected readonly checked = linkedSignal(() => this.checkedInput());
  readonly checkedChange = output<boolean>();

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());

  protected readonly state = computed<'indeterminate' | 'checked' | 'unchecked'>(() => {
    if (this.indeterminate()) {
      return 'indeterminate';
    }

    if (this.checked()) {
      return 'checked';
    }

    return 'unchecked';
  });

  constructor() {
    effect(() => {
      this.hostRef.nativeElement.indeterminate = this.indeterminate();
    });

    effect(() => {
      this.checkedChange.emit(this.checked());
    });
  }

  protected toggle() {
    if (this.disabled()) {
      return;
    }

    const v = !this.checked();
    this.checked.set(v);

    if (this.indeterminate()) {
      this.indeterminate.set(false);
    }

    this.onChange(v);
    this.changeDetectorRef.markForCheck();
  }

  writeValue(checked: boolean): void {
    this.checked.set(checked);
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onInteractionEvent(event: Event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
}
