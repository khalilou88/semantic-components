import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { InvisibleReCaptcha } from './invisible-re-captcha';

@Component({
  selector: 'app-invisible-re-captcha-section',
  imports: [PreviewCodeTabs, InvisibleReCaptcha],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-invisible-re-captcha />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvisibleReCaptchaSection {
  readonly title = input<string>('Invisible reCAPTCHA');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
