import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCookieIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

@Component({
  selector: 'sc-cookie-consent',
  imports: [SiCookieIcon, ScButton],
  template: `
    <div [class]="class()">
      <div class="m-3 rounded-lg border border-border bg-background dark:bg-card">
        <div class="flex items-center justify-between p-3">
          <h1 class="text-lg font-medium">We use cookies</h1>
          <svg class="size-[1.2rem]" si-cookie-icon></svg>
        </div>
        <div class="-mt-2 p-3">
          <p class="text-left text-sm text-muted-foreground">
            We use cookies to ensure you get the best experience on our website. For more
            information on how we use cookies, please see our cookie policy.
          </p>
        </div>
        <div class="mt-2 flex items-center gap-2 border-t p-3">
          <button class="h-9 w-full rounded-full" (click)="accept()" sc-button>accept</button>
          <button class="h-9 w-full rounded-full" (click)="decline()" sc-button variant="outline">
            decline
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCookieConsent {
  open = signal(true);

  hidden = signal(false);

  class = signal(
    cn(
      'fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700',
      !this.open()
        ? 'transition-[opacity,transform] translate-y-8 opacity-0'
        : 'transition-[opacity,transform] translate-y-0 opacity-100',
      this.hidden() && 'hidden',
    ),
  );

  accept() {
    console.log('accept');
  }

  decline() {
    console.log('decline');
  }
}
