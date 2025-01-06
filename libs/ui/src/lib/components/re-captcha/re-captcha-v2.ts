import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-re-captcha-v2',
  imports: [],
  template: `
    <div
      class="g-recaptcha"
      [attr.data-sitekey]="siteKey()"
      (ngModelChange)="onCaptchaChange($event)"
    ></div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScReCaptchaV2 implements OnInit {
  readonly siteKey = input.required<string>();

  languageCode = input.required<string>();

  //TODO
  captchaResponse: string | null = null;

  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  onCaptchaChange(response: any): void {
    this.captchaResponse = response;
    console.log('Captcha response:', response);
  }
}
