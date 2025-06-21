import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  viewChild,
} from '@angular/core';

import { ScCheckboxReCaptcha } from '@semantic-components/re-captcha';
import { ScButton, ScTheme } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-with-reset',
  imports: [ScCheckboxReCaptcha, ScButton],
  template: `
    <button class="mb-5" (click)="reset()" sc-button>Reset reCAPTCHA</button>

    <div [siteKey]="siteKey" [theme]="theme()" sc-checkbox-re-captcha></div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReCaptchaWithReset {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';

  private readonly themeService = inject(ScTheme);

  readonly theme = computed<'light' | 'dark'>(() => {
    return this.themeService.theme();
  });

  private readonly scCheckboxReCaptchaRef = viewChild.required(ScCheckboxReCaptcha);

  reset() {
    this.scCheckboxReCaptchaRef().reset();
  }
}
