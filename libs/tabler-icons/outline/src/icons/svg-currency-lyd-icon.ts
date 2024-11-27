import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-currency-lyd-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-currency-lyd"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 15h.01" />
      <path d="M21 5v10a2 2 0 0 1 -2 2h-2.764a2 2 0 0 1 -1.789 -1.106l-.447 -.894" />
      <path
        d="M5 8l2.773 4.687c.427 .697 .234 1.626 -.43 2.075a1.38 1.38 0 0 1 -.773 .238h-2.224a.93 .93 0 0 1 -.673 -.293l-.673 -.707"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCurrencyLydIcon {
  readonly class = input('');
}
