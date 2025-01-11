import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScReCaptchaV2, ScReCaptchaV3 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScReCaptchaV2, JsonPipe],
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

    <div
      [siteKey]="siteKey"
      (valueChange)="doSomething($event)"
      sc-re-captcha-v2
      theme="dark"
    ></div>

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

  private readonly scReCaptchaV3 = inject(ScReCaptchaV3);

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  doSomething(event: any) {
    console.log('valueChange');
    console.log(event);
  }

  async executeReCaptcha() {
    const token = await this.scReCaptchaV3.execute('submit');
    console.log('Token:', token);
  }
}
