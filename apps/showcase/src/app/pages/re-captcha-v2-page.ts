import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScReCaptchaV2 } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScReCaptchaV2, JsonPipe],
  template: `
    <div class="m-10">
      <form [formGroup]="reCaptchaV2Form">
        <sc-re-captcha-v2 [siteKey]="siteKey" formControlName="captcha" />
      </form>
    </div>

    <br />
    <br />
    <br />

    {{ reCaptchaV2Form.value | json }}

    <br />
    <br />
    <br />

    <sc-re-captcha-v2 [siteKey]="siteKey" (valueChange)="doSomething($event)" />
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

  doSomething(event: any) {
    console.log('valueChange');
    console.log(event);
  }
}
