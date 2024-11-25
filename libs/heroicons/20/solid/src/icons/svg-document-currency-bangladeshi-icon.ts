import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-document-currency-bangladeshi-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5
    0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm1.97
    4.53a.75.75 0 0 0 .78.178V8h-1.5a.75.75 0 1 0 0 1.5h1.5v3.098c0 .98.571 2.18 1.837 2.356a4.751
    4.751 0 0 0 5.066-2.92.75.75 0 0 0-.695-1.031H11.75a.75.75 0 0 0 0 1.5h.343a3.241 3.241 0 0
    1-2.798.966c-.25-.035-.545-.322-.545-.87V9.5h5.5a.75.75 0 0 0
    0-1.5h-5.5V6.415c0-1.19-1.439-1.786-2.28-.945a.75.75 0 0 0 0 1.06Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDocumentCurrencyBangladeshiIcon {
  readonly class = input('');
}