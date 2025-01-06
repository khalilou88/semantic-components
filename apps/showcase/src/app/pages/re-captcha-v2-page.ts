import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScReCaptchaV2 } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScReCaptchaV2],
  template: `
    <div class="m-10">
      <form [formGroup]="reCaptchaV2Form">
        <sc-re-captcha-v2 formControlName="captcha" siteKey="siteKey" languageCode="" />
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV2Page {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });
}
