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

import { ScButton } from '../button';

declare let grecaptcha: any;

@Component({
  selector: 'sc-re-captcha-v3',
  imports: [ScButton],
  template: `
    <button (click)="executeCaptcha()" sc-button>Test captcha</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScReCaptchaV3),
      multi: true,
    },
  ],
})
export class ScReCaptchaV3 implements OnInit, ControlValueAccessor {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly siteKey = input.required<string>();

  private readonly value = signal<string | null>(null);
  private readonly disabledByCva = signal(false);

  ngOnInit() {
    this.addScript();
    //this.executeCaptcha();
  }

  private addScript() {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey()}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  executeCaptcha(): void {
    grecaptcha.ready(() => {
      grecaptcha.execute(this.siteKey, { action: 'submit' }).then((token: string) => {
        this.setValue(token);
      });
    });
  }

  setValue(newValue: string) {
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
