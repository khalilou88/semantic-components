import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AvatarDemo } from './avatar-demo';

@Component({
  selector: 'app-avatar-demo-section',
  imports: [AvatarDemo],
  template: `
    <app-avatar-demo />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemoSection {}
