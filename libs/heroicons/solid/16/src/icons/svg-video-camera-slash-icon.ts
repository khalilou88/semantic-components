import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-video-camera-slash-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M1 10V6.682L6.318 12H3a2 2 0 0 1-2-2ZM10 6v3.318L4.682 4H8a2 2 0 0 1 2 2ZM14.537
    4.057A.75.75 0 0 1 15 4.75v6.5a.75.75 0 0 1-1.28.53l-2-2a.75.75 0 0 1-.22-.53v-2.5a.75.75 0 0 1
    .22-.53l2-2a.75.75 0 0 1 .817-.163ZM2.78 4.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 0 0
    1.06-1.06l-6.5-6.5Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVideoCameraSlashIcon {
  readonly class = input('');
}
