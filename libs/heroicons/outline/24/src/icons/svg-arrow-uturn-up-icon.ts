import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-arrow-uturn-up-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24
    24&#34; stroke-width=&#34;1.5&#34; stroke=&#34;currentColor&#34; aria-hidden=&#34;true&#34;
    data-slot=&#34;icon&#34;&gt; &lt;path stroke-linecap=&#34;round&#34;
    stroke-linejoin=&#34;round&#34; d=&#34;m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3&#34;/&gt;
    &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgArrowUturnUpIcon {
  readonly class = input('');
}
