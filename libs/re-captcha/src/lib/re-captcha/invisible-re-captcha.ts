import { Directive, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaBase } from './re-captcha-base';

declare let grecaptcha: any;

@Directive({
  selector: 'div[sc-invisible-re-captcha], button[sc-invisible-re-captcha]',
  exportAs: 'scInvisibleReCaptcha',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScInvisibleReCaptcha),
      multi: true,
    },
  ],
})
export class ScInvisibleReCaptcha extends ScReCaptchaBase {
  readonly badge = input<'bottomright' | 'bottomleft' | 'inline'>('bottomright');

  override render() {
    this.renderWidget('badge', this.badge(), 'invisible');
  }

  execute() {
    grecaptcha.execute(this.widgetId);
  }
}
