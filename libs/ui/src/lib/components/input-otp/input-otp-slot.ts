import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '@semantic-components/utils';

import { InputOtpHandler } from './input-otp-handler';

@Component({
  selector: 'sc-input-otp-slot',
  imports: [ReactiveFormsModule],
  template: `
    @let control = formControl();
    @if (control !== null) {
      <input
        class="size-full border-0 bg-transparent text-center shadow-none outline-none ring-0"
        #input
        [formControl]="control"
        [readonly]="!isActive()"
        (keydown)="handleKeydown($event)"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        maxLength="1"
        size="1"
      />
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
  inputOtpHandler = inject(InputOtpHandler);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.isActive() && 'z-10 ring-2 ring-ring ring-offset-background',
      this.classInput(),
    ),
  );

  formControl = signal<FormControl | null>(null);
  index = 0;

  isActive = signal(false);

  readonly input = viewChild.required<HTMLInputElement>('input');

  protected handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.autoFocusPrev();
    } else {
      this.autoFocusNext();
    }
  }

  private autoFocusNext(): void {
    if (this.inputOtpHandler.inputIndex() < this.inputOtpHandler.length() - 1) {
      this.isActive.set(false);
      this.inputOtpHandler.inputIndex.update((index) => index + 1);
    }
  }

  private autoFocusPrev() {
    //TODO remove old data

    if (this.inputOtpHandler.inputIndex() > 0) {
      this.isActive.set(false);
      this.inputOtpHandler.inputIndex.update((index) => index - 1);
    }
  }
}
