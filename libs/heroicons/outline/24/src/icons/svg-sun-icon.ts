import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-sun-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24
    24&#34; stroke-width=&#34;1.5&#34; stroke=&#34;currentColor&#34; aria-hidden=&#34;true&#34;
    data-slot=&#34;icon&#34;&gt; &lt;path stroke-linecap=&#34;round&#34;
    stroke-linejoin=&#34;round&#34; d=&#34;M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386
    6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75
    12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSunIcon {
  readonly class = input('');
}
