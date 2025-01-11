import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaV2Base } from './re-captcha-v2-base';

declare let grecaptcha: any;

@Component({
  selector: 'div[sc-invisible-re-captcha-v2], button[sc-invisible-re-captcha-v2]',
  exportAs: 'scInvisibleReCaptchaV2',
  imports: [],
  template: `
    <ng-content />
  `,
  styles: ``,
  host: {},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScInvisibleReCaptchaV2),
      multi: true,
    },
  ],
})
export class ScInvisibleReCaptchaV2 extends ScReCaptchaV2Base implements ControlValueAccessor {
  readonly badge = input<'bottomright' | 'bottomleft' | 'inline'>('bottomright');

  private readonly size = signal<'invisible'>('invisible');

  override renderWidget() {
    this.widgetId = grecaptcha.render(this.id(), {
      sitekey: this.siteKey(),
      badge: this.badge(),
      size: this.size(),
      tabindex: this.tabindex(),
      callback: this.callback() ? this.callback() : this.defaultCallback.bind(this),
      'expired-callback': this.expiredCallback()
        ? this.expiredCallback()
        : this.defaultExpiredCallback.bind(this),
      'error-callback': this.errorCallback()
        ? this.errorCallback()
        : this.defaultErrorCallback.bind(this),
    });
  }
}
