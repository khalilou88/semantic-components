import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-phone-arrow-down-left-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1
    1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012
    9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1
    0 0 1-.542 1.046Z&#34;/&gt; &lt;path d=&#34;m11.56 5.5 2.22-2.22a.75.75 0 0 0-1.06-1.06L10.5
    4.44V2.75a.75.75 0 0 0-1.5 0v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-1.69Z&#34;/&gt;
    &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPhoneArrowDownLeftIcon {
  readonly class = input('');
}