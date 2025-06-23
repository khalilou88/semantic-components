import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScInvisibleReCaptcha } from '@semantic-components/re-captcha';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-invisible-re-captcha',
  imports: [ScInvisibleReCaptcha, ScButton],
  template: `
    <button [callback]="myCallback" sc-invisible-re-captcha sc-button>
      Execute Invisible reCAPTCHA
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvisibleReCaptcha {
  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };
}
