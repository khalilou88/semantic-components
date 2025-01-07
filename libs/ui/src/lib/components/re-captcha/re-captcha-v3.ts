import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

import { ScButton } from '../button';

declare let grecaptcha: any;

@Component({
  selector: 'sc-re-captcha-v3',
  exportAs: 'scReCaptchaV3',
  imports: [ScButton],
  template: `
    <button (click)="execute()" sc-button>Test captcha</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScReCaptchaV3 implements OnInit {
  private readonly document = inject<Document>(DOCUMENT);

  readonly siteKey = input.required<string>();

  ngOnInit() {
    this.addScript();
  }

  private addScript() {
    const script = this.document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey()}`;
    script.async = true;
    script.defer = true;
    this.document.body.appendChild(script);
  }

  execute(): void {
    grecaptcha.ready(() => {
      grecaptcha.execute(this.siteKey(), { action: 'submit' }).then((token: string) => {
        console.log(token);
      });
    });
  }
}
