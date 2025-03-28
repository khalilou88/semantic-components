import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastDemoSection } from './toast-demo-section';

@Component({
  selector: 'app-toast-page',
  imports: [ToastDemoSection],
  template: `
    <app-toast-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {}
