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
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '@semantic-components/utils';
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-checkbox',
  imports: [SiCheckIcon, SiMinusIcon],
  template: `
    <div [class]="wrapperClass()">
      <input
        [id]="id()"
        [attr.aria-label]="ariaLabel()"
        [class]="checkboxClass()"
        [disabled]="disabled()"
        [checked]="checked()"
        [attr.data-state]="state()"
        (change)="onInteractionEvent($event)"
        (click)="toggle()"
        type="checkbox"
      />

      @if (indeterminate()) {
        <svg [class]="svgClass()" si-minus-icon></svg>
      } @else if (checked()) {
        <svg [class]="svgClass()" si-check-icon></svg>
      }
    </div>

    <label [class]="labelClass()" [for]="id()">
      <ng-content />
    </label>
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
      useExisting: forwardRef(() => ScCheckbox),
      multi: true,
    },
  ],
})
export class ScCheckbox implements ControlValueAccessor {
  protected readonly id = signal<string>(inject(_IdGenerator).getId('sc-checkbox-'));

  private readonly hostRef = inject(ElementRef);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('flex items-center space-x-2', this.classInput()));

  readonly wrapperClassInput = input<string>('', {
    alias: 'wrapperClass',
  });

  protected readonly wrapperClass = computed(() => cn('relative size-4', this.wrapperClassInput()));

  readonly checkboxClassInput = input<string>('', {
    alias: 'checkboxClass',
  });

  protected readonly checkboxClass = computed(() =>
    cn(
      'peer appearance-none absolute top-0 left-0 size-full shrink-0 cursor-pointer rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
      this.checkboxClassInput(),
    ),
  );

  readonly svgClassInput = input<string>('', {
    alias: 'svgClass',
  });

  protected readonly svgClass = computed(() =>
    cn(
      'absolute top-0 left-0 size-full outline-none cursor-pointer pointer-events-none text-primary-foreground',
      this.svgClassInput(),
    ),
  );

  readonly labelClassInput = input<string>('', {
    alias: 'labelClass',
  });

  protected readonly labelClass = computed(() =>
    cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.labelClassInput(),
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

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());

  //TODO: change name to changed, or toggled
  readonly change = output<boolean>();

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
  }

  protected toggle() {
    if (this.disabled()) {
      return;
    }

    const v = !this.checked();
    this.checked.set(v);
    this.change.emit(v);

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
