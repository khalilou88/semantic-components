import { _IdGenerator } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  InjectionToken,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare let grecaptcha: any;

export const SC_RE_CAPTCHA_V2_LANGUAGE_CODE = new InjectionToken<string>(
  'SC_RE_CAPTCHA_V2_LANGUAGE_CODE',
);

@Component({
  selector: 'sc-re-captcha-v2',
  exportAs: 'scReCaptchaV2',
  imports: [],
  template: ``,
  styles: ``,
  host: {
    '[id]': 'id()',
  },
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
export class ScReCaptchaV2 implements OnInit, ControlValueAccessor {
  protected id = signal<string>(inject(_IdGenerator).getId('sc-re-captcha-v2-'));
  private readonly document = inject<Document>(DOCUMENT);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly siteKey = input.required<string>();
  readonly theme = input<'dark' | 'light'>('light');
  readonly size = input<'normal' | 'compact'>('normal');
  readonly tabindex = input<string>('0');
  private readonly disabledByCva = signal(false);

  private widgetId = '';
  static scReCaptchaV2s: ScReCaptchaV2[] = [];
  static loadded = false;

  //TODO: maybe change the name to token or response
  //this is useful to use ScReCaptchaV2 without form, and listen to the value changes with (valueChange)="doSomething($event)"
  readonly value = model<string | null>(null);

  constructor(@Inject(SC_RE_CAPTCHA_V2_LANGUAGE_CODE) private readonly languageCode: string) {}

  ngOnInit() {
    ScReCaptchaV2.scReCaptchaV2s.push(this);
    if (ScReCaptchaV2.loadded === false) {
      this.registerOnloadCallback();
      this.addScript();
    }

    ScReCaptchaV2.loadded = true;
  }

  private addScript() {
    let scriptSrc = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';

    if (this.languageCode) {
      scriptSrc += `&hl=${this.languageCode}`;
    }

    const script = this.document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    this.document.body.appendChild(script);
  }

  private registerOnloadCallback() {
    (window as any).onloadCallback = () => {
      for (const scReCaptchaV2 of ScReCaptchaV2.scReCaptchaV2s) {
        scReCaptchaV2.renderWidget();
      }
    };
  }

  renderWidget() {
    this.widgetId = grecaptcha.render(this.id(), {
      sitekey: this.siteKey(),
      theme: this.theme(),
      size: this.size(),
      tabindex: this.tabindex(),
      callback: this.callback.bind(this),
      'expired-callback': this.expiredCallback.bind(this),
      'error-callback': this.errorCallback.bind(this),
    });
  }

  callback(token: string) {
    this.setValue(token);
  }

  expiredCallback() {
    this.setValue(null);
  }

  errorCallback() {
    console.error('error');
    this.setValue(null);
  }

  //TODO: maybe we need this function
  getResponse() {
    grecaptcha.getResponse(this.widgetId);
  }

  //TODO: maybe we need this function too
  reset() {
    grecaptcha.reset(this.widgetId);
  }

  setValue(newValue: string | null) {
    this.value.set(newValue);
    this.onChange(newValue);
    this.changeDetectorRef.markForCheck();
  }

  writeValue(obj: any): void {
    this.value.set(obj);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledByCva.set(isDisabled);
  }
}
