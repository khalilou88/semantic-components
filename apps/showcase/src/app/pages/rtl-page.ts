import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRTL } from '@semantic-components/experimental';

@Component({
  selector: 'app-rtl-page',
  imports: [ScRTL],
  template: `
    <sc-rtl />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RtlPage {}
