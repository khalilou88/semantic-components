import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAvatar, ScAvatarFallback, ScAvatarImage } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-demo',
  imports: [ScAvatar, ScAvatarImage, ScAvatarFallback],
  template: `
    <sc-avatar>
      <img src="https://github.com/shadcn.png" alt="@shadcn" sc-avatar-image />
      <div sc-avatar-fallback>CN</div>
    </sc-avatar>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemo {}
