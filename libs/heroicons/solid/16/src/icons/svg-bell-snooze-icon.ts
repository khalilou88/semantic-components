import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bell-snooze-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M8 1a4 4 0 0 1 4 4v2.379c0 .398.158.779.44 1.06l1.267 1.268a1
    1 0 0 1 .293.707V11a1 1 0 0 1-1 1h-2a3 3 0 1 1-6 0H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1
    .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38V5a4 4 0 0 1 4-4Zm0 12.5A1.5 1.5 0 0 1 6.5 12h3A1.5 1.5
    0 0 1 8 13.5ZM6.75 4a.75.75 0 0 0 0 1.5h1.043L6.14 7.814A.75.75 0 0 0 6.75 9h2.5a.75.75 0 1 0
    0-1.5H8.207L9.86 5.186A.75.75 0 0 0 9.25 4h-2.5Z&#34; clip-rule=&#34;evenodd&#34;/&gt;
    &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBellSnoozeIcon {
  readonly class = input('');
}