import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-phone-x-mark-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 24 24&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M15.22 3.22a.75.75 0 0 1 1.06 0L18 4.94l1.72-1.72a.75.75 0 1
    1 1.06 1.06L19.06 6l1.72 1.72a.75.75 0 0 1-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 1
    1-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 0 1 0-1.06ZM1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586
    1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285
    11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423
    1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5
    6.75V4.5Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPhoneXMarkIcon {
  readonly class = input('');
}