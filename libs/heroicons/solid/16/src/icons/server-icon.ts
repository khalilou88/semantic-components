import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'server-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M3.665 3.588A2 2 0 0 1 5.622 2h4.754a2 2 0 0 1 1.958 1.588l1.098 5.218a3.487 3.487 0 0
    0-1.433-.306H4c-.51 0-.995.11-1.433.306l1.099-5.218Z&#34;/&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M4 10a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm8 2.75a.75.75 0 1 0
    0-1.5.75.75 0 0 0 0 1.5ZM9.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerIcon {
  readonly class = input('');
}
