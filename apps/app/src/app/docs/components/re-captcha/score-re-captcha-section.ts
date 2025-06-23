import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ScoreReCaptcha } from './score-re-captcha';

@Component({
  selector: 'app-score-re-captcha-section',
  imports: [PreviewCodeTabs, ScoreReCaptcha],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-score-re-captcha />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreReCaptchaSection {
  readonly title = input<string>('Score reCAPTCHA');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = ``;
}
