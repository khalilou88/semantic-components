import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-video-camera-slash-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24
    24&#34; stroke-width=&#34;1.5&#34; stroke=&#34;currentColor&#34; aria-hidden=&#34;true&#34;
    data-slot=&#34;icon&#34;&gt; &lt;path stroke-linecap=&#34;round&#34;
    stroke-linejoin=&#34;round&#34; d=&#34;m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0
    0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5
    19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621
    0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVideoCameraSlashIcon {
  readonly class = input('');
}
