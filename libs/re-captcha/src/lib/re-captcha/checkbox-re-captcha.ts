import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaBase } from './re-captcha-base';
import { SC_CHECKBOX_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';

@Component({
  selector: 'div[sc-checkbox-re-captcha]',
  exportAs: 'scCheckboxReCaptcha',
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
      useExisting: forwardRef(() => ScCheckboxReCaptcha),
      multi: true,
    },
  ],
})
export class ScCheckboxReCaptcha extends ScReCaptchaBase implements ControlValueAccessor {
  readonly theme = input<'dark' | 'light'>('light');

  readonly size = input<'normal' | 'compact'>('normal');

  private readonly checkboxReCaptchaSiteKey = inject<string>(SC_CHECKBOX_RE_CAPTCHA_SITE_KEY, {
    optional: true,
  });
  readonly siteKeyInput = input<string>('', {
    alias: 'siteKey',
  });

  private readonly siteKey = computed(() => {
    if (this.siteKeyInput()) {
      return this.siteKeyInput();
    }

    return this.checkboxReCaptchaSiteKey ?? '';
  });

  override render() {
    this.renderWidget(this.siteKey(), 'theme', this.theme(), this.size());
  }
}