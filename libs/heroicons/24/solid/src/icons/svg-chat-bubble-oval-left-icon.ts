import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-chat-bubble-oval-left-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 24 24&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0
    1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41
    2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833
    0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z&#34; clip-rule=&#34;evenodd&#34;/&gt;
    &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgChatBubbleOvalLeftIcon {
  readonly class = input('');
}