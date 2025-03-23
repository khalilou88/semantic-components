import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AvatarBaseUiSection } from './avatar-base-ui-section';
import { AvatarDemoSection } from './avatar-demo-section';

@Component({
  selector: 'app-avatar-page',
  imports: [AvatarDemoSection, AvatarBaseUiSection],
  template: `
    <app-avatar-demo-section />

    <app-avatar-base-ui-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
