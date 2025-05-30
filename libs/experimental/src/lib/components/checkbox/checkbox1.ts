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
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-checkbox1',
  imports: [SiCheckIcon, SiMinusIcon],
  template: `
    <input
      [id]="id()"
      [attr.aria-label]="ariaLabel()"
      [class]="checkboxClass()"
      [disabled]="disabled()"
      [checked]="checked()"
      [attr.aria-checked]="checked()"
      [attr.data-state]="state()"
      (change)="onInteractionEvent($event)"
      (click)="toggle()"
      data-slot="control"
      type="checkbox"
    />

    @if (indeterminate()) {
      <svg [class]="svgClass()" si-minus-icon></svg>
    } @else if (checked()) {
      <svg [class]="svgClass()" si-check-icon></svg>
    }
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
      useExisting: forwardRef(() => ScCheckbox1),
      multi: true,
    },
  ],
})
export class ScCheckbox1 implements ControlValueAccessor {
  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-checkbox-'), {
    alias: 'id',
  });

  readonly id = linkedSignal(() => this.idInput());

  private readonly hostRef = inject(ElementRef);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative block size-4', this.classInput()));

  //TODO add this to class
  protected readonly checkboxClass = computed(() =>
    cn(
      'peer appearance-none absolute top-0 left-0 size-full shrink-0 cursor-pointer rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
    ),
  );

  //TODO add this to class
  protected readonly svgClass = computed(() =>
    cn(
      'absolute top-0 left-0 size-full outline-none cursor-pointer pointer-events-none text-primary-foreground',
    ),
  );

  // readonly labelClassInput = input<string>('', {
  //   alias: 'labelClass',
  // });

  // protected readonly labelClass = computed(() =>
  //   cn(
  //     'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  //     this.labelClassInput(),
  //   ),
  // );

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
