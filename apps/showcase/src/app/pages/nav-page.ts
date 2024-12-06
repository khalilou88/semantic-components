import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NavComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  imports: [NavComponent],
  template: `
    <sc-nav />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavPage {}
