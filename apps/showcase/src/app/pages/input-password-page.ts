import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInputPassword } from '@semantic-components/ui';

@Component({
  selector: 'app-input-password-page',
  imports: [ScInputPassword],
  template: `
    <sc-input-password />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPasswordPage {}
