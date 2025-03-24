import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AvatarBaseUiSection } from './avatar-base-ui-section';
import { AvatarDemoSection } from './avatar-demo-section';
import { AvatarTextSection } from './avatar-text-section';

@Component({
  selector: 'app-avatar-page',
  imports: [AvatarDemoSection, AvatarBaseUiSection, AvatarTextSection],
  template: `
    <app-avatar-demo-section />

    <app-avatar-base-ui-section />

    <app-avatar-text-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
