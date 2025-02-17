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
      //Base styles
      'appearance-none', //removes default browser styling
      'w-6 h-6', //sets width and height (24px)
      'border-2 border-gray-300', //adds border
      'rounded', //adds border radius
      'bg-white', //sets background color
      'cursor-pointer',
      'outline-none',
      'transition-all duration-200', //adds smooth transitions

      //Interactive states
      'hover:border-gray-600', //darkens border on hover
      'focus:border-blue-500', //changes border color on focus
      'focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20', //adds focus ring

      //Checked state
      'checked:bg-blue-500 checked:border-blue-500', //changes background and border when checked
      'checked:hover:bg-blue-600 checked:hover:border-blue-600', //darker blue on hover when checked

      //Disabled state
      'disabled:bg-gray-100 disabled:border-gray-300', //styles for disabled state
      'disabled:cursor-not-allowed', //changes cursor
      'disabled:checked:bg-gray-300 disabled:checked:border-gray-300', //styles for checked and disabled

      // Applies SVG background image when checked
      '[&:checked]:bg-[image:var(--checkbox-bg)]',
      'checked:bg-no-repeat', // Prevents background image from repeating
      'checked:bg-center', // Centers the background image
      'checked:bg-contain', // Scales image to fit while maintaining aspect ratio

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
