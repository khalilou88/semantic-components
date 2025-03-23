import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AvatarBaseUi } from './avatar-base-ui';

@Component({
  selector: 'app-avatar-base-ui-section',
  imports: [AvatarBaseUi],
  template: `
    <app-avatar-base-ui />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarBaseUiSection {}
