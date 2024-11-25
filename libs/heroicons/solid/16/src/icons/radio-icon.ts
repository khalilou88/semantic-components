import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'radio-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M11.437 1.45a.75.75 0 0 1-.386.987L7.478 4H13a2 2 0 0 1 2
    2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.736l6.713-2.937a.75.75 0 0 1 .988.386ZM12 8a1
    1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0
    0-1.5.75.75 0 0 0 0 1.5Zm2.323-1.225a.75.75 0 1 1-.75-1.3.75.75 0 0 1 .75 1.3ZM7.3 9.75a.75.75 0
    1 0 1.299.75.75.75 0 0 0-1.3-.75Zm-.549 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5
    0Zm-3.348-.75a.75.75 0 1 0 1.3-.75.75.75 0 0 0-1.3.75Zm.275-1.975a.75.75 0 1 1 .75-1.3.75.75 0 0
    1-.75 1.3ZM12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z&#34; clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioIcon {
  readonly class = input('');
}
