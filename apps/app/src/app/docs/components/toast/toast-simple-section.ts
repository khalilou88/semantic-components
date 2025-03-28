import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastSimple } from './toast-simple';

@Component({
  selector: 'app-toast-simple-section',
  imports: [ToastSimple],
  template: `
    <app-toast-simple />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastSimpleSection {}
