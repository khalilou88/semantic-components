import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-receipt-percent-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M4.93 2.31a41.401 41.401 0 0 1 10.14 0C16.194 2.45 17 3.414
    17 4.517V17.25a.75.75 0 0 1-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 0 1-.65 0l-2.8-1.344-2.8
    1.344A.75.75 0 0 1 3 17.25V4.517c0-1.103.806-2.068 1.93-2.207Zm8.85 4.97a.75.75 0 0
    0-1.06-1.06l-6.5 6.5a.75.75 0 1 0 1.06 1.06l6.5-6.5ZM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 5a1 1 0
    1 0 0-2 1 1 0 0 0 0 2Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgReceiptPercentIcon {
  readonly class = input('');
}