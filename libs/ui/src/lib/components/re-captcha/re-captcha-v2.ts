import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sc-re-captcha-v2',
  imports: [],
  template: `
    <div
      class="g-recaptcha"
      [attr.data-sitekey]="siteKey()"
      [attr.data-theme]="theme()"
      [attr.data-size]="size()"
      [attr.data-tabindex]="tabindex()"
      data-callback="gReCaptchaCallback"
      data-expired-callback="gReCaptchaExpiredCallback"
      data-error-callback="gReCaptchaErrorCallback"
    ></div>
  `,
  styles: ``,
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
  private readonly document = inject<Document>(DOCUMENT);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly siteKey = input.required<string>();
  readonly theme = input<'dark' | 'light'>('light');
  readonly size = input<'normal' | 'compact'>('normal');
  readonly tabindex = input<string>('0');
  readonly languageCode = input<string>('');
  private readonly value = signal<string | null>(null);
  private readonly disabledByCva = signal(false);

  ngOnInit() {
    this.registerReCaptchaCallbacks();
    this.addScript();
  }

  private addScript() {
    const script = this.document.createElement('script');
    const hl = this.languageCode() ? `hl=${this.languageCode()}` : '';
    script.src = `https://www.google.com/recaptcha/api.js?${hl}`;
    script.async = true;
    script.defer = true;
    this.document.body.appendChild(script);
  }

  registerReCaptchaCallbacks() {
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
