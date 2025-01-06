import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScReCaptchaV3 } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v3-page',
  imports: [ReactiveFormsModule, ScReCaptchaV3],
  template: `
    <div class="m-10">
      <form [formGroup]="reCaptchaV3Form">
        <sc-re-captcha-v3 [siteKey]="siteKey" formControlName="captcha" />
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV3Page {
  siteKey = '';

  reCaptchaV3Form = new FormGroup({
    captcha: new FormControl(''),
  });
}
