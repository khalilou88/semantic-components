import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-document-currency-rupee-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122
    3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9ZM5.75 5a.75.75
    0 0 0 0 1.5c.698 0 1.3.409 1.582 1H5.75a.75.75 0 0 0 0 1.5h1.582c-.281.591-.884 1-1.582 1a.75.75
    0 0 0-.53 1.28l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.567-.567A3.256 3.256 0 0 0 8.913 9h1.337a.75.75
    0 0 0 0-1.5H8.913a3.232 3.232 0 0 0-.424-1h1.761a.75.75 0 0 0 0-1.5h-4.5Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDocumentCurrencyRupeeIcon {
  readonly class = input('');
}
