import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'square-3-stack-3d-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M7.628 1.099a.75.75 0 0 1 .744 0l5.25 3a.75.75 0 0 1 0 1.302l-5.25 3a.75.75 0 0 1-.744
    0l-5.25-3a.75.75 0 0 1 0-1.302l5.25-3Z&#34;/&gt; &lt;path d=&#34;m2.57 7.24-.192.11a.75.75 0 0 0
    0 1.302l5.25 3a.75.75 0 0 0 .744 0l5.25-3a.75.75 0 0 0 0-1.303l-.192-.11-4.314 2.465a2.25 2.25 0
    0 1-2.232 0L2.57 7.239Z&#34;/&gt; &lt;path d=&#34;m2.378 10.6.192-.11 4.314 2.464a2.25 2.25 0 0
    0 2.232 0l4.314-2.465.192.11a.75.75 0 0 1 0 1.303l-5.25 3a.75.75 0 0 1-.744 0l-5.25-3a.75.75 0 0
    1 0-1.303Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Square3Stack3dIcon {
  readonly class = input('');
}
