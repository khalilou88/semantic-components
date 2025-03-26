import { Directive, ElementRef, forwardRef, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class ScInvisibleReCaptcha extends ScReCaptchaBase implements ControlValueAccessor {
  private readonly hostRef = inject(ElementRef);

  readonly badge = input<'bottomright' | 'bottomleft' | 'inline'>('bottomright');

  private readonly size = signal<'invisible'>('invisible');

  override render() {
    this.renderWidget('badge', this.badge(), this.size());
  }

  execute() {
    grecaptcha.execute(this.widgetId);
  }
}
