import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastWithAction } from './toast-with-action';

@Component({
  selector: 'app-toast-with-action-section',
  imports: [ToastWithAction],
  template: `
    <app-toast-with-action />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithActionSection {}
