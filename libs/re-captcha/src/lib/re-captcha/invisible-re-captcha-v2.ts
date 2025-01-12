import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SC_INVISIBLE_RE_CAPTCHA_SITE_KEY } from './re-captcha-config';
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
  private readonly hostRef = inject(ElementRef);

  readonly badge = input<'bottomright' | 'bottomleft' | 'inline'>('bottomright');

  private readonly size = signal<'invisible'>('invisible');

  private readonly invisibleReCaptchaSiteKey = inject<string>(SC_INVISIBLE_RE_CAPTCHA_SITE_KEY, {
    optional: true,
  });
  readonly siteKeyInput = input<string>('', {
    alias: 'siteKey',
  });

  private readonly siteKey = computed(() => {
    if (this.siteKeyInput()) {
      return this.siteKeyInput();
    }

    return this.invisibleReCaptchaSiteKey ?? '';
  });

  override render() {
    this.renderWidget(this.siteKey(), 'badge', this.badge(), this.size());
  }

  execute() {
    grecaptcha.execute(this.widgetId);
  }
}
