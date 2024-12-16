import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-input-otp-slot',
  imports: [NgClass],
  template: `
    <div
      class="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
      [ngClass]="{ 'z-10 ring-2 ring-ring ring-offset-background': isActive }"
    >
      @if (hasFakeCaret) {
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px animate-caret-blink bg-foreground duration-1000"></div>
        </div>
      }
    </div>
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

  classes = computed(() => cn('', this.class()));

  index = signal<number>(-1);

  isActive = false;

  hasFakeCaret = false;
}
