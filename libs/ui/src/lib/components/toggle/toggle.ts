import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToggleBase } from './toggle-base';

@Component({
  selector: 'button[sc-toggle]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToggle extends ScToggleBase {}
