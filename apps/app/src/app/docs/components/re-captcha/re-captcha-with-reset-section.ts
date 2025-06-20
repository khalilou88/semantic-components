import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ReCaptchaWithReset } from './re-captcha-with-reset';

@Component({
  selector: 'app-re-captcha-with-reset-section',
  imports: [PreviewCodeTabs, ReCaptchaWithReset],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-re-captcha-with-reset />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReCaptchaWithResetSection {
  readonly title = input<string>('reCaptcha with Reset');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
