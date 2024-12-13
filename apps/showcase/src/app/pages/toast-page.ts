import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToast, ScToastExample } from '@semantic-components/ui';

@Component({
  selector: 'app-toast-page',
  imports: [ScToastExample],
  template: `
    <sc-toast-example />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {}
