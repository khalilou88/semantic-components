import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCommand } from '@semantic-components/ui';

@Component({
  selector: 'app-command-page',
  imports: [ScCommand],
  template: `
    <p>command-page works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandPage {}
