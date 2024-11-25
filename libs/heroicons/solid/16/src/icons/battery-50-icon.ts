import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'battery-50-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M1 6.25A2.25 2.25 0 0 1 3.25 4h8.5A2.25 2.25 0 0 1 14
    6.25v.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v.085A2.25 2.25 0 0 1 11.75 12h-8.5A2.25
    2.25 0 0 1 1 9.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0
    .75-.75v-3.5a.75.75 0 0 0-.75-.75h-8.5Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;path
    d=&#34;M4.75 7a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-.5A.75.75 0 0
    0 6.75 7h-2Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Battery50Icon {
  readonly class = input('');
}
