import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-gift-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M3.75 3.5c0 .563.186 1.082.5 1.5H2a1 1 0 0 0 0
    2h5.25V5h1.5v2H14a1 1 0 1 0 0-2h-2.25A2.5 2.5 0 0 0 8 1.714 2.5 2.5 0 0 0 3.75 3.5Zm3.499
    0v-.038A1 1 0 1 0 6.25 4.5h1l-.001-1Zm2.5-1a1 1 0 0 0-1 .962l.001.038v1h.999a1 1 0 0 0 0-2Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;path d=&#34;M7.25 8.5H2V12a2 2 0 0 0 2 2h3.25V8.5ZM8.75
    14V8.5H14V12a2 2 0 0 1-2 2H8.75Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGiftIcon {
  readonly class = input('');
}
