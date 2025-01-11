import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  forwardRef,
  input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaV2Base } from './re-captcha-v2-base';

declare let grecaptcha: any;

@Component({
  selector: 'div[sc-re-captcha-v2]',
  exportAs: 'scReCaptchaV2',
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
      useExisting: forwardRef(() => ScReCaptchaV2),
      multi: true,
    },
  ],
})
export class ScReCaptchaV2 extends ScReCaptchaV2Base implements ControlValueAccessor {
  readonly theme = input<'dark' | 'light'>('light');

  readonly size = input<'normal' | 'compact'>('normal');

  override renderWidget() {
    this.renderWidget2('theme', this.theme(), this.size());
  }
}
