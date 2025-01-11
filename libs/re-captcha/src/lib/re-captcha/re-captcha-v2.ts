import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaService } from './sc-re-captcha.service';

declare let grecaptcha: any;

@Component({
  selector: 'div[sc-re-captcha-v2], button[sc-re-captcha-v2]',
  exportAs: 'scReCaptchaV2',
  imports: [],
  template: `
    <ng-content />
  `,
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

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly siteKey = input.required<string>();
  readonly theme = input<'dark' | 'light'>('light');
  readonly size = input<'normal' | 'compact'>('normal');
  readonly tabindex = input<string>('0');
  private readonly disabledByCva = signal(false);

  readonly callback = input<Function | undefined>(undefined);
  readonly expiredCallback = input<Function | undefined>(undefined, {
    alias: 'expired-callback',
  });
  readonly errorCallback = input<Function | undefined>(undefined, {
    alias: 'error-callback',
  });

  private widgetId = '';

  readonly value = model<string | null>(null);

  private readonly scReCaptchaService = inject(ScReCaptchaService);

  ngOnInit() {
    console.log('ScReCaptchaV2.ngOnInit()');
    this.scReCaptchaService.scReCaptchaV2s.push(this);
  }

  renderWidget() {
    this.widgetId = grecaptcha.render(this.id(), {
      sitekey: this.siteKey(),
      theme: this.theme(),
      size: this.size(),
      tabindex: this.tabindex(),
      callback: this.callback() ? this.callback() : this.defaultCallback.bind(this),
      'expired-callback': this.expiredCallback()
        ? this.expiredCallback()
        : this.defaultExpiredCallback.bind(this),
      'error-callback': this.errorCallback()
        ? this.errorCallback()
        : this.defaultErrorCallback.bind(this),
    });
  }

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
