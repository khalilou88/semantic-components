import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastDestructive } from './toast-destructive';

@Component({
  selector: 'app-toast-destructive-section',
  imports: [ToastDestructive],
  template: `
    <app-toast-destructive />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDestructiveSection {}
