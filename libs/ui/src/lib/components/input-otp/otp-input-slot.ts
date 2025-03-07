import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'sc-otp-input-slot',
  imports: [],
  template: `
    <input
      class="w-10 h-12 border border-gray-300 rounded text-center text-lg font-bold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      #inputRef
      [value]="value"
      (input)="onInput($event)"
      (keydown)="onKeyDown($event)"
      (paste)="onPaste($event)"
      type="text"
      maxlength="1"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInputSlot {
  readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
  @Output() valueChange = new EventEmitter<string>();
  @Output() backspace = new EventEmitter<void>();
  @Output() paste = new EventEmitter<string>();

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

  // Public methods
  public focus() {
    this.inputRef().nativeElement.focus();
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
