import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  input,
} from '@angular/core';

declare let grecaptcha: any;

@Component({
  selector: 'sc-re-captcha-v3',
  imports: [],
  template: ``,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScReCaptchaV3 implements OnInit {
  readonly siteKey = input.required<string>();

  ngOnInit() {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey()}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    this.executeCaptcha();
  }

  executeCaptcha(): void {
    grecaptcha.ready(() => {
      grecaptcha.execute(this.siteKey, { action: 'submit' }).then((token: string) => {
        console.log('Generated token:', token);
        // Send the token to your backend for verification
      });
    });
  }
}
