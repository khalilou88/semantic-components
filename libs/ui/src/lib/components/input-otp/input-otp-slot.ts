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

import { cn } from '../../utils';
import { InputOtpHandler } from './input-otp-handler';

@Component({
  selector: 'sc-input-otp-slot',
  imports: [ReactiveFormsModule],
  template: `
    @let control = formControl();
    @if (control !== null) {
      <input
        class="w-full h-full shadow-none ring-0 border-0 outline-none text-center bg-transparent"
        #input
        [formControl]="control"
        [readonly]="!isActive()"
        (input)="_handleInput()"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        maxLength="1"
        size="1"
      />
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOTPSlot {
  inputOtpHandler = inject(InputOtpHandler);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.isActive() && 'z-10 ring-2 ring-ring ring-offset-background',
      this.class(),
    ),
  );

  formControl = signal<FormControl | null>(null);
  index = 0;

  isActive = signal(false);

  readonly input = viewChild.required<HTMLInputElement>('input');

  _handleInput(): void {
    this.inputOtpHandler.inputIndex.set(this.index);
  }
}
