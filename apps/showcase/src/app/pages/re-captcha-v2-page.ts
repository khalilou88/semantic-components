import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ScCheckboxReCaptcha,
  ScInvisibleReCaptcha,
  ScReCaptcha,
} from '@semantic-components/re-captcha';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScCheckboxReCaptcha, ScInvisibleReCaptcha, JsonPipe, ScButton],
  template: `
    <div class="m-10">
      <form [formGroup]="reCaptchaV2Form">
        <div [siteKey]="siteKey" sc-checkbox-re-captcha formControlName="captcha"></div>
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
      <div [siteKey]="siteKey" [callback]="myCallback" sc-checkbox-re-captcha></div>
    </div>

    <br />
    <br />
    <br />
    <div class="m-10">
      <form id="demo-form" action="?" method="POST">
        <button
          [siteKey]="invisibleReCaptchaV2SiteKey"
          [callback]="myCallback"
          sc-invisible-re-captcha
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
        #invisibleReCaptcha="scInvisibleReCaptcha"
        [siteKey]="invisibleReCaptchaV2SiteKey"
        [callback]="myCallback"
        sc-invisible-re-captcha
      ></div>

      <button (click)="invisibleReCaptcha.execute()" sc-button>Execute</button>

      <br />
      <br />

      <button (click)="invisibleReCaptcha.reset()" sc-button>Reset</button>
    </div>

    <br />
    <br />
    <br />

    <div [siteKey]="siteKey" [callback]="myCallback" sc-checkbox-re-captcha theme="dark"></div>

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

  private readonly scReCaptcha = inject(ScReCaptcha);

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  async executeReCaptcha() {
    const token = await this.scReCaptcha.execute('submit');
    console.log('Token:', token);
  }

  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };
}
