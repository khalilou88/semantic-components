import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'chevron-double-up-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M9.47 4.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06
    1.06L10 6.31l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25Zm-4.25 9.25 4.25-4.25a.75.75 0 0 1 1.06
    0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 11.31l-3.72 3.72a.75.75 0 0 1-1.06-1.06Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronDoubleUpIcon {
  readonly class = input('');
}
