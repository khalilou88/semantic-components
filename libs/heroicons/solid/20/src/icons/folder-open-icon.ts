import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'folder-open-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 20 20&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    d=&#34;M4.75 3A1.75 1.75 0 0 0 3 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75
    1.75 0 0 0 15.25 5h-3.836a.25.25 0 0 1-.177-.073L9.823 3.513A1.75 1.75 0 0 0 8.586 3H4.75ZM3.104
    9a1.75 1.75 0 0 0-1.673 2.265l1.385 4.5A1.75 1.75 0 0 0 4.488 17h11.023a1.75 1.75 0 0 0
    1.673-1.235l1.384-4.5A1.75 1.75 0 0 0 16.896 9H3.104Z&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderOpenIcon {
  readonly class = input('');
}
