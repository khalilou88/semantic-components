import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-face-frown-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6 8c.552 0 1-.672
    1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5
    10 5s1 .672 1 1.5Zm-6.005 5.805a.75.75 0 0 0 1.06 0 2.75 2.75 0 0 1 3.89 0 .75.75 0 0 0
    1.06-1.06 4.25 4.25 0 0 0-6.01 0 .75.75 0 0 0 0 1.06Z&#34; clip-rule=&#34;evenodd&#34;/&gt;
    &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFaceFrownIcon {
  readonly class = input('');
}