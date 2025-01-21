import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-auto-resize-input',
  imports: [],
  template: `
    <div class="inline-flex items-center">
      <!-- Hidden span to calculate width -->
      <span class="invisible absolute whitespace-pre" #sizer [style.font]="getFont()">
        {{ value() || placeholder() }}
      </span>

      <!-- Actual input -->
      <input
        #input
        [type]="type()"
        [value]="value()"
        [placeholder]="placeholder()"
        [class]="inputClass()"
        [style.width.px]="width()"
        [min]="minWidth()"
        [max]="maxWidth()"
        [disabled]="disabled()"
        (input)="onInput($event)"
        (blur)="onBlur()"
      />
    </div>

    <br />
    width: {{ width() }}
    <br />
    sizerWidth: {{ sizerWidth() }}
    <br />
    maxWidth: {{ maxWidth() }}
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
      useExisting: forwardRef(() => ScAutoResizeInput),
      multi: true,
    },
  ],
})
export class ScAutoResizeInput implements ControlValueAccessor {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative inline-block', this.classInput()));

  readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');
  readonly sizer = viewChild.required<ElementRef<HTMLSpanElement>>('sizer');

  readonly type = input('text');
  readonly placeholder = input('');
  readonly minWidth = input(60);
  readonly maxWidth = input(500);
  readonly inputClass = input(
    'px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
  );

  readonly value = model('');

  protected readonly sizerWidth = signal(0);

  //TODO understand the meaning of 16, 24 worked better
  setSizerWidth(): void {
    this.sizerWidth.set(this.sizer().nativeElement.offsetWidth + 24);
  }

  // Adjust input width based on span content
  width = computed(() => {
    if (this.sizerWidth() <= this.minWidth()) {
      return this.minWidth();
    }

    return Math.min(this.sizerWidth(), this.maxWidth());
  });

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());

  constructor() {
    afterNextRender(() => {
      this.setSizerWidth();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: any = () => {};

  // Get computed font style of input for accurate width calculation
  getFont(): string {
    const inputValue = this.input();
    if (!inputValue?.nativeElement) return '';
    const computed = window.getComputedStyle(inputValue.nativeElement);
    return computed.font;
  }

  // Handle input event
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.setSizerWidth();
    this.onChange(this.value());
    this.changeDetectorRef.markForCheck();
  }

  onBlur(): void {
    this.onTouch();
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
