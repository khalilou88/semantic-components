import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bell-slash-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M4 8c0-.26.017-.517.049-.77l7.722 7.723a33.56 33.56 0 0 1-3.722-.01 2 2 0 0 0
    3.862.15l1.134 1.134a3.5 3.5 0 0 1-6.53-1.409 32.91 32.91 0 0 1-3.257-.508.75.75 0 0
    1-.515-1.076A11.448 11.448 0 0 0 4 8ZM17.266 13.9a.756.756 0 0 1-.068.116L6.389 3.207A6 6 0 0 1
    16 8c.001 1.887.455 3.665 1.258 5.234a.75.75 0 0 1 .01.666ZM3.28 2.22a.75.75 0 0 0-1.06
    1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06L3.28 2.22Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBellSlashIcon {
  readonly class = input('');
}
