import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

declare let grecaptcha: any;

@Component({
  selector: 'sc-re-captcha-v3',
  imports: [],
  template: ``,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScReCaptchaV3 implements OnInit, ControlValueAccessor {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly siteKey = input.required<string>();

  private readonly value = signal<string | null>(null);
  private readonly _disabledByCva = signal(false);

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
    this._disabledByCva.set(isDisabled);
  }
}
