import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IdGenerator } from './id-generator';
import { SC_RE_CAPTCHA_V2_SITE_KEY } from './re-captcha-config';
import { ScReCaptchaService } from './re-captcha.service';

declare let grecaptcha: any;

type CallbackFn = (token: string) => void;
type ExpiredCallbackFn = () => void;
type ErrorCallbackFn = () => void;

@Directive({
  host: {
    '[id]': 'id',
    '[class.g-recaptcha]': 'true',
  },
})
export class ScReCaptchaBase implements OnInit, OnDestroy, ControlValueAccessor {
  private readonly id = inject(IdGenerator).getId('sc-re-captcha-');
  protected widgetId = '';

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly scReCaptchaService = inject(ScReCaptchaService);

  private readonly v2SiteKey = inject<string>(SC_RE_CAPTCHA_V2_SITE_KEY, {
    optional: true,
  });
  readonly siteKeyInput = input<string>('', {
    alias: 'siteKey',
  });

  private readonly siteKey = computed(() => {
    if (this.siteKeyInput()) {
      return this.siteKeyInput();
    }

    return this.v2SiteKey ?? '';
  });

  readonly tabindex = input<string>('0');
  readonly callback = input<CallbackFn | undefined>(undefined);
  readonly expiredCallback = input<ExpiredCallbackFn | undefined>(undefined, {
    alias: 'expired-callback',
  });
  readonly errorCallback = input<ErrorCallbackFn | undefined>(undefined, {
    alias: 'error-callback',
  });

  private readonly value = signal<string | null>(null);
  private readonly disabledByCva = signal(false);

  scriptLoaded = false;
  private readonly router = inject(Router);
  private readonly recaptchaContainer = inject(ElementRef);
  private readonly subscriptions: Subscription[] = [];

  scriptLoadError = output<void>();

  ngOnInit(): void {
    // this.registerCallbacks();
    this.loadRecaptcha();
  }

  ngOnDestroy(): void {
    // Clean up all subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // Check if widget is actually rendered in the DOM
  private isWidgetRendered(): boolean {
    if (!this.recaptchaContainer?.nativeElement) {
      return false;
    }

    // Check if iframe exists inside the container (reCAPTCHA creates an iframe when rendered)
    return this.recaptchaContainer.nativeElement.querySelector('iframe') !== null;
  }

  private loadRecaptcha(): void {
    const scriptSub = this.scReCaptchaService.loadScript().subscribe((loaded) => {
      this.scriptLoaded = loaded;

      if (!loaded) {
        this.scriptLoadError.emit();
        return;
      }

      // If callbacks aren't registered yet, do it now
      // if (!this.callbacksRegistered) {
      //   this.registerCallbacks();
      // }

      // If container is available (view initialized), render widget
      if (this.recaptchaContainer) {
        setTimeout(() => this.render(), 0);
      }
    });

    this.subscriptions.push(scriptSub);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render() {}

  protected renderWidget(themeOrBadge: string, themeOrBadgeValue: string, size: string) {
    this.widgetId = grecaptcha.render(
      this.id,
      {
        sitekey: this.siteKey(),
        [themeOrBadge]: themeOrBadgeValue,
        size: size,
        tabindex: this.tabindex(),
        callback: this.callback() ? this.callback() : this.defaultCallback.bind(this),
        'expired-callback': this.expiredCallback()
          ? this.expiredCallback()
          : this.defaultExpiredCallback.bind(this),
        'error-callback': this.errorCallback()
          ? this.errorCallback()
          : this.defaultErrorCallback.bind(this),
      },
      true,
    );
  }

  private defaultCallback(token: string) {
    this.setValue(token);
  }

  private defaultExpiredCallback() {
    this.setValue(null);
  }

  private defaultErrorCallback() {
    console.error('error');
    this.setValue(null);
  }

  getResponse() {
    grecaptcha.getResponse(this.widgetId);
  }

  reset() {
    grecaptcha.reset(this.widgetId);
  }

  private setValue(newValue: string | null) {
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
