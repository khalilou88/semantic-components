import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-circle-stack-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 24 24&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9
    4.875Z&#34;/&gt; &lt;path d=&#34;M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0
    1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12
    15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315
    12.75 12 12.75Z&#34;/&gt; &lt;path d=&#34;M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0
    0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9
    4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315
    16.5 12 16.5Z&#34;/&gt; &lt;path d=&#34;M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0
    0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9
    4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315
    20.25 12 20.25Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCircleStackIcon {
  readonly class = input('');
}
