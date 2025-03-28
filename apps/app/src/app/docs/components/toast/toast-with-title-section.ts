import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastWithTitle } from './toast-with-title';

@Component({
  selector: 'app-toast-with-title-section',
  imports: [ToastWithTitle],
  template: `
    <app-toast-with-title />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithTitleSection {}
