import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '../../utils';

@Component({
  selector: 'sc-input-otp-slot',
  imports: [ReactiveFormsModule],
  template: `
    @let control = formControl();
    @if (control !== null) {
      <input class="w-full h-full" [formControl]="control" type="text" inputmode="numeric" />
    }

    <!--div
      class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
      [ngClass]="{ 'z-10 ring-2 ring-ring ring-offset-background': isActive }"
    >
      @if (hasFakeCaret) {
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px animate-caret-blink bg-foreground duration-1000"></div>
        </div>
      }
    </div-->
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOTPSlot {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.class(),
    ),
  );

  formControl = signal<FormControl | null>(null);

  isActive = false;

  hasFakeCaret = false;
}
