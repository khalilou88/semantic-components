import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAvatar, ScAvatarFallback } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-text',
  imports: [ScAvatar, ScAvatarFallback],
  template: `
    <sc-avatar
      class="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none"
    >
      <div class="flex size-full items-center justify-center text-base" sc-avatar-fallback>KL</div>
    </sc-avatar>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarText {}
