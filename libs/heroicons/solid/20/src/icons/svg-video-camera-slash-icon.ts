import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-video-camera-slash-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M1 13.75V7.182L9.818 16H3.25A2.25 2.25 0 0 1 1 13.75ZM13 6.25v6.568L4.182 4h6.568A2.25
    2.25 0 0 1 13 6.25ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0
    .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75ZM2.28 4.22a.75.75 0 0 0-1.06 1.06l10.5
    10.5a.75.75 0 1 0 1.06-1.06L2.28 4.22Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVideoCameraSlashIcon {
  readonly class = input('');
}
