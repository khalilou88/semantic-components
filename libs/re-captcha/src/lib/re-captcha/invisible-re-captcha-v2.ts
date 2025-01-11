import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ScReCaptchaV2Base } from './re-captcha-v2-base';

declare let grecaptcha: any;

@Component({
  selector: 'div[sc-invisible-re-captcha-v2], button[sc-invisible-re-captcha-v2]',
  exportAs: 'scInvisibleReCaptchaV2',
  imports: [],
  template: `
    <ng-content />
  `,
  styles: ``,
  host: {
    '(click)': 'handleClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScInvisibleReCaptchaV2),
      multi: true,
    },
  ],
})
export class ScInvisibleReCaptchaV2 extends ScReCaptchaV2Base implements ControlValueAccessor {
  private readonly hostRef = inject(ElementRef);

  readonly badge = input<'bottomright' | 'bottomleft' | 'inline'>('bottomright');

  private readonly size = signal<'invisible'>('invisible');

  override renderWidget() {
    this.renderWidget2('badge', this.badge(), this.size());
  }

  execute() {
    console.log('execute');
    grecaptcha.execute(this.widgetId);
  }

  handleClick() {
    if (this.hostRef.nativeElement.tagName === 'BUTTON') {
      console.log('handleClick');
      console.log(this);
      console.log(this.getResponse());
      this.execute();
      console.log(this.getResponse());
    }
  }
}
