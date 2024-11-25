import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-exclamation-triangle-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24
    24&#34; stroke-width=&#34;1.5&#34; stroke=&#34;currentColor&#34; aria-hidden=&#34;true&#34;
    data-slot=&#34;icon&#34;&gt; &lt;path stroke-linecap=&#34;round&#34;
    stroke-linejoin=&#34;round&#34; d=&#34;M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948
    3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697
    16.126ZM12 15.75h.007v.008H12v-.008Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgExclamationTriangleIcon {
  readonly class = input('');
}
