import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'arrow-turn-left-up-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M14 13.25a.75.75 0 0 0-.75-.75h-6.5V4.56l.97.97a.75.75 0 0 0
    1.06-1.06L6.53 2.22a.75.75 0 0 0-1.06 0L3.22 4.47a.75.75 0 0 0 1.06 1.06l.97-.97v8.69c0
    .414.336.75.75.75h7.25a.75.75 0 0 0 .75-.75Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowTurnLeftUpIcon {
  readonly class = input('');
}
