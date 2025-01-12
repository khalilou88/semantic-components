import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  forwardRef,
  input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaBase } from './re-captcha-base';

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

  override render() {
    this.renderWidget('theme', this.theme(), this.size());
  }
}
