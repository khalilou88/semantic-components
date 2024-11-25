import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-speaker-x-mark-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24
    24&#34; stroke-width=&#34;1.5&#34; stroke=&#34;currentColor&#34; aria-hidden=&#34;true&#34;
    data-slot=&#34;icon&#34;&gt; &lt;path stroke-linecap=&#34;round&#34;
    stroke-linejoin=&#34;round&#34; d=&#34;M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5
    12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0
    1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25
    12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSpeakerXMarkIcon {
  readonly class = input('');
}