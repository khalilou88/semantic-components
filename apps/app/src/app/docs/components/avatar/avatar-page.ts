import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AvatarDemoSection } from './avatar-demo-section';

@Component({
  selector: 'app-avatar-page',
  imports: [AvatarDemoSection],
  template: `
    <app-avatar-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
