import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-swatch-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M2 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-5
    0V3Zm3.25 8.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z&#34; clip-rule=&#34;evenodd&#34;/&gt;
    &lt;path d=&#34;m8.5 11.035 3.778-3.778a1 1 0 0 0 0-1.414l-2.122-2.121a1 1 0 0 0-1.414
    0l-.242.242v7.07ZM7.656 14H13a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.344l-5 5Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSwatchIcon {
  readonly class = input('');
}
