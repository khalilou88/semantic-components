import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-rocket-launch-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 24 24&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1
    .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0
    1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1
    7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;path d=&#34;M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243
    5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897
    3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRocketLaunchIcon {
  readonly class = input('');
}