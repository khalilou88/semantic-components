import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'currency-bangladeshi-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.25 4.707a.75.75 0 0
    1-.78-1.237c.841-.842 2.28-.246 2.28.944V6h5.5a.75.75 0 0 1 0 1.5h-5.5v3.098c0
    .549.295.836.545.87a3.241 3.241 0 0 0 2.799-.966H9.75a.75.75 0 0 1 0-1.5h1.708a.75.75 0 0 1 .695
    1.032 4.751 4.751 0 0 1-5.066 2.92c-1.266-.177-1.837-1.376-1.837-2.356V7.5h-1.5a.75.75 0 0 1
    0-1.5h1.5V4.707Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyBangladeshiIcon {
  readonly class = input('');
}
