import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
  computed,
  forwardRef,
  input,
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
        {{ value || placeholder }}
      </span>

      <!-- Actual input -->
      <input
        #input
        [type]="type"
        [value]="value"
        [placeholder]="placeholder"
        [class]="inputClass"
        [style.width.px]="width"
        [min]="minWidth"
        [max]="maxWidth"
        [disabled]="disabled"
        (input)="onInput($event)"
        (blur)="onBlur()"
      />
    </div>
  `,
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
export class ScAutoResizeInput implements AfterViewInit, ControlValueAccessor {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative inline-block', this.classInput()));

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('sizer') sizer!: ElementRef<HTMLSpanElement>;

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() minWidth = 60;
  @Input() maxWidth = 500;
  @Input() inputClass =
    'px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  value = '';
  width: number = this.minWidth;
  disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: any = () => {};

  ngAfterViewInit() {
    this.adjustWidth();
  }

  // Get computed font style of input for accurate width calculation
  getFont(): string {
    if (!this.input?.nativeElement) return '';
    const computed = window.getComputedStyle(this.input.nativeElement);
    return computed.font;
  }

  // Adjust input width based on content
  adjustWidth(): void {
    if (this.sizer?.nativeElement) {
      const newWidth = Math.max(
        this.minWidth,
        Math.min(this.sizer.nativeElement.offsetWidth + 16, this.maxWidth),
      );
      this.width = newWidth;
    }
  }

  // Handle input event
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.adjustWidth();
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouch();
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value = value;
    setTimeout(() => this.adjustWidth());
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
