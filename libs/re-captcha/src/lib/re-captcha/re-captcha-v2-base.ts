import { _IdGenerator } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Directive, inject, input, model, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { ScReCaptchaService } from './sc-re-captcha.service';

declare let grecaptcha: any;

type CallbackFunction = (token: string) => void;
type ExpiredCallbackFunction = () => void;
type ErrorCallbackFunction = () => void;

@Directive({
  host: {
    '[id]': 'id()',
  },
})
export class ScReCaptchaV2Base implements ControlValueAccessor {
  protected id = signal<string>(inject(_IdGenerator).getId('sc-re-captcha-v2-'));

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly siteKey = input.required<string>();

  readonly tabindex = input<string>('0');
  private readonly disabledByCva = signal(false);

  readonly callback = input<CallbackFunction | undefined>(undefined);
  readonly expiredCallback = input<ExpiredCallbackFunction | undefined>(undefined, {
    alias: 'expired-callback',
  });
  readonly errorCallback = input<ErrorCallbackFunction | undefined>(undefined, {
    alias: 'error-callback',
  });

  protected widgetId = '';

  readonly value = model<string | null>(null);

  private readonly scReCaptchaService = inject(ScReCaptchaService);

  ngOnInit() {
    console.log('ScReCaptchaV2Base.ngOnInit()');
    this.scReCaptchaService.scReCaptchaV2s.push(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  renderWidget() {}

  defaultCallback(token: string) {
    this.setValue(token);
  }

  defaultExpiredCallback() {
    this.setValue(null);
  }

  defaultErrorCallback() {
    console.error('error');
    this.setValue(null);
  }

  execute() {
    grecaptcha.execute(this.widgetId);
  }

  getResponse() {
    grecaptcha.getResponse(this.widgetId);
  }

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
