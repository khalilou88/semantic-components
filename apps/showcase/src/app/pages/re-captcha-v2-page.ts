import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ScInvisibleReCaptchaV2,
  ScReCaptchaV2,
  ScReCaptchaV3,
} from '@semantic-components/re-captcha';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScReCaptchaV2, ScInvisibleReCaptchaV2, JsonPipe, ScButton],
  template: `
    <div class="m-10">
      <form [formGroup]="reCaptchaV2Form">
        <div [siteKey]="siteKey" sc-re-captcha-v2 formControlName="captcha"></div>
      </form>
    </div>

    <br />
    <br />
    <br />

    {{ reCaptchaV2Form.value | json }}

    <br />
    <br />
    <br />
    callback function
    <div class="m-10">
      <div [siteKey]="siteKey" [callback]="myCallback" sc-re-captcha-v2></div>
    </div>

    <br />
    <br />
    <br />
    <div class="m-10">
      <form id="demo-form" action="?" method="POST">
        <button
          [siteKey]="invisibleReCaptchaV2SiteKey"
          [callback]="myCallback"
          sc-invisible-re-captcha-v2
        >
          Click me to execute Invisible reCAPTCHA
        </button>
      </form>
    </div>

    <br />
    <br />
    <br />
    <div class="m-10">
      Invisible reCAPTCHA DIV
      <div
        #invisibleReCaptchaV2="scInvisibleReCaptchaV2"
        [siteKey]="invisibleReCaptchaV2SiteKey"
        [callback]="myCallback"
        sc-invisible-re-captcha-v2
      ></div>

      <button (click)="invisibleReCaptchaV2.execute()" sc-button>Execute</button>

      <br />
      <br />

      <button (click)="invisibleReCaptchaV2.reset()" sc-button>Reset</button>
    </div>

    <br />
    <br />
    <br />

    <div [siteKey]="siteKey" [callback]="myCallback" sc-re-captcha-v2 theme="dark"></div>

    <br />
    <br />
    <br />
    <div class="m-10">
      <button (click)="executeReCaptcha()" sc-button>Test captcha</button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV2Page {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';

  invisibleReCaptchaV2SiteKey = '6Ldl1bQqAAAAANUJsycemVBh6pMXSYAQeOIZyfV2';

  private readonly scReCaptchaV3 = inject(ScReCaptchaV3);

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  async executeReCaptcha() {
    const token = await this.scReCaptchaV3.execute('submit');
    console.log('Token:', token);
  }

  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };
}
