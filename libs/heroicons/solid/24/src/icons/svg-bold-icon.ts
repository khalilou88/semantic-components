import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bold-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 24 24&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1
    3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0
    0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBoldIcon {
  readonly class = input('');
}
