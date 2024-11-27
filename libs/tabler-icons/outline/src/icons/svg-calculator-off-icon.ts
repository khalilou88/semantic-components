import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-calculator-off-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-calculator-off"
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
      <path
        d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11"
      />
      <path d="M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" />
      <path d="M8 14v.01" />
      <path d="M12 14v.01" />
      <path d="M8 17v.01" />
      <path d="M12 17v.01" />
      <path d="M16 17v.01" />
      <path d="M3 3l18 18" />
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
export class SvgCalculatorOffIcon {
  readonly class = input('');
}
