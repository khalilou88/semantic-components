import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-document-currency-pound-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122
    3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Zm5.44 3.44a1.5
    1.5 0 0 1 2.12 0 .75.75 0 1 0 1.061-1.061A3 3 0 0 0 6 7.999H4.75a.75.75 0 0 0 0
    1.5h1.225c-.116.571-.62 1-1.225 1a.75.75 0 1 0 0 1.5h5.5a.75.75 0 0 0
    0-1.5H7.2c.156-.304.257-.642.289-1H9.25a.75.75 0 0 0 0-1.5H7.5c0-.384.146-.767.44-1.06Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDocumentCurrencyPoundIcon {
  readonly class = input('');
}