import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-map-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M5.37 2.257a1.25 1.25 0 0 1 1.214-.054l3.378 1.69
    2.133-1.313A1.25 1.25 0 0 1 14 3.644v7.326c0 .434-.225.837-.595 1.065l-2.775 1.708a1.25 1.25 0 0
    1-1.214.053l-3.378-1.689-2.133 1.313A1.25 1.25 0 0 1 2
    12.354V5.029c0-.434.225-.837.595-1.064L5.37 2.257ZM6 4a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5
    0v-4.5A.75.75 0 0 1 6 4Zm4.75 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMapIcon {
  readonly class = input('');
}
