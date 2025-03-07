import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-input-otp-slot',
  imports: [],
  template: `
    <input
      class="size-full border-0 bg-transparent text-center shadow-none outline-none ring-0"
      #inputRef
      [disabled]="disabled()"
      [readonly]="!isActive()"
      [value]="value"
      (input)="onInput($event)"
      (keydown)="onKeyDown($event)"
      (paste)="onPaste($event)"
      (focus)="onFocus()"
      (blur)="onBlur()"
      type="text"
      maxlength="1"
    />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOTPSlot {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.isActive() && 'ring-2 ring-ring ring-offset-background',
      this.classInput(),
    ),
  );

  isActive = signal(false);

  disabled = signal(false);

  readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
  readonly valueChange = output<string>();
  readonly backspace = output<void>();
  readonly paste = output<string>();

  private _value = '';

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Ensure only digits, letters, or empty values
    const sanitizedValue = input.value.replace(/[^a-zA-Z0-9]/g, '');
    input.value = sanitizedValue;

    this.value = sanitizedValue;
  }

  onKeyDown(event: KeyboardEvent) {
    // Handle backspace key when input is empty
    if (event.key === 'Backspace' && !this.value) {
      event.preventDefault();
      this.backspace.emit();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();

    // Get pasted content and clean it
    const clipboardData = event.clipboardData;
    if (!clipboardData) return;

    const pastedText = clipboardData.getData('text');
    if (!pastedText) return;

    // Clean the pasted text to only include alphanumeric characters
    const sanitizedText = pastedText.replace(/[^a-zA-Z0-9]/g, '');

    // Set the first character in this input
    const firstChar = sanitizedText.charAt(0);
    this.value = firstChar;
    this.inputRef().nativeElement.value = firstChar;

    // Emit the remaining characters for potential distribution to other inputs
    if (sanitizedText.length > 1) {
      this.paste.emit(sanitizedText.substring(1));
    }
  }

  onFocus() {
    this.isActive.set(true);
  }

  onBlur() {
    this.isActive.set(false);
  }

  // Public methods
  public focus() {
    if (!this.disabled()) {
      this.inputRef().nativeElement.focus();
      this.isActive.set(true);
    }
  }
  public clear() {
    this.value = '';
    this.inputRef().nativeElement.value = '';
  }

  public setValue(val: string) {
    this.value = val;
    this.inputRef().nativeElement.value = val;
  }
}
