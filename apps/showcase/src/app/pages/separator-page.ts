import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSeparator } from '@semantic-components/ui';

@Component({
  selector: 'app-separator-page',
  imports: [ScSeparator],
  template: `
    <div class="m-10">
      <sc-separator />

      <br />
      <br />
      <br />

      <div class="h-[50px]">
        <sc-separator orientation="vertical" />
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SeparatorPage {}
