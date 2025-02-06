import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'link',
    '[attr.href]': 'href()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLink extends ScButtonBase {
  //TODO just for test, remove it later
  readonly href = input<string>('javascript:void(0)');
}
