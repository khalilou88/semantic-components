import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-h2-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    &lt;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; viewBox=&#34;0 0 16 16&#34;
    fill=&#34;currentColor&#34; aria-hidden=&#34;true&#34; data-slot=&#34;icon&#34;&gt; &lt;path
    fill-rule=&#34;evenodd&#34; d=&#34;M1.75 3a.75.75 0 0 1 .75.75v3.5h4v-3.5a.75.75 0 0 1 1.5
    0v8.5a.75.75 0 0 1-1.5 0v-3.5h-4v3.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 1.75 3ZM12.5 7.5c-.558
    0-1.106.04-1.642.119a.75.75 0 0 1-.216-1.484 12.848 12.848 0 0 1 2.836-.098A1.629 1.629 0 0 1
    14.99 7.58a8.884 8.884 0 0 1-.021 1.166c-.06.702-.553 1.24-1.159 1.441l-2.14.713a.25.25 0 0
    0-.17.237v.363h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-1.113a1.75 1.75 0 0 1
    1.197-1.66l2.139-.713c.1-.033.134-.103.138-.144a7.344 7.344 0 0 0
    .018-.97c-.003-.052-.046-.111-.128-.117A11.417 11.417 0 0 0 12.5 7.5Z&#34;
    clip-rule=&#34;evenodd&#34;/&gt; &lt;/svg&gt;
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgH2Icon {
  readonly class = input('');
}