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
  id = signal<string>(inject(_IdGenerator).getId('sc-re-captcha-v2-'));
  private readonly document = inject<Document>(DOCUMENT);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly siteKey = input.required<string>();
  readonly theme = input<'dark' | 'light'>('light');
  readonly size = input<'normal' | 'compact'>('normal');
  readonly tabindex = input<string>('0');
  private readonly disabledByCva = signal(false);

  //TODO use this variable
  private widgetId = '';

  static loadded = false;

  //TODO: maybe change the name to token or response
  //this is useful to use ScReCaptchaV2 without form, and listen to the value changes with (valueChange)="doSomething($event)"
  readonly value = model<string | null>(null);

  constructor(@Inject(SC_RE_CAPTCHA_V2_LANGUAGE_CODE) private readonly languageCode: string) {}

  ngOnInit() {
    this.registerReCaptchaCallbacks();
    this.addScript();
  }

  //languageCode should be global
  private addScript() {
    if (ScReCaptchaV2.loadded === false) {
      let scriptSrc =
        'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';

      if (this.languageCode) {
        scriptSrc += `&hl=${this.languageCode}`;
      }

      const script = this.document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      this.document.body.appendChild(script);
    }

    ScReCaptchaV2.loadded = true;
  }

  private registerReCaptchaCallbacks() {
    (window as any).onloadCallback = () => {
      this.widgetId = grecaptcha.render(this.id(), {
        sitekey: this.siteKey(),
        theme: this.theme(),
        size: this.size(),
        tabindex: this.tabindex(),
        callback: 'gReCaptchaCallback',
        'expired-callback': 'gReCaptchaExpiredCallback',
        'error-callback': 'gReCaptchaErrorCallback',
      });
    };

    (window as any).gReCaptchaCallback = (token: string) => {
      this.setValue(token);
    };

    (window as any).gReCaptchaExpiredCallback = () => {
      this.setValue(null);
    };

    (window as any).gReCaptchaErrorCallback = () => {
      this.setValue(null);
      console.error('error');
    };
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
