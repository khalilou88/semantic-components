import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-chat-bubble-left-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0
    1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15
    9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277
    1 4.26v4.482Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgChatBubbleLeftIcon {
  readonly class = input('');
}