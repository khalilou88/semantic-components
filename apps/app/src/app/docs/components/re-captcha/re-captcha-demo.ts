import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';

import { ScCheckboxReCaptcha } from '@semantic-components/re-captcha';
import { ScTheme } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-demo',
  imports: [ScCheckboxReCaptcha],
  template: `
    <div [siteKey]="siteKey" [theme]="theme()" sc-checkbox-re-captcha></div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReCaptchaDemo {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';

  private readonly themeService = inject(ScTheme);

  readonly theme = computed<'light' | 'dark'>(() => {
    return this.themeService.theme();
  });
}
