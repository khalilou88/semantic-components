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
      [value]="value()"
      (input)="onInput($event)"
      (keydown)="onKeyDown($event)"
      (paste)="onPaste($event)"
      (blur)="onBlur()"
      type="text"
      maxlength="2"
    />

    @if (showFakeCaret()) {
      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div class="h-4 w-px animate-caret-blink bg-foreground duration-1000"></div>
      </div>
    }
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
      'relative',
      'caret-transparent',
      'flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.isActive() && 'ring-2 ring-ring ring-offset-background',
      this.classInput(),
    ),
  );

  showFakeCaret = computed(() => this.isActive() && !this.value());

  isActive = signal(false);

  disabled = signal(false);

  readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
  readonly valueChange = output<string>();
  readonly backspace = output<void>();
  readonly paste = output<string>();

  readonly value = signal('');

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Ensure only digits, letters, or empty values
    const sanitizedValue = input.value.replace(/[^a-zA-Z0-9]/g, '').slice(-1); // Keep only the last entered character
    input.value = sanitizedValue;

    this.value.set(sanitizedValue);
    this.valueChange.emit(this.value());
  }

  onKeyDown(event: KeyboardEvent) {
    // Handle backspace key when input is empty
    if (event.key === 'Backspace' && !this.value()) {
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
    this.value.set(firstChar);
    this.inputRef().nativeElement.value = firstChar;

    // Emit the remaining characters for potential distribution to other inputs
    if (sanitizedText.length > 1) {
      this.paste.emit(sanitizedText.substring(1));
    }
  }

  onBlur() {
    this.isActive.set(false);
  }

  // Public methods
  public focus() {
    if (!this.disabled()) {
      this.inputRef().nativeElement.focus();
    }
  }
}
