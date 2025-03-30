import { Directive, ElementRef, effect, forwardRef, inject, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaBase } from './re-captcha-base';

@Directive({
  selector: 'div[sc-checkbox-re-captcha]',
  exportAs: 'scCheckboxReCaptcha',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCheckboxReCaptcha),
      multi: true,
    },
  ],
})
export class ScCheckboxReCaptcha extends ScReCaptchaBase implements ControlValueAccessor {
  private readonly host = inject(ElementRef);

  readonly theme = input<'dark' | 'light'>('light');

  readonly size = input<'normal' | 'compact'>('normal');

  override render() {
    this.renderWidget('theme', this.theme(), this.size());
  }

  private isFirstRun = true;

  constructor() {
    super();

    effect(() => {
      this.updateRecaptchaTheme(this.theme());
    });
  }

  updateRecaptchaTheme(newTheme: 'dark' | 'light') {
    if (this.isFirstRun) {
      this.isFirstRun = false;
      return;
    }

    // Find the reCAPTCHA iframe
    const recaptchaFrame = this.host.nativeElement.querySelector(
      'iframe[src*="recaptcha"]',
    ) as HTMLIFrameElement;

    if (recaptchaFrame) {
      // Get the iframe URL
      let frameSource = recaptchaFrame.src;

      // Replace the theme parameter in the URL
      if (frameSource.includes('theme=')) {
        frameSource = frameSource.replace(/theme=(light|dark)/, `theme=${newTheme}`);
      } else {
        frameSource += `&theme=${newTheme}`;
      }

      // Update the iframe source
      recaptchaFrame.src = frameSource;
    }
  }
}
